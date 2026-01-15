const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//select only sci-fi movie using reduce()
const sci=movies.filter(movie => movie.genre==="Sci-Fi");
console.log(sci)

//calculating the avg of movie rating using map
const avg = movies.reduce((acc, movie) => acc+movie.rating,0) / movies.length;
console.log( avg);
// finding the joker movie 
const jok=movies.find(movie => movie.title==="Joker");
console.log(jok)
// finding the index of avengers
const idx=movies.findIndex(movie => movie.title==="Avengers");
console.log(idx)

