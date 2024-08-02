//activity-1
// task-1
const book = {
  title: "Jai Ganesh",
  author: "Hanuman",
  year: 2007,

  //method
  //returning as obect or an array is possible for more tha 1 ele
  getNameandAuthor: function () {
    //task-3
    return {
      title: this.title,
      author: this.author,
    };
  },

  getTitleandYear: function () {
    return `${book.title} ${book.year}`;
  },
};
console.log(book);

//task-2
console.log(book.title, book.author);

//activity-2
// task-3

const details = book.getNameandAuthor();
console.log(details.title, details.author);

//task-4
function updateYear(year) {
  book.year = year;
  console.log(book.year);
}

book.updateYear = updateYear;

book.updateYear(2024);

//activity-3
// task-5
const library = {
  name: "bangalore",
  books: [
    { title: "Jai Hanuman", Author: "Ganesha", Year: 2187 },
    { title: "Jai Lakshmi", Author: "Saraswathi", Year: 2187 },
  ],
};

console.log(library);

//task-6
console.log(library.name);
for (ele of library.books) {
  console.log(ele.title);
}

//activity-4
// task-7
const TitleandYear = book.getTitleandYear();
console.log(TitleandYear);

//activity-5
// task-8
for (ele in book) {
  console.log(ele, book[ele]);
}
// task-9
console.log(Object.keys(book));
console.log(Object.values(book));
