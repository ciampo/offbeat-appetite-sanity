export const generateSlugField = ({ name, source, maxLength }) => ({
  name,
  type: 'slug',
  title: 'Slug',
  description:
    'CHANGING THE SLUG OF AN EXISTING DOCUMENT IS USUALLY A BAD IDEA. Speak to the admin / developer before doing so',
  options: {
    source,
    maxLength,
  },
  validation: (Rule) => Rule.required(),
});
