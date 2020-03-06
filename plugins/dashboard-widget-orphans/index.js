import client from 'part:@sanity/base/client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'part:@sanity/components/buttons/default';

import styles from './Orphans.css';

const SANITY_TYPES = [
  'accessibleImage',
  'accessibleVideo',
  'sanity.imageAsset',
  'sanity.fileAsset',
];

const ORPHAN_ASSETS_QUERY = /* groq */ `
*[ _type in [${SANITY_TYPES.map((type) => `"${type}"`).join(', ')}] ] {
  _id,
  _type,
  _createdAt,
  "url": coalesce(url, image.asset->url, video.asset->url),
  "size": coalesce(size, image.asset->size, video.asset->size),
  "mimeType": coalesce(mimeType, image.asset->mimeType, video.asset->mimeType),
  "refs": count(*[ references(^._id) ]),
} [ refs == 0 ] | order(size desc)`;

const sizeMb = (sizeBytes = 0) => Math.round((sizeBytes / 1024 / 1024) * 100) / 100;

const OrphanListItem = ({ orphanObject, onButtonClick, buttonDisabled }) => {
  const { _id, _type, _createdAt, url, size, mimeType } = orphanObject;

  return (
    <span className={styles.orphanItem}>
      {/* Media */}
      <a className={styles.mediaLink} href={url} target="_blank" rel="noopener noreferrer">
        {/image/.test(mimeType) && <img className={styles.media} src={url} alt="" />}
        {/video/.test(mimeType) && <video className={styles.media} src={url} />}
      </a>
      {/* Info */}
      <span className={styles.info}>
        <small className={styles.infoItem}>
          TYPE: <pre className={styles.preText}>{_type}</pre> — SIZE:{' '}
          <pre className={styles.preText}>{sizeMb(size)} MB</pre>
        </small>
        <small className={styles.infoItem}>
          ID: <pre className={styles.preText}>#{_id}</pre>
        </small>
        <small className={styles.infoItem}>
          CREATED: <pre className={styles.preText}>#{_createdAt}</pre>
        </small>
      </span>
      {/* Button */}
      <Button
        disabled={buttonDisabled}
        inverted={true}
        kind="default"
        className={styles.itemButton}
        onClick={onButtonClick}
      >
        Delete
      </Button>
    </span>
  );
};
OrphanListItem.propTypes = {
  orphanObject: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    _type: PropTypes.string.isRequired,
    _createdAt: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    mimeType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
};

class Orphans extends React.Component {
  state = {
    orphans: [],
    processing: false,
    error: null,
  };

  fetchOrphans = () => {
    client
      .fetch(ORPHAN_ASSETS_QUERY)
      .then((result) => {
        this.setState({
          error: null,
          orphans: result,
        });
      })
      .catch((error) => this.setState({ error }));
  };

  deleteSingleOrphan = (orphanId) => {
    this.setState(
      {
        processing: true,
      },
      () => {
        client
          .delete(orphanId)
          .then((res) => {
            console.log('Orphans deleted', res);
            this.setState(
              {
                processing: false,
                error: null,
              },
              () => this.fetchOrphans()
            );
          })
          .catch((err) => {
            console.error('Error while deleting orphans: ', err.message);
            this.setState({
              processing: false,
              error: err.message,
            });
          });
      }
    );
  };

  deleteAllOrphans = () => {
    this.setState(
      {
        processing: true,
      },
      () => {
        Promise.all(this.state.orphans.map((orphanObject) => client.delete(orphanObject._id)))
          .then((res) => {
            console.log('Orphans deleted', res);
            this.setState(
              {
                processing: false,
                error: null,
              },
              () => this.fetchOrphans()
            );
          })
          .catch((err) => {
            console.error('Error while deleting orphan: ', err.message);
            this.setState({
              processing: false,
              error: err.message,
            });
          });
      }
    );
  };

  componentDidMount() {
    this.fetchOrphans();
  }

  render() {
    const { error, orphans, processing } = this.state;
    if (error) {
      return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }

    const totalSize = orphans
      .map((orphanObj) => orphanObj.size)
      .reduce((prev, curr) => prev + curr, 0);

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            [{orphans.length}] Orphan Assets (
            <pre className={styles.preText}>{sizeMb(totalSize)} MB</pre>)
          </h2>
        </header>
        <div className={styles.content}>
          {orphans.length ? (
            <ul className={styles.list}>
              {orphans.map((orphanDoc) => (
                <li key={orphanDoc._id}>
                  <OrphanListItem
                    orphanObject={orphanDoc}
                    buttonDisabled={processing}
                    onButtonClick={() => this.deleteSingleOrphan(orphanDoc._id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No orphan assets were found.</p>
          )}
        </div>
        <div className={styles.footer}>
          <Button
            bleed
            color="primary"
            kind="simple"
            disabled={orphans.length === 0 || processing}
            onClick={this.deleteAllOrphans}
          >
            Delete ALL orhans docs
          </Button>
        </div>
      </div>
    );
  }
}

export default {
  name: 'orphans',
  component: Orphans,
};
