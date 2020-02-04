/* eslint-disable react/prop-types */
import React from 'react';
import LinkIcon from 'react-icons/lib/md/link';

const ExternalLinkIcon = () => (
  <>
    <LinkIcon />↗
  </>
);
const ExternalLinkRender = (props) => {
  return (
    <span>
      {props.children} <LinkIcon />
      {props.blank ? '↑' : '→'}
    </span>
  );
};

const InternalLinkIcon = () => (
  <>
    <LinkIcon />↓
  </>
);
const InternalLinkRender = (props) => {
  return (
    <span>
      {props.children} <InternalLinkIcon />
    </span>
  );
};

export const portableTextMarks = {
  decorators: [
    { title: 'Strong', value: 'strong' },
    { title: 'Emphasis', value: 'em' },
  ],
  annotations: [
    {
      name: 'internalLink',
      type: 'object',
      title: 'Internal link',
      blockEditor: {
        icon: InternalLinkIcon,
        render: InternalLinkRender,
      },
      fields: [
        {
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [{ type: 'blogPost' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'link',
      type: 'object',
      title: 'External link',
      blockEditor: {
        icon: ExternalLinkIcon,
        render: ExternalLinkRender,
      },
      fields: [
        {
          name: 'href',
          type: 'url',
          title: 'URL',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Open in new tab',
          name: 'blank',
          description: 'Read https://css-tricks.com/use-target_blank/',
          type: 'boolean',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};

export const portableTextLists = [
  { title: 'Bullet', value: 'bullet' },
  { title: 'Number', value: 'number' },
];
