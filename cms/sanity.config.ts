import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
// Define the singleton document types
const singletonTypes = new Set(["hero"]);

export default defineConfig({
  name: 'default',
  title: 'vue-school',

  projectId: 'kq560jzr',
  dataset: 'production',

  plugins: [structureTool(), visionTool(),],

  schema: {
    types: schemaTypes,
  },
})
