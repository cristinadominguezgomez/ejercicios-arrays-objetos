"use strict";

const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

// Exercises

// 1) What is the average income of all the people in the array?

const totalSalary = people.reduce((previousValue, person) => {
  return +previousValue + +person.salary;
}, 0);

console.log(
  `The average income is ${(totalSalary / people.length).toFixed(2)}€`
);

// 2) Who are the people that are currently older than 35?

const fechaActual = new Date().getTime();
const peopleOlder35 = [];

people.filter((person) => {
  const años =
    (fechaActual - new Date(person.DOB).getTime()) /
    (1000 * 60 * 60 * 24) /
    365;

  if (años > 35) {
    peopleOlder35.push(person);
  }
});
console.log(peopleOlder35);

// 3) Get a list of the people's full name (firstName and lastName).

const listFullName = people.map((person) => {
  console.log(person.firstName, person.lastName);
});

// 4) Get a list of people in the array ordered from youngest to oldest.

const peopleFromYoungestToOldest = people.sort((a, b) => {
  return new Date(a.DOB).getTime() - new Date(b.DOB).getTime();
});

console.log(peopleFromYoungestToOldest);

// 5) How many people are there in each department?

const personsInDepartment = {};

for (const person of people) {
  if (person.department in personsInDepartment) {
    personsInDepartment[person.department] += 1;
  } else {
    personsInDepartment[person.department] = 1;
  }
}
console.log(personsInDepartment);
