export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "period",
      title: "Period",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "published",
      title: "Published",
      type: "boolean",
    },
  ],
  initialValue: {
    published: false,
  },
};
