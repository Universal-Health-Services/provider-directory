export default {
    name: 'docasapProvider',
    title: 'DocASAP',
    description: `the DocASAP service, https://docasap.com/.`,
    type: 'object',
    fields: [
        {
            title: 'Scheduling ID',
            name: 'pSID',
            type: 'string'
        },
        {
            title: 'Tracking Code',
            name: 'pTC',
            type: 'slug'
        }
    ],
    preview: {
        prepare() {
            const t=`DocASAP`
            const st=`provider service credentials`
            return {
                title: t,
                subtitle: st,
            }
        }
    }
}
