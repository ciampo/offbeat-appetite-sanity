import { MdStars } from 'react-icons/md';

export default {
  name: 'blogPostRating',
  type: 'document',
  title: 'Blog Post Rating',
  icon: MdStars,
  liveEdit: true,
  fields: [
    // Rating
    {
      name: 'rating',
      type: 'number',
      title: 'User Rating',
      description: 'The rating given to the post by the user — ⚠️ DO NOT EDIT THIS FIELD MANUALLY',
      validation: (Rule) => Rule.required(),
    },

    // Blog Post
    {
      name: 'post',
      type: 'reference',
      title: 'Post',
      description: 'The blog post that received the rating — ⚠️ DO NOT EDIT THIS FIELD MANUALLY',
      to: [{ type: 'blogPost' }],
      validation: (Rule) => Rule.required(),
    },
  ],

  initialValue: {
    timestamp: new Date().toISOString(),
  },

  preview: {
    select: {
      timestamp: '_updatedAt',
      title: 'post.title',
      rating: 'rating',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.rating} [${selection.timestamp}]`,
      };
    },
  },
};
