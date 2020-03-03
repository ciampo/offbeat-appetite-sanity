import { portableTextMarks, portableTextLists } from '../common/portableText';

export default {
  name: 'simplePortableText',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Only allow body text
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: portableTextLists,
      marks: portableTextMarks,
    },
  ],

  validation: (Rule) => Rule.required(),
};
