 
const addBtn = document.querySelector(".addBTN")

const Modal = document.querySelector(".modal")
const submitBtn = document.querySelector(".SubmitBTN")
const closeBtn = document.querySelector(".closeBTN")
const check = document.querySelector(".checkbox")

const modalTitle = document.querySelector(".titleInput")
const modalAuthor = document.querySelector(".authorInput")
const modalPages = document.querySelector(".pagesInput")
const modalCheckbox = document.querySelector(".checkboxInput")

const bookCardContainer = document.querySelector(".bookCardContainer")






function Book(title,author,pages,read){

        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;

}

 
function addBookToLibrary(Book){
    


    
   
   
    let newbookCard = document.createElement("div")
         newbookCard.classList.add("bookCard")
    
    let bookCardContent = document.createElement("div") 
        bookCardContent.classList.add("bookCardContent")
        newbookCard.append((bookCardContent))

    let TitleDiv = document.createElement("div")
        TitleDiv.classList.add("Title")
        bookCardContent.append(TitleDiv)
    
    let TitleLabel = document.createElement("label")
        TitleDiv.append(TitleLabel)
        TitleLabel.textContent=`Title: ${Book.title}`

    let AuthorDiv = document.createElement("div")
        AuthorDiv.classList.add("author")
        bookCardContent.append(AuthorDiv)

    let AuthorLabel = document.createElement("label")
        AuthorDiv.append(AuthorLabel)
        AuthorLabel.textContent=`Author: ${Book.author}`

    let PagesDiv = document.createElement("div")
        PagesDiv.classList.add("pages")
        bookCardContent.append(PagesDiv)
    
    let PagesLabel = document.createElement("label")
       PagesDiv.append(PagesLabel)
        PagesLabel.textContent=`Pages: ${Book.pages}`

    //creating the buttons

    let ReadandRemove = document.createElement("div")
        ReadandRemove.classList.add("ReadandRemove")


       let readBTN=document.createElement("button")
            readBTN.classList.add("readBtn")
            ReadandRemove.append(readBTN)
            bookCardContent.append(readBTN)

       let removeBTN=document.createElement("button")
            removeBTN.classList.add("removeBTN")
            removeBTN.textContent="Remove"
            ReadandRemove.append(removeBTN)
            bookCardContent.append(removeBTN)

        if(Book.read){
            readBTN.classList.add("read")
            readBTN.textContent="Read"
        }

        if(!Book.read){
            readBTN.classList.add("notread")
            readBTN.textContent="Not read"
        }

 
            readBTN.addEventListener("click",()=>{
                readBTN.classList.toggle("notread")
                readBTN.classList.toggle("read")
            
                if(readBTN.classList.contains("read")){
                    console.log("test1")
                    readBTN.textContent="Read"
                }
                
                if(readBTN.classList.contains("notread")){
                    console.log("test2")
                    readBTN.textContent="Not read"
                }
                 
            })
    


    removeBTN.addEventListener("click",()=>{
        bookCardContainer.removeChild(newbookCard)
    })

    bookCardContainer.append(newbookCard)
 
}





addBtn.addEventListener("click",()=>{
    Modal.showModal()

})

submitBtn.addEventListener("click",()=>{
   let newBook = new Book(modalTitle.value,modalAuthor.value,modalPages.value,modalCheckbox.checked)
    
   Modal.close()
   addBookToLibrary(newBook)
 

    
})


closeBtn.addEventListener("click",()=>{
    Modal.close()
})

 



