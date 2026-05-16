import {defineArrayMember, defineType} from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [{name: 'href', type: 'url', title: 'URL'}],
          },
        ],
      },
    }),
    defineArrayMember({
      name: 'imageBlock',
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alt text', validation: (R) => R.required()},
        {name: 'caption', type: 'string', title: 'Caption'},
      ],
    }),
    defineArrayMember({
      name: 'galleryBlock',
      type: 'object',
      title: 'Gallery',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              type: 'image',
              options: {hotspot: true},
              fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
            },
          ],
        },
      ],
      preview: {
        select: {images: 'images'},
        prepare: ({images}: {images?: unknown[]}) => ({
          title: `Gallery (${images?.length ?? 0} images)`,
        }),
      },
    }),
  ],
})
