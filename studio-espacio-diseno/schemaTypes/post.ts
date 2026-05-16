import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      validation: (R) => R.max(200),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {title: 'title', media: 'coverImage'},
  },
})
