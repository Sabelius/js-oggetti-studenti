const students = {
  firstName : "Topsy",
  lastName : "Crets",
  age : "59",
};

for(const properties in students){
  console.log(students[properties]);
}



let arrStudents = [
  {
    firstName : "Giulio",
    lastName : "Cesare",
    age : "40"
  },

  {
    firstName : "Clark",
    lastName : "Kent",
    age : "55"
  },

  {
    firstName : "Peter",
    lastName : "Parker",
    age : "39"
  },

];

for(i = 0; i < arrStudents.length; i++){
  for(let keys in arrStudents[i]){
    console.log(arrStudents[i][keys]);
  }
}



const newPerson = {
  firstName : prompt("Inserisci nome:"),
  lastName : prompt("Inserisci cognome:"),
  age : parseInt(prompt("Inserisci età:")),
};

for(const keys in newPerson){
  console.log(newPerson[keys]);
}


