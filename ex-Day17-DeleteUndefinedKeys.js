function deleteUndefinedKeys (object) {
if (object.name == undefined) {
    delete object.name
}
if (object.age == undefined) {
    delete object.age
 }
if (object.email == undefined) {
    delete object.email
}
return object
}

console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
  }));


// console.log(deleteUndefinedKeys({
//   name: 'Dimitri',
//   age: undefined,
//   email: 'dimitri@mail.com'
// }));
// // { name: 'Dimitri', email: 'dimitri@mail.com' }

// console.log(deleteUndefinedKeys({
//   name: undefined,
//   age: undefined,
//   email: undefined
// }));
// // {}
// Implementasikan function di atas agar mengembalikan key yang memiliki value saja (bukan undefined)