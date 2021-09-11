// find authors from author array of object that matches given id
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
// find books that matches given id in argument
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}
/*
returns a array contains book objects that represent the books _that are currently checked out_,
while the second array contains book objects that represent the books _that have been returned._
*/
function partitionBooksByBorrowedStatus(books) {
  const firstArray = [];
  const secondArray = [];
    books.forEach((book) => {
      if (book.borrows.find((item) => item.returned === false)) {
        firstArray.push(book);
      } else secondArray.push(book);
    })
  const result = [firstArray, secondArray];
  return result;
}

function getBorrowersForBook(book, accounts) {
  let borrowHistory = book.borrows.map((borrow) => { 
    let accountInfo = findAuthorById(accounts, borrow.id)
    accountInfo.returned = borrow.returned
  return accountInfo
  }).slice(0, 10)
return borrowHistory
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
