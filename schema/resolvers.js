import { UserList } from '../FakeData'

const resolvers = {
    Query: {
        users: () => UserList,
    },
};

module.exports = {resolvers};