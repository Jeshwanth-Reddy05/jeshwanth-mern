import { courses } from "./data.js";

//MODULE 2: COURSE CATALOG ENGINE

//-> Get published courses
let publishedCourses = courses.filter((course) => course.published === true);
console.log("PublishedCourses:", publishedCourses);
//-> Sort courses by price (high → low)
let sortedCourses = [...courses].sort((c1, c2) => c1.price - c2.price);
console.log("SortedCourses", sortedCourses);
//-> Extract { title, price } only
let extractData = courses.map((course) => {
  return {
    title: course.title,
    price: course.price,
  };
});
console.log("ExtractData", extractData);
//-> Calculate total value of published courses
let totalValue = courses
  .filter((course) => course.published === true)
  .reduce((price, c) => price + c.price, 0);
console.log(totalValue);
//-> Add a new course immutably
let updatedCourses = [
  ...courses,
  {
    id: 104,
    title: "Express",
    price: 1350,
    published: true,
  },
];
console.log(updatedCourses);