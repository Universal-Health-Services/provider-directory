export default {
    name: 'docasap',
    title: 'DocASAP',
    description: `the DocASAP service, https://docasap.com/.`,
    type: 'document',
    fields: [
        {
            title: 'Scheduling ID',
            name: 'pSID',
            type: 'string'
        },
        {
            title: 'Tracking ID',
            name: 'pTID',
            type: 'string'
        },
    ],
    preview: {
        select: {
            t: `DocASAP`,
            st: `Add DocASAP Service credentials to this provider.`,
        },
        prepare({ t, st }) {
            return {
                title: t,
                subtitle: st
            }
        }
    }
}