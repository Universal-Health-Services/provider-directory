export default {
    name: 'provider',
    title: 'Providers',
    type: 'document',
    fieldsets: [
        {
            name: 'providerPerson',
            options: {
                collapsible: false,
                collapsed: false
            }
        },
        {
            name: 'providerType',
            options: {
                collapsible: false,
                collapsed: false
            }
        },
        {
            name: 'providerProfile',
            options: {
                collapsible: false,
                collapsed: false
            }
        }
    ],
    fields: [
        {
            title: 'First',
            name: 'nameFirst',
            type: 'string',
            fieldset: 'providerPerson',
            validation: Rule => Rule.error(`You have to define the provider's first name.`).required()
        },
        {
            title: 'Middle (optional)',
            name: 'nameMiddle',
            type: 'string',
            fieldset: 'providerPerson',
        },
        {
            title: 'Last',
            name: 'nameLast',
            type: 'string',
            fieldset: 'providerPerson',
            validation: Rule => Rule.error(`You have to define the provider's last name.`).required()
        },
        {
            name: 'slug',
            type: 'slug',
            description: `url friendly string, 95 characters or less.`,
            options: {
                source: doc => doc.nameMiddle? `${doc.nameFirst}-${doc.nameMiddle}-${doc.nameLast}`:`${doc.nameFirst}-${doc.nameLast}`,
                maxLength: 95,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 95)
            },
            fieldset: 'providerPerson'
        },
        {
            name: 'profileImage',
            type: 'profileImage',
            title: 'Profile Image',
            fieldset: 'providerPerson'
        },
        {
            name: 'role',
            type: 'document',
            description: `The provider's role or job title.`,
            weak: true,
            type: 'reference',
            to: {
                type: 'role'
            },
            validation: Rule => Rule.error(`You have to define the role for this provider.`).required(),
            fieldset: 'providerType'
        },
        {
            name: 'specialties',
            title: 'Specialties',
            type: 'array',
            of: [{
                weak: true,
                type: 'reference',
                to: {
                    type: 'specialty'
                }
            }],
            validation: Rule => Rule.error(`You have to define the role for this provider.`).required(),
            fieldset: 'providerType'
        },
        {
            title: 'Credentials',
            name: 'credentials',
            description: `The provider's credentials for the role.`,
            type: 'array',
            of:[{
                weak: true,
                type: 'reference',
                to: {
                    type: 'credential'
                }
            }],
            fieldset: 'providerProfile'
        },
        {
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [{
                    type: 'string'
            }],
            description: `A list of Educational Institutions, one per line.`,
            fieldset: 'providerProfile'
        },
        {
            name: 'certifications',
            title: 'Certifications',
            type: 'array',
            of: [{
                    type: 'string'
            }],
            fieldset: 'providerProfile'
        },
        {
            name: 'memberships',
            title: 'Memberships',
            type: 'array',
            of: [{
                    type: 'string'
            }],
            fieldset: 'providerProfile'
        },
        {
            name: 'bio',
            title: 'Profile Biography',
            type: 'bodyPortableText'
        },
        {
            name: 'locations',
            title: 'Location(s)',
            type: 'location',
            description: `The provider's location or locations, 1st on the list is primary.`,
            type: 'array',
            of: [{
                weak: true,
                type: 'reference',
                to: {
                    type: 'location'
                }
            }],
            validation: Rule => Rule.error(`You have to define at least one location for a provider.`).required(),
        },
        {
            name: 'hideScheduleBtn',
            title: 'Hide Schedule Button',
            description: `Hide the schedule button, true equals hidden.`,
            type: 'boolean'
        },
        {
            name: 'services',
            title: 'Service(s)',
            description: `Any services associated with this provider.`,
            type: 'array',
            of: [
                {type: 'docasapProvider'},
                {type: 'kyruusProvider'},
            ],
        },
    ],
    orderings: [
        {
            name: 'lastAsc',
            title: 'Last Name a–>z',
            by: [
                {
                    field: 'nameLast',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'lastDesc',
            title: 'Last Name z->a',
            by: [
                {
                    field: 'nameLast',
                    direction: 'desc'
                }
            ]
        },
        {
            name: 'firstAsc',
            title: 'First Name a–>z',
            by: [
                {
                    field: 'nameFirst',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'firstDesc',
            title: 'First Name z->a',
            by: [
                {
                    field: 'nameFirst',
                    direction: 'desc'
                }
            ]
        }
    ],
    preview: {
        select: {
            f: 'nameFirst',
            l: 'nameLast',
            r: 'role.slug.current',
            s: 'slug.current',
            i: 'profileImage',
        },
        prepare({ f, l, r, s, i }) {
            const t=`${f} ${l}`
            const st=`slug: ./${r}/${s}/`
            return {
                media: i,
                title: t,
                subtitle: st
            }
        }
    }
}
