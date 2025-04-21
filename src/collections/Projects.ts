import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar', // Moves it to the sidebar for clarity
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title) {
              data.slug = data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '') // Generate slug from title
            }
          },
        ],
      },
    },
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          displayPreview: true,
        },
      ],
    },
    {
      name: 'site url',
      type: 'text',
      custom: {
        regex: /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}([\/\w .-]*)*\/?$/i,
        errorMessage: 'Please enter a valid URL',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'title',
  },
}
