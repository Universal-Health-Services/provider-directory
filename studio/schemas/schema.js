// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents types
import location from './documents/location'
import provider from './documents/provider'
import role from './documents/role'
import specialty from './documents/specialty'

// Object types
import body from './objects/bodyPortableText'
import locationImage from './objects/locationImage'
import profileImage from './objects/profileImage'
import services from './objects/services'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    location,
    provider,
    role,
    specialty,
    body,
    locationImage,
    profileImage,
    services
  ])
})
