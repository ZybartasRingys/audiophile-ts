import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'speakers',
  title: 'Speakers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase(),
      },
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'features1',
      title: 'Features1',
      type: 'string',
    }),
    
    defineField({
      name: 'features2',
      title: 'Features2',
      type: 'string',
    }),
    defineField({
      title: 'Box',
      name: 'box',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      title: 'productImages',
      name: 'productImages',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'unit',
      name: 'unit',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'isNewProduct',
      title: 'isNewProduct',
      type: 'boolean',
    }),
  ],
})
