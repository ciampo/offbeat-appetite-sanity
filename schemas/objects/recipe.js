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
      title: 'Servings',
      description: 'The quantity of food produced by the recipe',
      type: 'object',
      fields: [
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantity',
          description: 'A number representing the quantity of food',
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: 'unit',
          type: 'string',
          title: 'Unit',
          description: 'The unit associated to the quantity (e.g. people, slices, loafs..)',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'ingredients',
      title: 'Ingredients',
      description: 'The list ingredients needed for the recipe',
      type: 'array',
      of: [
        {
          title: 'Ingredient',
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
      validation: (Rule) => Rule.unique().min(1),
    },

    {
      name: 'method',
      title: 'Method',
      description: 'The instructions to follow in order to cook this recipe',
      type: 'array',
      of: [
        {
          name: 'methodStep',
          type: 'object',
          title: 'Step',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Step title',
              description: 'The title of the step',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              type: 'simplePortableText',
              title: 'Content',
              description: 'The content of the step',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },

    {
      name: 'cuisine',
      title: 'Cuisine',
      description: 'Used mainly for SEO purposes',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'category',
      title: 'Recipe category',
      description: 'Used mainly for SEO purposes. Examples: appetizer, entree, dessert, etc.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'calories',
      title: 'Calories',
      description: 'Used mainly for SEO purposes. The number of calories per serving',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },

    {
      name: 'diets',
      title: 'Suitable for diets',
      description: 'Used mainly for SEO purposes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Diabetic', value: 'DiabeticDiet' },
          { title: 'Gluten Free', value: 'GlutenFreeDiet' },
          { title: 'Halal', value: 'HalalDiet' },
          { title: 'Hindu', value: 'HinduDiet' },
          { title: 'Kosher', value: 'KosherDiet' },
          { title: 'Low Calories', value: 'LowCalorieDiet' },
          { title: 'Low Fat', value: 'LowFatDiet' },
          { title: 'Low Lactose', value: 'LowLactoseDiet' },
          { title: 'Low Salt', value: 'LowSaltDiet' },
          { title: 'Vegan', value: 'VeganDiet' },
          { title: 'Vegetarian', value: 'VegetarianDiet' },
        ],
      },
      validation: (Rule) => Rule.unique(),
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
