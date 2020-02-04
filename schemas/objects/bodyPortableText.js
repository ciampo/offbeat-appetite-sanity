import { portableTextMarks, portableTextLists } from '../common/portableText';

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: portableTextLists,
      marks: portableTextMarks,
    },
    {
      type: 'captionedImage',
    },
  ],
};
