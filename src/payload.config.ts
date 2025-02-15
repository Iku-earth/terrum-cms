import {postgresAdapter} from '@payloadcms/db-postgres';
import {payloadCloudPlugin} from '@payloadcms/payload-cloud';
import {lexicalEditor} from '@payloadcms/richtext-lexical';
import path from 'path';
import {buildConfig} from 'payload';
import {fileURLToPath} from 'url';
import sharp from 'sharp';
import {s3Storage} from '@payloadcms/storage-s3';

import {Users} from './collections/Users';
import {Media} from './collections/Media';
import Brand from "@/collections/Brand";
import Event from "@/collections/Event";
import ShoppingCategory from "@/collections/ShoppingCategory";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Users, Media, Brand, Event, ShoppingCategory],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        s3Storage({
            collections: {
                media: {
                    prefix: 'terrum-cms/media',
                },
            },
            bucket: process.env.S3_BUCKET || '',
            config: {
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                },
                region: process.env.S3_REGION,
            },
        }),
    ],
});