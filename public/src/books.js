function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

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
