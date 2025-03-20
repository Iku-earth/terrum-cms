import { CollectionConfig, FieldHook } from 'payload'
import { hasRole } from '@/utils/role-checker'
import { v4 as uuidv4 } from 'uuid'

const generateUUID: FieldHook = ({ value }) => {
  // If the document already has a UUID, keep it. Otherwise, generate a new one.
  return value || uuidv4()
}
// Reusable URL validation function
const validateUrl = (value?: string | string[] | null) => {
  // Return true if value is empty or undefined
  if (!value || value === '') {
    return true
  }

  if (typeof value === 'string') {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // Protocol (optional)
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // Domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
        '(\\#[-a-z\\d_]*)?$', // Fragment locator
      'i',
    )

    if (urlPattern.test(value)) {
      return true
    }
    return 'Invalid URL format.'
  }
  return 'Invalid URL format.'
}

const Event: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Event',
    plural: 'Events',
  },
  admin: {
    defaultColumns: ['name', 'event uuid'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'actions',
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          Field: 'src/admin/components/CopyUUIDButton.tsx',
        },
      },
    },
    {
      name: 'event uuid',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
        description: 'Automatically generated unique identifier',
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [generateUUID],
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 128,
      admin: {
        placeholder: 'Enter the name of the event',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,

    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'venue',
      type: 'text',
      maxLength: 255,
      admin: {
        placeholder: 'Enter the venue name (optional)',
      },
    },
    {
      name: 'city',
      type: 'text',
      maxLength: 255,
      admin: {
        placeholder: 'Enter the city (optional)',
      },
    },
    {
      name: 'locality',
      type: 'text',
      maxLength: 255,
      admin: {
        placeholder: 'Enter the locality (optional)',
      },
    },
    {
      name: 'google maps link',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'Enter the Google Maps link for the event',
      },
      validate: validateUrl,
    },
    {
      name: 'google form link',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'Enter the Google form link for the event',
      },
      validate: validateUrl,
    },
    {
        name: 'price',
        type: 'number',
        admin: {
          placeholder: 'Enter the price of the event',
        },
        required: true,
        defaultValue: 0.0,
    },
    {
      name: 'payment link',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'Enter the payment link for the event',
      },
      validate: validateUrl,
    },
    {
      name: 'is single day',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Check this if the event occurs on a single day.',
      },
    },
    {
      name: 'start date',
      type: 'date',
      required: true,
      admin: {
        placeholder: 'Select the start date of the event',
      },
    },
    {
      name: 'end date',
      type: 'date',
      admin: {
        placeholder: 'Select the end date (optional)',
      },
    },
    {
      name: 'start time',
      type: 'date',
      admin: {
        placeholder: '12:00 PM',
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'end time',
      type: 'date',
      admin: {
        placeholder: '12:00 PM',
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'deleted',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark this if the event is deleted.',
      },
    },
    {
      name: 'is online',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Check this if the event is an online event.',
      },
    },
    {
      name: 'location',
      type: 'point',
      label: 'Location',
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms', // Reference to the forms collection
      required: false,
    },
  ],
  access: {
    read: ({ req }) => hasRole(req, ['admin', 'staff']),
    create: ({ req }) => hasRole(req, ['admin', 'staff']),
    update: ({ req }) => hasRole(req, ['admin', 'staff']),
    delete: ({ req }) => hasRole(req, ['admin', 'staff']),
  },
}

export default Event
