import {CollectionConfig} from "payload";
import {hasRole} from "@/utils/role-checker";

const Brand: CollectionConfig = {
    slug: "brands",
    labels: {
        singular: "Brand",
        plural: "Brands",
    },
    admin: {
        defaultColumns: ["name", "website", "shoppingCategories"],
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
            maxLength: 64,
        },
        {
            name: "website",
            type: "text",
            required: true,
            unique: true,
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
            name: "shoppingCategories",
            type: "relationship",
            required: false,
            hasMany: true,
            relationTo: "shopping-categories",
        },
    ],
    access: {
        read: ({req}) => hasRole(req,['osdc', 'admin', 'staff']),
        create: ({req}) => hasRole(req,['osdc', 'admin', 'staff']),
        update: ({req}) => hasRole(req,['osdc', 'admin', 'staff']),
        delete: ({req}) => hasRole(req,['osdc', 'admin', 'staff']),
    }
};


export default Brand;
