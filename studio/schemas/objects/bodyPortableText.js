export default {
    name: 'bodyPortableText',
    type: 'array',
    title: 'Profile Body',
    of: [
      {
        type: 'block',
        title: 'Biographical Copy',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'H5', value: 'h5' },
          { title: 'H6', value: 'h6' },
          { title: 'Quote', value: 'blockquote' }
        ],
        lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
        marks: {
          decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
          // Annotations can be any object structure – e.g. a link or a footnote.
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'URL',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url'
                }
              ]
            }
          ]
        }
      }
    ]
  }