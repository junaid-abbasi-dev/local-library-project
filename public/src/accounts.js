function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastnameA, lastnameB) => lastnameA.name.last.toLowerCase() > lastnameB.name.last.toLowerCase() ? 1 : -1);
};

function getTotalNumberOfBorrows(account, books) {
  const numOfBorrows = books.filter((book) => (book.borrows).some((bookId) => bookId.id === account.id))
  return numOfBorrows.length;
}

function getBooksPossessedByAccount(account, books, authors) {
    const result = books.filter((book) => {
      return book.borrows.find((item) => item.id === account.id && !item.returned);
    });

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
