import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'Full Name',
      type: 'text',
      required: true,
    },
    {
      name: 'Social Media Link',
      type: 'text',
    },
  ],
}
