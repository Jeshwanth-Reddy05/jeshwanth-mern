const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter to select dept as it
const fil=employees.filter(emp => emp.department=== "IT");
console.log(fil);

//using map to update the salary 10%
const newsal=employees.map( emp => emp.salary=emp.salary+emp.salary*0.10);
console.log(newsal)

// calculate the total salary using reduce
const total =employees.reduce((x,emp)=> x+emp.salary,0);
console.log(total)

//find the person with salary 30k using find
const per=employees.find(emp => emp.salary===30000)
console.log(per)


//finding the person index using findindex()
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log(nehaIndex);


