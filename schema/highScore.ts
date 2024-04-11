import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'highscore',
  type: 'document',
  title: 'High Scores',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'score',
      type: 'number',
      title: 'Score',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'version',
      type: 'string',
      title: 'Game Version',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      highscore: 'score',
      created: '_createdAt',
    },
    prepare({name, highscore, created}) {
      const title = highscore && name ? `${highscore} by ${name}` : 'New Highscore'
      return {
        title,
        subtitle: created,
      }
    },
  },
})
