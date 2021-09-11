// match given id with account id, and return the array
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}
// sort names by lastname using sort() function
function sortAccountsByLastName(accounts) {
  return accounts.sort((lastnameA, lastnameB) => lastnameA.name.last.toLowerCase() > lastnameB.name.last.toLowerCase() ? 1 : -1);
};
// return the length of total borrowed books from book array
function getTotalNumberOfBorrows(account, books) {
  // filter books array and then find book id that matches account id
  const numOfBorrows = books.filter((book) => (book.borrows).some((bookId) => bookId.id === account.id))
  return numOfBorrows.length;
}
// helper function
function getBooksPossessedByAccount(account, books, authors) {
    const result = books.filter((book) => (book.borrows).find((item) => item.id === account.id && !item.returned));

    result.forEach((book) => {
      let anAuthor = authors.find((person) => person.id === book.authorId);
      book['author'] = anAuthor;
    })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
