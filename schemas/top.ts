import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'top',
  title: 'Top',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],

})
