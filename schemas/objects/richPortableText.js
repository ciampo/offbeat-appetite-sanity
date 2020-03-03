import MdImage from 'react-icons/lib/md/image';
import MdVideoCam from 'react-icons/lib/md/videocam';
import MdPermMedia from 'react-icons/lib/md/perm-media';
import MdRestaurantMenu from 'react-icons/lib/md/restaurant-menu';

import { portableTextMarks, portableTextLists } from '../common/portableText';

export default {
  name: 'richPortableText',
  type: 'array',
  title: 'Content',
  description: 'Rich portable text allowing custom blocks.',
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
      icon: MdImage,
    },
    {
      type: 'captionedVideo',
      icon: MdVideoCam,
    },
    {
      type: 'mediaGallery',
      icon: MdPermMedia,
    },
    {
      type: 'recipe',
      icon: MdRestaurantMenu,
    },
  ],
};
