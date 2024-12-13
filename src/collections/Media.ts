import type { CollectionConfig } from 'payload'
import {hasRole} from "@/utils/role-checker";

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: ({ req }) => hasRole(req,['admin']),
    create: ({ req }) => hasRole(req,['admin']),
    update: ({ req }) => hasRole(req,['admin']),
    delete: ({ req }) => hasRole(req,['admin']),
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
