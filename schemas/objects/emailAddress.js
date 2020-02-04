export default {
  name: 'emailAddress',
  type: 'string',
  title: 'Email address',
  validation: (Rule) => [
    Rule.regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        name: 'email',
      }
    ),
    Rule.required(),
  ],
};
