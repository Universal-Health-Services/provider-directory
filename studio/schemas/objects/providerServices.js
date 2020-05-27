export default {
    title: 'Service(s)',
    name: 'providerServices',
    type: 'object',
    fieldsets: [
        {
            name: 'docasap',
            title: 'DocASAP',
        },
    ],
    fields: [
        {
            title: 'Scheduling ID',
            name: 'pSID',
            type: 'string',
            fieldset: 'docasap'
        }
    ],
  }