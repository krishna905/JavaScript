let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
console.log(contact.firstName);//john
contact.firstName="krishna"
console.log(contact.firstName)//krishna
console.log(contact.age); // undefined
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['address']); //  lists all the  obj 

contact.age=25; //added new property age in to obj 
console.log(contact);
delete contact.address;  //deleted addrss property
console.log(contact)
console.log('address' in contact);//checks whwther the priperty exist in the object, retuens false
console.log('age' in contact)//returns true



let age=26;
let newAge=age;
newAge+=1;
console.log(age+ " "+ newAge); //they are diff because , we jst copied value, not reference in case of primitive
let person = {
    name: 'John',
    age: 25,
  };
  
  let member = person;
  console.log(person);
  
  member.age = 26;
  
  console.log(person);
  console.log(member); //they are same because in case of object(reference datatype), we create referncec
