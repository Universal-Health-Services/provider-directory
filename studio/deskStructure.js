import S from '@sanity/desk-tool/structure-builder'
import post from 'react-icons/lib/go/bookmark'
import meta from 'react-icons/lib/go/graph'
import location from 'react-icons/lib/go/location'

export default () =>
  S.list()
    .title('Directory')
    .items([
      S.listItem()
        .title('Provider')
        .icon(post)
        .schemaType('post')
        .child(S.documentTypeList('provider').title('Providers')),
      S.listItem()
        .title('Roles')
        .icon(meta)
        .schemaType('role')
        .child(S.documentTypeList('role').title('Roles')),
    ])