import { createClient } from 'next-sanity';

export const sanityClient = createClient({
  projectId: 'olaj27v1',
  dataset: 'production',
  apiVersion: '2024-03-15',
  useCdn: false,
});
