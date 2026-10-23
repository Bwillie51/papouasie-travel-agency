import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Papouasie Desk Portal',
  projectId: 'uq365x5z',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
