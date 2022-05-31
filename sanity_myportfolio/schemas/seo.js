export default {
  name: "seo",
  title: "SEO",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "twitterUsername",
      title: "Twitter Username",
      type: "string",
    },
  ],
};
