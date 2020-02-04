import { portableTextMarks, portableTextLists } from '../common/portableText';

export default {
  name: 'bioPortableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Only allow body text in the bio
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: portableTextLists,
      marks: portableTextMarks,
    },
  ],

  validation: (Rule) => Rule.required(),
};
