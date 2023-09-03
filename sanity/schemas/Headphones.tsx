import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'headphones',
  title: 'Headphones',
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
        maxLength: 96
      }
    }),
      defineField({
      name: 'image',
      title: 'image',
      type: 'image',
      options: {hotspot: true}
    }),
   ]

})