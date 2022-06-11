export default {
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(80)
          .error("Title cannot be shorter than 3 characters"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "synopsis",
      title: "Synopsis",
      type: "text",
      description: "A primer on the book",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "series",
      title: "Series",
      type: "reference",
      to: { type: "series" },
    },
    {
      name: "genres",
      title: "Genres",
      type: "array",
      of: [{ type: "reference", to: { type: "genre" } }],
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "bookofMonth",
      title: "Book of the Month",
      type: "boolean",
    },
  ],
};
