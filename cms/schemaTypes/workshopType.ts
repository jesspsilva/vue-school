import { defineField, defineType } from 'sanity'

export const workshopType = defineType({
  name: 'workshop',
  title: 'Workshops',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'teacher_name',
      type: 'string',
    }),
    defineField({
      name: 'teacher_avatar_path',
      type: 'string',
    }),
    defineField({
      name: 'date',
      type: 'date',
    }),
    defineField({
      name: 'live',
      type: 'boolean',
    }),
    defineField({
      name: 'duration',
      type: 'string',
    }),
  ],
})