import { CollectionConfig } from "payload";
import {hasRole} from "@/utils/role-checker";

const ShoppingCategory: CollectionConfig = {
    slug: "shopping-categories",
    labels: {
        singular: "Shopping Category",
        plural: "Shopping Categories",
    },
    admin: {
        defaultColumns: ["name"],
        useAsTitle: "name"
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            unique: true,
            maxLength: 64,
            admin: {
                placeholder: "Enter category name",
            }
        },
    ],
    access: {
        read: ({ req }) => hasRole(req,['admin']),
        create: ({ req }) => hasRole(req,['admin']),
        update: ({ req }) => hasRole(req,['admin']),
        delete: ({ req }) => hasRole(req,['admin']),
    }
};

export default ShoppingCategory;
