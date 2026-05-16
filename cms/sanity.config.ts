import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'espacio-diseno',
  title: 'Espacio Diseño',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'replace-me',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Editorial')
              .child(
                S.list()
                  .title('Editorial')
                  .items([
                    S.documentTypeListItem('post').title('Posts'),
                    S.documentTypeListItem('project').title('Projects'),
                  ]),
              ),
            S.listItem()
              .title('Catalogue')
              .child(
                S.list()
                  .title('Catalogue')
                  .items([
                    S.documentTypeListItem('product').title('Products'),
                    S.documentTypeListItem('productCategory').title('Categories'),
                    S.documentTypeListItem('service').title('Services'),
                  ]),
              ),
            S.listItem()
              .title('Site')
              .child(
                S.list()
                  .title('Site')
                  .items([
                    S.listItem()
                      .title('Home Page')
                      .id('homePageSingleton')
                      .child(
                        S.document().schemaType('homePage').documentId('homePage'),
                      ),
                    S.documentTypeListItem('testimonial').title('Testimonials'),
                    S.documentTypeListItem('client').title('Clients'),
                  ]),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {types: schemaTypes},
})
