import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents types
import location from './documents/location'
import provider from './documents/provider'
import role from './documents/role'
import credential from './documents/credential'
import specialty from './documents/specialty'

// Object types
import body from './objects/bodyPortableText'
import locationImage from './objects/locationImage'
import locationHour from './objects/locationHour'
import profileImage from './objects/profileImage'

// Service Objects
import docasapProvider from './services/docasapProvider'
import docasapLocation from './services/docasapLocation'
import kyruusProvider from './services/kyruusProvider'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    location,
    provider,
    role,
    credential,
    specialty,
    body,
    locationImage,
    locationHour,
    profileImage,
    docasapProvider,
    docasapLocation,
    kyruusProvider,
  ])
})
