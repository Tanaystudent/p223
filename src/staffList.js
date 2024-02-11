
import { faker } from '@faker-js/faker'
const staffList =[{
    key:0,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    position:faker.person.jobTitle()
},
{
    key:1,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    position:faker.person.jobTitle()
},
{
    key:2,
    avatar : faker.image.avatar(),
    name : faker.person.firstName(),
    position:faker.person.jobTitle()
},



]
export default staffList