export default {
    title: 'Service(s)',
    name: 'locationServices',
    type: 'object',
    fieldsets: [
        {
            name: 'docasap',
            title: 'DocASAP',
        },
    ],
    fields: [
        {
            title: 'Location Scheduling ID',
            name: 'lSID',
            type: 'string',
            fieldset: 'docasap'
        },
        {
            title: 'Tracking ID',
            name: 'lTID',
            type: 'string',
            fieldset: 'docasap'
        }
    ],
  }