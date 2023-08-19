import UserHelpers from './UserHelpers';

const alice = {
  firstName: 'Alice',
  lastName: 'Gray',
  points: 78,
};

const fullName = UserHelpers.getFullName(alice);
const category = UserHelpers.getCategory(alice);