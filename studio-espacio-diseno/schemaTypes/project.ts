import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alt text', validation: (R) => R.required()},
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'client', media: 'coverImage'},
  },
})
