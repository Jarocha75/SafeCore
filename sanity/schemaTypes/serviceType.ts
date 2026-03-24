import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Služby SafeCore",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Názov služby",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "URL Identifikátor (Slug)",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Kategória",
      options: {
        list: [
          { title: "Business Intelligence & Dashboards", value: "bi" },
          { title: "AI Integrácie", value: "ai" },
          { title: "Web Development", value: "web" },
        ],
      },
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Krátky popis",
    }),
    defineField({
      name: "icon",
      type: "image",
      title: "Ikona služby",
      options: { hotspot: true },
    }),
  ],
});
