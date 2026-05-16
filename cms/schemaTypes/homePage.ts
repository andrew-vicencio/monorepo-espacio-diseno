import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'breakImage1',
      title: 'Break image 1 (About Us section)',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text', validation: (R) => R.required()}],
    }),
    defineField({
      name: 'breakImage2',
      title: 'Break image 2 (Commitment section)',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text', validation: (R) => R.required()}],
    }),
    defineField({
      name: 'ctaImage',
      title: 'CTA banner image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text', validation: (R) => R.required()}],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Home Page'}),
  },
})
