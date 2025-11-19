import { DeletedObjectJSON, UserJSON } from '@clerk/nextjs/server';
import { EventSchemas, Inngest } from 'inngest';

type ClerkWebhookData<T> = {
  data: {
    data: T;
    raw: string;
    headers: Record<string, string>;
  };
};

type Events = {
  'clerk/user.created': ClerkWebhookData<UserJSON>;
  'clerk/user.updated': ClerkWebhookData<UserJSON>;
  'clerk/user.deleted': ClerkWebhookData<DeletedObjectJSON>;
  //   "organization.created": ClerkWebhookData<UserJSON>;
  //   "organization.deleted": ClerkWebhookData<UserJSON>;
  //   "organization.updated": ClerkWebhookData<UserJSON>;
  //   "organizationDomain.created": ClerkWebhookData<UserJSON>;
  //   "organizationDomain.deleted": ClerkWebhookData<UserJSON>;
};

export const inngest = new Inngest({
  id: 'job-board',
  schemas: new EventSchemas().fromRecord<Events>(),
});
