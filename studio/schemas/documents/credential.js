export default {
    name: 'credential',
    title: 'Credentials',
    type: 'document',
    fields: [
        {
            title: 'Initials',
            name: 'init',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'desc',
            type: 'string',
        },
    ],
    orderings: [
        {
            name: 'initAsc',
            title: 'Credential a–>z',
            by: [
                {
                    field: 'init',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'initDesc',
            title: 'Credential z->a',
            by: [
                {
                    field: 'init',
                    direction: 'desc'
                }
            ]
        }
    ],
    preview: {
        select: {
            i: 'init',
            d: 'desc',
        },
        prepare({ i, d }) {
            const t=`${i}`
            return {
                title: t,
                subtitle: d,
            }
        }
    }
}