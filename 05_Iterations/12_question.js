const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1986, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
];
// bk means object that is under the array

console.log(" Books that having a genre of 'History' ");
let userBooks = books.filter((bk) => bk.genre == "History");
console.log(userBooks);

console.log(" Books that publish after 1986 ");
const publih = books.filter((bk) => {
  return bk.publish >= 1986;
});
console.log(publih);

// applying more than one condition in single function

userBooks = books.filter((bk) => {
  return bk.genre === "History" && bk.publish >= 1999;
});
console.log(userBooks);

