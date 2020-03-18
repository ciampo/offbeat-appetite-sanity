const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const generateEmailField = ({
  name = 'email',
  title = 'Email',
  description = 'The email address',
  fieldset = undefined,
} = {}) => ({
  type: 'string',
  name,
  title,
  fieldset,
  description,
  validation: (Rule) =>
    Rule.regex(emailRegex, {
      name: 'email',
    }).required(),
});
