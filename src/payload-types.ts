/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    brands: Brand;
    events: Event;
    'shopping-categories': ShoppingCategory;
    forms: Form;
    'form-submissions': FormSubmission;
    exports: Export;
    'payload-jobs': PayloadJob;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    brands: BrandsSelect<false> | BrandsSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    'shopping-categories': ShoppingCategoriesSelect<false> | ShoppingCategoriesSelect<true>;
    forms: FormsSelect<false> | FormsSelect<true>;
    'form-submissions': FormSubmissionsSelect<false> | FormSubmissionsSelect<true>;
    exports: ExportsSelect<false> | ExportsSelect<true>;
    'payload-jobs': PayloadJobsSelect<false> | PayloadJobsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: {
      createCollectionExport: TaskCreateCollectionExport;
      inline: {
        input: unknown;
        output: unknown;
      };
    };
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  role: 'admin' | 'osdc' | 'staff';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brands".
 */
export interface Brand {
  id: number;
  name: string;
  description: string;
  industry: string;
  country: string;
  contactEmail: string;
  phoneNumber?: string | null;
  website: string;
  productsOffered?: string | null;
  socialMediaLinks?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  foundedYear?: number | null;
  businessModel?: string | null;
  impactMetrics?: string | null;
  partnerships?: string | null;
  createdBy: number | User;
  updatedBy?: (number | null) | User;
  shoppingCategories?: (number | ShoppingCategory)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shopping-categories".
 */
export interface ShoppingCategory {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: number;
  /**
   * Automatically generated unique identifier
   */
  'event uuid'?: string | null;
  name: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  image: number | Media;
  venue?: string | null;
  city?: string | null;
  locality?: string | null;
  'google maps link'?: string | null;
  'google form link'?: string | null;
  price: number;
  'payment link'?: string | null;
  'start date': string;
  'end date': string;
  'start time': string;
  'end time': string;
  /**
   * Check this if the event is only an online event.
   */
  'is online'?: boolean | null;
  /**
   * Check this if an offline event is also streamed online.
   */
  'is online and offline'?: boolean | null;
  /**
   * @minItems 2
   * @maxItems 2
   */
  location?: [number, number] | null;
  form?: (number | null) | Form;
  /**
   * Mark this if the event is deleted.
   */
  deleted?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: number;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'country';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            placeholder?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'state';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  /**
   * Choose whether to display an on-page message or redirect to a different page after they submit the form.
   */
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  redirect?: {
    url: string;
  };
  /**
   * Send custom emails when the form submits. Use comma separated lists to send the same email to multiple recipients. To reference a value from this form, wrap that field's name with double curly brackets, i.e. {{firstName}}. You can use a wildcard {{*}} to output all data and {{*:table}} to format it as an HTML table in the email.
   */
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        /**
         * Enter the message that should be sent in this email.
         */
        message?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  form: number | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exports".
 */
export interface Export {
  id: number;
  name?: string | null;
  format: 'csv' | 'json';
  limit?: number | null;
  sort?: string | null;
  drafts?: ('yes' | 'no') | null;
  selectionToUse?: ('currentSelection' | 'currentFilters' | 'all') | null;
  fields?: string[] | null;
  collectionSlug: string;
  where?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs".
 */
export interface PayloadJob {
  id: number;
  /**
   * Input data provided to the job
   */
  input?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  taskStatus?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  completedAt?: string | null;
  totalTried?: number | null;
  /**
   * If hasError is true this job will not be retried
   */
  hasError?: boolean | null;
  /**
   * If hasError is true, this is the error that caused it
   */
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  /**
   * Task execution log
   */
  log?:
    | {
        executedAt: string;
        completedAt: string;
        taskSlug: 'inline' | 'createCollectionExport';
        taskID: string;
        input?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        output?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        state: 'failed' | 'succeeded';
        error?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        id?: string | null;
      }[]
    | null;
  taskSlug?: ('inline' | 'createCollectionExport') | null;
  queue?: string | null;
  waitUntil?: string | null;
  processing?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'brands';
        value: number | Brand;
      } | null)
    | ({
        relationTo: 'events';
        value: number | Event;
      } | null)
    | ({
        relationTo: 'shopping-categories';
        value: number | ShoppingCategory;
      } | null)
    | ({
        relationTo: 'forms';
        value: number | Form;
      } | null)
    | ({
        relationTo: 'form-submissions';
        value: number | FormSubmission;
      } | null)
    | ({
        relationTo: 'exports';
        value: number | Export;
      } | null)
    | ({
        relationTo: 'payload-jobs';
        value: number | PayloadJob;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brands_select".
 */
export interface BrandsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  industry?: T;
  country?: T;
  contactEmail?: T;
  phoneNumber?: T;
  website?: T;
  productsOffered?: T;
  socialMediaLinks?: T;
  foundedYear?: T;
  businessModel?: T;
  impactMetrics?: T;
  partnerships?: T;
  createdBy?: T;
  updatedBy?: T;
  shoppingCategories?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  'event uuid'?: T;
  name?: T;
  description?: T;
  image?: T;
  venue?: T;
  city?: T;
  locality?: T;
  'google maps link'?: T;
  'google form link'?: T;
  price?: T;
  'payment link'?: T;
  'start date'?: T;
  'end date'?: T;
  'start time'?: T;
  'end time'?: T;
  'is online'?: T;
  'is online and offline'?: T;
  location?: T;
  form?: T;
  deleted?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shopping-categories_select".
 */
export interface ShoppingCategoriesSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms_select".
 */
export interface FormsSelect<T extends boolean = true> {
  title?: T;
  fields?:
    | T
    | {
        checkbox?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              defaultValue?: T;
              id?: T;
              blockName?: T;
            };
        country?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        email?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        message?:
          | T
          | {
              message?: T;
              id?: T;
              blockName?: T;
            };
        number?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        select?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              placeholder?: T;
              options?:
                | T
                | {
                    label?: T;
                    value?: T;
                    id?: T;
                  };
              required?: T;
              id?: T;
              blockName?: T;
            };
        state?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        text?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        textarea?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
      };
  submitButtonLabel?: T;
  confirmationType?: T;
  confirmationMessage?: T;
  redirect?:
    | T
    | {
        url?: T;
      };
  emails?:
    | T
    | {
        emailTo?: T;
        cc?: T;
        bcc?: T;
        replyTo?: T;
        emailFrom?: T;
        subject?: T;
        message?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions_select".
 */
export interface FormSubmissionsSelect<T extends boolean = true> {
  form?: T;
  submissionData?:
    | T
    | {
        field?: T;
        value?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exports_select".
 */
export interface ExportsSelect<T extends boolean = true> {
  name?: T;
  format?: T;
  limit?: T;
  sort?: T;
  drafts?: T;
  selectionToUse?: T;
  fields?: T;
  collectionSlug?: T;
  where?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs_select".
 */
export interface PayloadJobsSelect<T extends boolean = true> {
  input?: T;
  taskStatus?: T;
  completedAt?: T;
  totalTried?: T;
  hasError?: T;
  error?: T;
  log?:
    | T
    | {
        executedAt?: T;
        completedAt?: T;
        taskSlug?: T;
        taskID?: T;
        input?: T;
        output?: T;
        state?: T;
        error?: T;
        id?: T;
      };
  taskSlug?: T;
  queue?: T;
  waitUntil?: T;
  processing?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskCreateCollectionExport".
 */
export interface TaskCreateCollectionExport {
  input: {
    name?: string | null;
    format: 'csv' | 'json';
    limit?: number | null;
    sort?: string | null;
    drafts?: ('yes' | 'no') | null;
    selectionToUse?: ('currentSelection' | 'currentFilters' | 'all') | null;
    fields?: string[] | null;
    collectionSlug: string;
    where?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    user?: string | null;
    userCollection?: string | null;
    exportsCollection?: string | null;
  };
  output: {
    success?: boolean | null;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}