import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alt text', validation: (R) => R.required()},
      ],
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'category.title', media: 'image'},
  },
})
