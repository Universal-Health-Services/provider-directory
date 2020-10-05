export default {
    name: 'kyruusProvider',
    title: 'Kyruss',
    description: `the Kyruss service, https://www.kyruus.com/.`,
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
            const t=`Kyruus`
            const st=`provider service credentials`
            return {
                title: t,
                subtitle: st,
            }
        }
    }
}
