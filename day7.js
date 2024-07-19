// Objects in javascript
const book = {
  title: "Javascript Mastry",
  author: "Haider Ali",
  publishDate: new Date("2000", "08", "01").toDateString(),
  details: function () {
    console.log(`author is ${this.author} and title is ${this.author}`);
  },
  updateDate: function (year) {
    this.publishDate = new Date(year, "08", "01").toDateString();
  },
};
console.log(book.title, book.author);
book.details();
book.updateDate("2050");
book.details();

const library = [
  { title: "php mastry", author: "Haider Ali Amjad" },
  { title: "typescript mastry", author: "Haider Ali Amjad" },
];

for (i of library) {
  console.log(i.title);
}
for (i in book) {
  console.log(i);
}
console.log(Object.keys(library));
console.log(Object.values(library));
