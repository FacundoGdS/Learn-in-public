function addFullNameProperty(obj) {
  obj.fullName = obj.firstName +" "+ obj.lastName;
  return obj;
};

var person = {
  firstName: 'Jade',
  lastName: 'Smith',
  fullName: null,
};

console.log(addFullNameProperty(person));