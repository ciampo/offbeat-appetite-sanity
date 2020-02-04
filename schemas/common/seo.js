export const generateSeoTitleField = ({ additionalDescription = '' } = {}) => ({
  fieldset: 'seo',
  name: 'seoTitle',
  type: 'string',
  title: 'SEO title',
  description: `The title text used for SEO purposes. The ":siteName" placeholder will be replaced with the site name. ${additionalDescription}`,
  validation: (Rule) => Rule.max(60).required(),
});

export const generateSeoDescriptionField = ({ additionalDescription = '' } = {}) => ({
  fieldset: 'seo',
  name: 'seoDescription',
  type: 'string',
  title: 'SEO description',
  description: `The description text used for SEO purposes. The ":siteName" placeholder will be replaced with the site name. ${additionalDescription}`,
  validation: (Rule) => Rule.max(160).required(),
});

export const generateSeoImageField = () => ({
  fieldset: 'seo',
  name: 'seoImage',
  type: 'image',
  title: 'SEO image',
  description: 'The image used for SEO purposes (e.g. page previews). Ideal size is 1200*630px',
  options: {
    storeOriginalFilename: false,
    accept: '.png, .jpg, .jpeg',
  },
  validation: (Rule) => Rule.required(),
});
