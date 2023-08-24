import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
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
      type: 'string',
    }),
      defineField({
      name: 'productImage',
      title: 'ProductImage',
      type: 'image',
      options: {hotspot: true}
    }),
   ]

})