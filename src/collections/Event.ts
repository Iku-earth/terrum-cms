import {CollectionConfig} from "payload";
import {hasRole} from "@/utils/role-checker";

const Event: CollectionConfig = {
    slug: 'events',
    labels: {
        singular: 'Event',
        plural: 'Events',
    },
    admin: {
        defaultColumns: ['name', 'city', 'start_date', 'end_date', 'is_online'],
        useAsTitle: 'name',
    },
    fields: [
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
            type: 'textarea',
            required: true,
            admin: {
                placeholder: 'Provide a detailed description of the event',
            },
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
            validate: (value?: string | string[] | null) => {
                if (typeof value === "string") {
                    const urlPattern = new RegExp(
                        "^(https?:\\/\\/)?" + // Protocol (optional)
                        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // Domain name
                        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
                        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Port and path
                        "(\\?[;&a-z\\d%_.~+=-]*)?" + // Query string
                        "(\\#[-a-z\\d_]*)?$", // Fragment locator
                        "i"
                    );

                    if (urlPattern.test(value)) {
                        return true;
                    }
                    return "Invalid URL format.";
                }
                return "Invalid URL format.";
            },
        },
        {
            name: 'google form link',
            type: 'text',
            required: false,
            admin: {
                placeholder: 'Enter the Google form link for the event',
            },
            validate: (value?: string | string[] | null) => {
                if (typeof value === "string") {
                    const urlPattern = new RegExp(
                        "^(https?:\\/\\/)?" + // Protocol (optional)
                        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // Domain name
                        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
                        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Port and path
                        "(\\?[;&a-z\\d%_.~+=-]*)?" + // Query string
                        "(\\#[-a-z\\d_]*)?$", // Fragment locator
                        "i"
                    );

                    if (urlPattern.test(value)) {
                        return true;
                    }
                    return "Invalid URL format.";
                }
                return "Invalid URL format.";
            },
        },
        {
            name: 'payment link',
            type: 'text',
            required: false,
            admin: {
                placeholder: 'Enter the payment link for the event',
            },
            validate: (value?: string | string[] | null) => {
                if (typeof value === "string") {
                    const urlPattern = new RegExp(
                        "^(https?:\\/\\/)?" + // Protocol (optional)
                        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // Domain name
                        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
                        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // Port and path
                        "(\\?[;&a-z\\d%_.~+=-]*)?" + // Query string
                        "(\\#[-a-z\\d_]*)?$", // Fragment locator
                        "i"
                    );

                    if (urlPattern.test(value)) {
                        return true;
                    }
                    return "Invalid URL format.";
                }
                return "Invalid URL format.";
            },
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
            name: 'end_date',
            type: 'date',
            admin: {
                placeholder: 'Select the end date (optional)',
            },
        },
        {
            name: 'start time',
            type: 'text',
            admin: {
                placeholder: 'Enter the start time (e.g., HH:MM:SS)',
            },
        },
        {
            name: 'end time',
            type: 'text',
            admin: {
                placeholder: 'Enter the end time (e.g., HH:MM:SS)',
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
            type: 'json',
            defaultValue: {},
            admin: {
                description: 'Provide structured location data for the event.',
            },
        },
    ],
    access: {
        read: ({req}) => hasRole(req, ['admin', 'staff']),
        create: ({req}) => hasRole(req, ['admin', 'staff']),
        update: ({req}) => hasRole(req, ['admin', 'staff']),
        delete: ({req}) => hasRole(req, ['admin', 'staff']),
    }
};

export default Event;