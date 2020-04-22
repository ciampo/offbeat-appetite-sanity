import MdBubbleChart from 'react-icons/lib/md/bubble-chart';

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
    { name: 'subcribe', title: 'Subscribe form' },
    { name: 'recipe', title: 'Recipe block' },
    { name: 'blogPost', title: 'Blog post' },
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

    // Subscribe - Name
    {
      fieldset: 'subcribe',
      name: 'subscribeNameLabel',
      type: 'string',
      title: 'Subscribe Name Field label',
      description: 'The text used to label the name field in the subscribe form.',
      validation: (Rule) => Rule.required(),
    },

    // Subscribe - Email
    {
      fieldset: 'subcribe',
      name: 'subscribeEmailLabel',
      type: 'string',
      title: 'Subscribe Email Field label',
      description: 'The text used to label the email field in the subscribe form.',
      validation: (Rule) => Rule.required(),
    },

    // Subscribe - Submit button
    {
      fieldset: 'subcribe',
      name: 'subscribeSubmitLabel',
      type: 'string',
      title: 'Subscribe Submit Button label',
      description: 'The text used to label the submit button in the subscribe form.',
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
  ],
};
