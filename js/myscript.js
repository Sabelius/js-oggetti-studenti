const students = {
  firstName : "Topsy",
  lastName : "Crets",
  age : "59",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(students.fullName());
console.log(students.age);


let arrStudents = [
  {
    firstName : "Giulio",
    lastName : "Cesare",
    age : "40",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  },

  {
    firstName : "Clark",
    lastName : "Kent",
    age : "55",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  },

  {
    firstName : "Peter",
    lastName : "Parker",
    age : "39",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  },

];

for(i = 0; i < arrStudents.length; i++){
  console.log(arrStudents[i].fullName());
  console.log(arrStudents[i].age);
}



const newPerson = {
  firstName : prompt("Inserisci nome:"),
  lastName : prompt("Inserisci cognome:"),
  age : parseInt(prompt("Inserisci età:")),
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(newPerson.fullName());
console.log(newPerson.age);


