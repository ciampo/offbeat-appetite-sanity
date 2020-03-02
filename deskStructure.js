import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdDescription from 'react-icons/lib/md/description';
import MdBubbleChart from 'react-icons/lib/md/bubble-chart';
import MdPermMedia from 'react-icons/lib/md/perm-media';

// https://www.sanity.io/guides/getting-started-with-structure-builder
export default () =>
  S.list()
    .title('Content')
    .items([
      // Blog Posts
      // Persons
      // Categories
      // Tags
      ...S.documentTypeListItems().filter((listItem) =>
        ['blogPost', 'category', 'tag', 'person'].includes(listItem.getId())
      ),

      // Visual Divider
      S.divider(),

      // Assets (accessible images / videos)
      S.listItem()
        .title('Assets')
        .icon(MdPermMedia)
        .child(
          S.list()
            .title('Assets')
            .items([
              ...S.documentTypeListItems().filter((listItem) =>
                ['accessibleImage', 'accessibleVideo'].includes(listItem.getId())
              ),
            ])
        ),

      // Visual Divider
      S.divider(),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(MdDescription)
        .child(
          S.list()
            .title('Pages')
            .items([
              // Home Page
              S.listItem()
                .title('Home Page')
                // This automatically gives it properties from the project type
                .schemaType('pageHome')
                .child(
                  S.editor()
                    .schemaType('pageHome')
                    .documentId('singletonPageHome')
                ),

              // About Page
              S.listItem()
                .title('About Page')
                // This automatically gives it properties from the project type
                .schemaType('pageAbout')
                .child(
                  S.editor()
                    .schemaType('pageAbout')
                    .documentId('singletonPageAbout')
                ),

              // Blog Post Page
              S.listItem()
                .title('Blog Post Page')
                // This automatically gives it properties from the project type
                .schemaType('pageBlogPost')
                .child(
                  S.editor()
                    .schemaType('pageBlogPost')
                    .documentId('singletonPageBlogPost')
                ),

              // Category Page
              S.listItem()
                .title('Category Page')
                // This automatically gives it properties from the project type
                .schemaType('pageCategory')
                .child(
                  S.editor()
                    .schemaType('pageCategory')
                    .documentId('singletonPageCategory')
                ),

              // Search Page
              S.listItem()
                .title('Search Page')
                // This automatically gives it properties from the project type
                .schemaType('pageSearch')
                .child(
                  S.editor()
                    .schemaType('pageSearch')
                    .documentId('singletonPageSearch')
                ),

              // Gallery Page
              S.listItem()
                .title('Gallery Page')
                // This automatically gives it properties from the project type
                .schemaType('pageGallery')
                .child(
                  S.editor()
                    .schemaType('pageGallery')
                    .documentId('singletonPageGallery')
                ),

              // Thank You Page
              S.listItem()
                .title('Thank You Page')
                // This automatically gives it properties from the project type
                .schemaType('pageThankYou')
                .child(
                  S.editor()
                    .schemaType('pageThankYou')
                    .documentId('singletonPageThankYou')
                ),
            ])
        ),

      // Visual Divider
      S.divider(),

      // Misc Content
      S.listItem()
        .title('Misc Content')
        .icon(MdBubbleChart)
        .child(
          S.editor()
            .schemaType('siteMiscContent')
            .documentId('singletonSiteMiscContent')
        ),

      // Visual Divider
      S.divider(),

      // Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .schemaType('siteSettings')
            .documentId('singletonSiteSettings')
        ),
    ]);
