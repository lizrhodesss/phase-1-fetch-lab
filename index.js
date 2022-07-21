function fetchBooks() {
 return fetch ('https://anapioficeandfire.com/api/books')
    .then (resp => resp.json())
    .then (books => {
      renderBooks(books)
    })
  
}
function renderBooks(books){
//books.forEach()
}

  //fetchBooks();

