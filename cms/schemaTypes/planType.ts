import { defineField, defineType } from 'sanity'

export const planType = defineType({
  name: 'plans',
  title: 'Plans',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'icon_name',
      type: 'string',
    }),
    defineField({
      name: 'price_per_seat_month',
      type: 'number'
    }),
    defineField({
      name: 'start_cta_url',
      type: 'url'
    }),
    defineField({
      name: 'start_cta_text',
      type: 'string'
    }),
    defineField({
      name: 'refer_cta_url',
      type: 'url'
    }),
    defineField({
      name: 'refer_cta_text',
      type: 'string'
    }),
    defineField({
      name: 'order',
      type: 'number'
    }),
    defineField({
      name: 'unavailable_features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'feature' }
        }
      ],
    }),
    defineField({
      name: 'featured_features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'feature' }
        }
      ],
    }),
  ],
})