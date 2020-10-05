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
