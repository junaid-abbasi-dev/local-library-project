// return total number of book object
function getTotalBooksCount(books) {
  const result = books.filter((book) => book)
  return result.length;
}
// return total number of accounts objects
function getTotalAccountsCount(accounts) {
  const result = accounts.filter((account) => account);
  return result.length;
}

// a helper function
function borrowedBooks(book, checkedOut) {
  book.forEach((book) => {
    if (book.borrows.find((item) => !item.returned)) {
      checkedOut.push(book);
    }
  })
}

// returns total number of book that are borrowed
function getBooksBorrowedCount(books) {
  const checkedOut = [];
  // a helper function
  borrowedBooks(books, checkedOut);
  return checkedOut.length;
}

function getMostCommonGenres(books) {
  const onlyGenres = books.reduce((acc, book)=> {
   const { genre } = book
    !acc[genre] ? acc[genre] =  { name: genre, count: 1} : acc[genre].count++
  return acc
  }, {})
  return Object.values(onlyGenres).sort((a, b) => b.count - a.count).splice(0, 5)
 
 }
 
 function getMostPopularBooks(books) {
  const booksCount = [];
  books.forEach((book) => booksCount.push({name: book.title, count: book.borrows.length}));
  booksCount.sort((bookA, bookB) => bookB.count - bookA.count);
  booksCount.splice(5);
  return booksCount;
}
 
 function getMostPopularAuthors(books, authors) {
   let authorCount = []
   authors.forEach((author)=> {
     let newAuthor = { name: author.name.first + " " + author.name.last, count: 0}
   books.forEach((book)=> {
     if(book.authorId === author.id) {
       newAuthor.count += book.borrows.length
     }
     })
     authorCount.push(newAuthor)
   })
   return authorCount.sort((a, b)=> b.count - a.count).splice(0, 5)
 }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
