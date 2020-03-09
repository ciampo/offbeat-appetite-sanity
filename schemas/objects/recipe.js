export default {
  name: 'recipe',
  title: 'Recipe',
  description: 'A recipe block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The title of the recipe section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'description',
      title: 'Description',
      description: 'The description of the recipe',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'preparationTime',
      title: 'Preparation Time',
      description: 'The time it takes to prepare and mix the ingredients (in minutes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },

    {
      name: 'cookingTime',
      title: 'Cooking Time',
      description: 'The time it takes to cook the dish (in minutes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },

    {
      name: 'servings',
      title: 'Number of servings',
      description: 'The number of servings that the recipe produces',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    },

    {
      name: 'ingredients',
      title: 'Ingredients',
      description: 'The list ingredients needed for the recipe',
      type: 'array',
      of: [
        {
          title: 'Actor name',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              description: "The ingredient's name",
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'unit',
              title: 'Unit',
              description: "The unit of measure for the ingredients's quantity",
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                list: [
                  { title: 'Grams', value: 'gr' },
                  { title: 'KiloGrams', value: 'kg' },
                  { title: 'MilliLitres', value: 'ml' },
                  { title: 'Litres', value: 'l' },
                  { title: 'no unit', value: 'unitless' },
                ],
              },
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(1),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              description: "The ingredient's quantity. Use '0' if no unit should be specified",
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              name: 'name',
              unit: 'unit',
              quantity: 'quantity',
            },
            prepare(selection) {
              const quantity = selection.quantity || '';
              const unit =
                selection.unit.length > 0 && selection.unit[0] === 'unitless'
                  ? ''
                  : `${selection.unit[0]}, `;
              const name = selection.name || '—';

              return {
                title: `${quantity} ${unit}${name}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => [
        Rule.min(1).error('There should be at least 1 ingredient'),
        Rule.unique(),
      ],
    },

    {
      name: 'method',
      title: 'Method',
      description: 'The instructions to follow in order to cook this recipe',
      type: 'simplePortableText',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare(selection) {
      return {
        title: `Recipe: ${selection.title}`,
        subtitle: selection.description,
      };
    },
  },
};
