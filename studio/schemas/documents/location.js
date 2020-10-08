export default {
    name: 'location',
    title: 'Locations',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.error(`You have to define the location's name.`).required()
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
        {
            name: 'street',
            type: 'string',
        },
        {
            name: 'street2',
            type: 'string',
            description: `optional`,
        },
        {
            name: 'city',
            type: 'string'
        },
        {
            name: 'state',
            type: 'string',
            options: {
                list: [
                    {title: 'Alabama', value: 'al'},
                    {title: 'Alaska', value: 'ak'},
                    {title: 'Arizona', value: 'az'},
                    {title: 'Arkansas', value: 'ar'},
                    {title: 'California', value: 'ca'},
                    {title: 'Colorado', value: 'co'},
                    {title: 'Connecticut', value: 'ct'},
                    {title: 'Delaware', value: 'de'},
                    {title: 'District Of Columbia', value: 'dc'},
                    {title: 'Florida', value: 'fl'},
                    {title: 'Georgia', value: 'ga'},
                    {title: 'Hawaii', value: 'hi'},
                    {title: 'Idaho', value: 'id'},
                    {title: 'Illinois', value: 'il'},
                    {title: 'Indiana', value: 'in'},
                    {title: 'Iowa', value: 'ia'},
                    {title: 'Kansas', value: 'ks'},
                    {title: 'Kentucky', value: 'ky'},
                    {title: 'Louisiana', value: 'la'},
                    {title: 'Maine', value: 'me'},
                    {title: 'Maryland', value: 'md'},
                    {title: 'Massachusetts', value: 'ma'},
                    {title: 'Michigan', value: 'mi'},
                    {title: 'Minnesota', value: 'mn'},
                    {title: 'Mississippi', value: 'ms'},
                    {title: 'Missouri', value: 'mo'},
                    {title: 'Montana', value: 'mt'},
                    {title: 'Nebraska', value: 'ne'},
                    {title: 'Nevada', value: 'nv'},
                    {title: 'New Hampshire', value: 'nh'},
                    {title: 'New Jersey', value: 'nj'},
                    {title: 'New Mexico', value: 'nm'},
                    {title: 'New York', value: 'ny'},
                    {title: 'North Carolina', value: 'nc'},
                    {title: 'North Dakota', value: 'nd'},
                    {title: 'Ohio', value: 'oh'},
                    {title: 'Oklahoma', value: 'ok'},
                    {title: 'Oregon', value: 'or'},
                    {title: 'Pennsylvania', value: 'pa'},
                    {title: 'Puerto Rico', value: 'pr'},
                    {title: 'Rhode Island', value: 'ri'},
                    {title: 'South Carolina', value: 'sc'},
                    {title: 'South Dakota', value: 'sd'},
                    {title: 'Tennessee', value: 'tn'},
                    {title: 'Texas', value: 'tx'},
                    {title: 'Utah', value: 'ut'},
                    {title: 'Vermont', value: 'vt'},
                    {title: 'Virgin Islands', value: 'vi'},
                    {title: 'Virginia', value: 'va'},
                    {title: 'West Virginia', value: 'wv'},
                    {title: 'Wisconsin', value: 'wi'},
                    {title: 'Wyoming', value: 'wy'}
                ],
                layout: 'dropdown'
              }
        },
        {
            name: 'zip',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        },
        {
            name: 'fax',
            type: 'string'
        },
        {
            name: 'link',
            type: 'url'
        },
        {
            name: 'locationImage',
            type: 'locationImage'
        },
        {
            name: 'geoPin',
            title: 'Geographic Point',
            type: 'geopoint'
        },
        {
            name: 'hours',
            title: 'Hour(s)',
            description: `This location's hours of operation.`,
            type: 'array',
            of: [{ type: 'locationHour' }],
        },
        {
            name: 'services',
            title: 'Service(s)',
            description: `Any services associated with this location.`,
            type: 'array',
            of: [{ type: 'docasapLocation' }],
        },
    ],
    orderings: [
        {
            name: 'nameAsc',
            title: 'Location Name a–>z',
            by: [
                {
                    field: 'name',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'nameDesc',
            title: 'Location Name z->a',
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
            n: 'name',
            l: 'link',
            i: 'locationImage',
        },
        prepare({ n, l, i }) {
            const t=`${n}`
            const st=`${l}`
            return {
                media: i,
                title: t,
                subtitle: st
            }
        }
    }
}
