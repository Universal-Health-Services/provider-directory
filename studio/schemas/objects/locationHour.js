export default {
    name: 'locationHour',
    title: 'Hours of Operation',
    type: 'object',
    description: `add for each day this location is open`,
    fields: [
        {
            title: 'Day',
            name: 'day',
            type: 'string',
            options: {
                list: [
                    { title: 'Monday – Friday', value: 'Monday – Friday' },
                    { title: 'Monday – Thursday', value: 'Monday – Thursday' },
                    { title: 'Sunday', value: 'Sunday' },
                    { title: 'Monday', value: 'Monday' },
                    { title: 'Tuesday', value: 'Tuesday' },
                    { title: 'Wednesday', value: 'Wednesday' },
                    { title: 'Thursday', value: 'Thursday' },
                    { title: 'Friday', value: 'Friday' },
                    { title: 'Saturday', value: 'Saturday' },
                ],
                layout: 'dropdown'
            }
        },
        {
            title: 'Open',
            name: 'open',
            type: 'string',
        },
        {
            title: 'Close',
            name: 'close',
            type: 'string',
        },
    ],
    preview: {
        select: {
            d: 'day',
            o: 'open',
            c: 'close',
        },
        prepare({ d, o, c }) {
            const t=`${d}:`+` ${o} - ${c}`
            return {
                title: t
            }
        }
    }
}