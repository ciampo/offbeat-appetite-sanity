import { MdBubbleChart } from 'react-icons/md';

import { generateEmailField } from '../common/email';

const socialReplaceDescription =
  'The ":platformName" placeholder will be replaced with each social platform name';

export default {
  name: 'siteMiscContent',
  type: 'document',
  title: 'Site Miscellaneous Content',
  icon: MdBubbleChart,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [
    { name: 'general', title: 'General' },
    { name: 'social', title: 'Social' },
    { name: 'recipe', title: 'Recipe block' },
    { name: 'blogPost', title: 'Blog post' },
    { name: 'subscribeForm', title: 'Subscribe form' },
    { name: 'subscribeModal', title: 'Subscribe modal banner' },
  ],
  fields: [
    // Site Name
    {
      fieldset: 'general',
      name: 'siteName',
      type: 'string',
      title: 'Site Name',
      validation: (Rule) => Rule.required(),
    },

    // Org Founder
    {
      fieldset: 'general',
      name: 'organisationAuthor',
      type: 'reference',
      title: 'Site Founder',
      description: 'The person who created the site',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
    },

    // Org email
    generateEmailField({
      fieldset: 'general',
      name: 'organisationEmail',
      title: 'Site Email',
      description: 'The email associated with the site',
    }),

    // Org email - label
    {
      fieldset: 'general',
      name: 'organisationEmailLabel',
      type: 'string',
      title: 'Site Email label label',
      description: 'The text labelling the email link',
      validation: (Rule) => Rule.required(),
    },

    // Social Links
    {
      fieldset: 'social',
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      description: 'A list of links to the social accounts associated to this project',
      of: [
        {
          title: 'Social Link',
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'URL',
              description: "The link's URL",
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              description: "The link's label (used for accessibility reasons)",
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'platform',
              title: 'Platform',
              description: 'The social network platform for this link',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                list: [
                  { title: 'Instragram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Pinterest', value: 'pinterest' },
                ],
              },
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(1),
            },
          ],
        },
      ],
    },

    // Social Share Label
    {
      fieldset: 'social',
      name: 'socialShareLabel',
      type: 'string',
      title: 'Social Share label',
      description: `The text used to label social sharing links. ${socialReplaceDescription}`,
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Information section
    {
      fieldset: 'recipe',
      name: 'recipeInformationSectionTitle',
      type: 'string',
      title: 'Information Section Title',
      description:
        'The text used as the title of the information section in a recipe (visually hiddem but useful for assistive technology).',
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Description section
    {
      fieldset: 'recipe',
      name: 'recipeDescriptionSectionTitle',
      type: 'string',
      title: 'Description Section Title',
      description:
        'The text used as the title of the description section in a recipe (visually hiddem but useful for assistive technology).',
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Ingredients section
    {
      fieldset: 'recipe',
      name: 'recipeIngredientsSectionTitle',
      type: 'string',
      title: 'Ingredients Section Title',
      description: 'The text used as the title of the ingredients section in a recipe.',
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Method section
    {
      fieldset: 'recipe',
      name: 'recipeMethodSectionTitle',
      type: 'string',
      title: 'Method Section Title',
      description: 'The text used as the title of the method section in a recipe.',
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Prep time
    {
      fieldset: 'recipe',
      name: 'recipePrepTimeLabel',
      type: 'string',
      title: 'Preparation Time Label',
      description: 'The text used to label the preparation time field in a recipe.',
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Cooking time
    {
      fieldset: 'recipe',
      name: 'recipeCookTimeLabel',
      type: 'string',
      title: 'Cooking Time Label',
      description: 'The text used to label the cooking time field in a recipe.',
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Time label
    {
      fieldset: 'recipe',
      name: 'recipeTimeUnitLabel',
      type: 'string',
      title: 'Time Unit label',
      description: 'The text used to label the amount of time in a recipe.',
      validation: (Rule) => Rule.required(),
    },

    // Recipe - Servings label
    {
      fieldset: 'recipe',
      name: 'recipeServingsLabel',
      type: 'string',
      title: 'Servings label',
      description: 'The text used to label the resulting yield of the recipe.',
      validation: (Rule) => Rule.required(),
    },

    // Blog post - Author label
    {
      fieldset: 'blogPost',
      name: 'authorLabel',
      type: 'string',
      title: 'Author label',
      description: `The text labelling the author section.`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Title
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormTitle',
      type: 'string',
      title: 'Form title',
      description: `The text used as the title of the subscribe form`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Name input label
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormNameInputLabel',
      type: 'string',
      title: 'Name input label',
      description: `The text used as the label of the name input`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Email input label
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormEmailInputLabel',
      type: 'string',
      title: 'Email input label',
      description: `The text used as the label of the email input`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Submit button label
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormSubmitButtonLabel',
      type: 'string',
      title: 'Submit button label',
      description: `The text used as the label of the submit button`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Submit button label when submitting
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormSubmitButtonLabelSubmitting',
      type: 'string',
      title: 'Submit button label (while submitting)',
      description: `The text used as the label of the submit button while data is being submitted`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Form disabled message
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormMessageDisabled',
      type: 'string',
      title: 'Form disabled message',
      description: `The text shown to the user when the form is disabled`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Submission success message
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormMessageSuccess',
      type: 'string',
      title: 'Submission success message',
      description: `The text shown to the user after the form data was submitted successfully`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe form - Error message
    {
      fieldset: 'subscribeForm',
      name: 'subscribeFormMessageError',
      type: 'string',
      title: 'Error message',
      description: `The text shown to the user when an error happens during submission`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe modal - Title
    {
      fieldset: 'subscribeModal',
      name: 'subscribeModalTitle',
      type: 'string',
      title: "Subscribe modal banner's title",
      description: `The text displayed as the title in the "subscribe" modal banner`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe modal - Description
    {
      fieldset: 'subscribeModal',
      name: 'subscribeModalDescription',
      type: 'string',
      title: "Subscribe modal banner's description",
      description: `The text displayed as the description in the "subscribe" modal banner`,
      validation: (Rule) => Rule.required(),
    },

    // Subscribe modal - Image
    {
      fieldset: 'subscribeModal',
      name: 'subscribeModalImage',
      type: 'reference',
      title: "Subscribe modal banner's image",
      to: [{ type: 'accessibleImage' }],
      description: 'The image displayed in the "subscribe" modal banner',
      validation: (Rule) => Rule.required(),
    },

    // Subscribe modal - Description
    {
      fieldset: 'subscribeModal',
      name: 'subscribeModalCTAButton',
      type: 'string',
      title: "Subscribe modal banner's label for the CTA button",
      description: `The text displayed for the CTA button in the "subscribe" modal banner`,
      validation: (Rule) => Rule.required(),
    },
  ],
};
