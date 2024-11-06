const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ]

let findBookByTitle=(books,title)=>{
    return books.find(element=>element.title===title)
    
}
console.log(findBookByTitle(books, '1984'))
  