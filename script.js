let nameArr = []
let dateArr = []
let postArr = []

const postBtn = document.getElementById('post-btn')
const postField = document.getElementById('post-field')
const blogDiv = document.getElementById('blog-div')
const nameField = document.getElementById('name-field')
const clearBtn = document.getElementById('clear-btn')
const errDiv = document.getElementById('err-div')
//for page reload
const savedNames = JSON.parse(localStorage.getItem("nameArr"))
const savedDates = JSON.parse(localStorage.getItem("dateArr"))
const savedPosts = JSON.parse(localStorage.getItem("postArr"))


if(savedNames && savedDates && savedPosts){
    nameArr = savedNames
    dateArr = savedDates
    postArr = savedPosts
    render(nameArr, dateArr, postArr)
}

postBtn.addEventListener("click", ()=>{

    if(!nameField.checkValidity() || !postField.checkValidity()){
        const errMsg = "<p>Name or Post content required!<p>"
        errDiv.innerHTML = errMsg 
    } else {
        errDiv.innerHTML = ""
        const timeStamp = new Date;
        nameArr.push(nameField.value)
        dateArr.push(timeStamp.toString())
        postArr.push(postField.value)
        nameField.value = ""
        postField.value = ""

        localStorage.setItem("nameArr", JSON.stringify(nameArr))
        localStorage.setItem("dateArr", JSON.stringify(dateArr))
        localStorage.setItem("postArr", JSON.stringify(postArr))

        render(nameArr, dateArr, postArr)
    }
    
})

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    nameArr = []
    dateArr = []
    postArr = []
    render(nameArr, dateArr, postArr)
})

function render(names, dates, posts){
    let blogPosts = ""
    for(let i = 0; i<posts.length;i++){
        blogPosts += `
        <article class="blog-post">
            <p>${names[i]}</p>
            <p>${dates[i]}</p>
            <p>${posts[i]} </p>
        </article>
        `
    }
    blogDiv.innerHTML = blogPosts
}

