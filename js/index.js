document.addEventListener("DOMContentLoaded", function() {
    fetchBooks()
    clickListener()

});



function showHTML(book){
    return (`
    <div>
    <div>
        <img src="${book.img_url}">
    </div>
    <h3>${book.title}</h3>
    <h3>${book.author}</h3>
    <h3>${book.subtitle}</h3>
    <h3>${book.description}</h3>
    <ul id='user-list'></ul>
    <div id='likeBtn'></div>
    </div>
    `)
}

function users(book) {
    const ul = document.querySelector('#user-list')
    const singleUser = book.users.forEach(user => {
        const userLi = document.createElement('li')
        userLi.innerText = user.username
        ul.append(userLi)
    })
}


//like btn
    //associate with user
    //like listener




function clickListener(){
    const bookList = document.querySelector('#list')
    bookList.addEventListener('click', function(event){
        const selectedBookId = event.target.id
        fetch(`http://localhost:3000/books/${selectedBookId}`)
        .then(res => res.json())
        .then(book => {
          const show = document.getElementById('show-panel')
          show.innerHTML = showHTML(book)
          users(book)
        })
    })
}


const allBooks = "http://localhost:3000/books"

function fetchBooks() {
    fetch(allBooks)
      .then(res => res.json())
      .then(data => {
          data.forEach(book => {
              let bookLi = document.createElement('li')
              bookLi.id = book.id
              bookLi.innerHTML = `${book.title}`
              
              let list = document.getElementById('list')
              list.append(bookLi)
          })
      })
}