export default {
    name: 'docasapLocation',
    title: 'DocASAP',
    description: `the DocASAP service, https://docasap.com/.`,
    type: 'object',
    fields: [
        {
            title: 'Scheduling ID',
            name: 'lSID',
            type: 'string'
        },
        {
            title: 'Tracking Code',
            name: 'lTC',
            type: 'slug'
        }
    ],
    preview: {
        prepare() {
            const t=`DocASAP`
            const st=`location service credentials`
            return {
                title: t,
                subtitle: st,
            }
        }
    }
}
