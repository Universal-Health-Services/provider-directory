export default {
    title: 'Service(s)',
    name: 'services',
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
            name: 'dSID',
            type: 'string',
            fieldset: 'docasap'
        },
        {
            title: 'Tracking ID',
            name: 'dTID',
            type: 'string',
            fieldset: 'docasap'
        },
    ],
  }