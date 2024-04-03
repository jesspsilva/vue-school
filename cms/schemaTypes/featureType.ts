import { defineField, defineType } from 'sanity'

export const featureType = defineType({
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'available',
      type: 'boolean'
    }),
    defineField({
      name: 'common_feature',
      type: 'boolean'
    }),
    defineField({
      name: 'order',
      type: 'number'
    }),
  ],
})