export default {
    name: 'role',
    title: 'Roles',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: `url friendly string, 95 characters or less.`,
            options: {
                source: doc => doc.name,
                maxLength: 95,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 95)
            },
        },
    ],
    orderings: [
        {
            name: 'nameAsc',
            title: 'Role Name a–>z',
            by: [
                {
                    field: 'name',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'nameDesc',
            title: 'Role Name z->a',
            by: [
                {
                    field: 'name',
                    direction: 'desc'
                }
            ]
        }
    ],
    preview: {
        select: {
            n: 'name'
        },
        prepare({ n }) {
            const t=`${n}`
            return {
                title: t,
            }
        }
    }
}