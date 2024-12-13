import type { CollectionConfig } from 'payload'
import {hasRole} from "@/utils/role-checker";

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'osdc', label: 'Open Source Database Contributor' },
        { value: 'staff', label: 'Staff' },
      ],
    }
  ],
  access: {
    read: ({ req }) => hasRole(req,['admin']),
    create: ({ req }) => hasRole(req,['admin']),
    update: ({ req }) => hasRole(req,['admin']),
    delete: ({ req }) => hasRole(req,['admin']),
  }
}
