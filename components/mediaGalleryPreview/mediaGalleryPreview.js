import client from 'part:@sanity/base/client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './mediaGalleryPreview.css';

const MediaGalleryPreview = ({ value }) => {
  const [previewItems, setPreviewItems] = useState([]);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function fetchPreviewItemsInfo() {
      const newPreviewItems = [];
      for (const item of value.items) {
        if (item._type === 'captionedImage') {
          const { alt, url } = await client.fetch(/* groq */ `*[_id == "${item.image._ref}"][0]{
              "alt": image.alt,
              "url": image.asset->url
            }`);
          newPreviewItems.push({
            caption: item.caption,
            alt: `📸 ${alt}`,
            url,
          });
        } else if (item._type === 'captionedVideo') {
          const { alt, url } = await client.fetch(/* groq */ `*[_id == "${item.video._ref}"][0]{
              "alt": video.alt,
              "url": video.poster.asset->url
            }`);
          newPreviewItems.push({
            caption: item.caption,
            alt: `🎥 ${alt}`,
            url,
          });
        }
      }

      setPreviewItems(newPreviewItems);
    }
    // Execute the created function directly
    fetchPreviewItemsInfo();
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <p>Media Gallery, {previewItems.length} items</p>
      {previewItems.length && (
        <ul className={styles.list}>
          {previewItems.map((pItem, index) => (
            <li className={styles.listItem} key={index}>
              <img className={styles.itemImage} src={pItem.url} alt={pItem.alt} />
              <span className={styles.itemText}>
                <span>{pItem.alt}</span>
                <small>{pItem.caption || '[no caption]'}</small>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MediaGalleryPreview.propTypes = {
  value: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default MediaGalleryPreview;
