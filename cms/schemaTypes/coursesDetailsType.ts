import { defineField, defineType } from 'sanity'

export const coursesDetailsType = defineType({
  name: 'coursesCounter',
  title: 'Courses Counter',
  type: 'document',
  fields: [
    defineField({
      name: 'video_lessons',
      type: 'number',
    }),
    defineField({
      name: 'courses',
      type: 'number',
    }),
    defineField({
      name: 'hours',
      type: 'number',
    }),
  ],
})