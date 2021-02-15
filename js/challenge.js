document.addEventListener("DOMContentLoaded", () => {

    const counter = document.getElementById("counter")
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const heart = document.getElementById("heart")
    const pause = document.getElementById("pause")
    const submit = document.getElementById("input[type=submit]")

    let isPaused = false 
    // uh ???? scope issue probably, can't change global variables inside a lesser scope
    // should it be an event listener instead?

    let buttonsArray = [minus,plus,heart,submit]

    const likesList = document.querySelector("ul[class=likes]")
    const commentsList = document.getElementById("list")
    const commentForm = document.getElementById("comment-form")
    const commentInput = document.getElementById("comment-input")

    // timer goes +1/sec. you can 'minus' it into negative numbers.
    // when 'pause' button is clicked, its text turns to 'resume' & all other buttons get set to 'disabled' INCLUDING COMMENT SUBMIT BUTTON. timer also stops.
    // when a new like is added, it's added as a <li>item</li> in the format of: `9 has been liked X times` where X changes accordingly
    // when a new comment is added, it's added as a <p>element</p>
    // likes list + comments list are ordered in terms of what appeared first

    heart.addEventListener("click", function(event) {
        // likedNumber = current number on the timer
        // check if anything in likesList already matches current number from counter
        // iterate over likesList?
        // set variable for <li>item</li>(.value?) string
        // liSplit = liString.split(" ")
        // firstNumber = parseInt(liSplit[0])
        // secondNumber = parseInt(liSplit[4])
        // if firstNumber...
        // ++secondNumber and then change that on the string somehow. replace it?
        // figure out how to ensure that if firstNumber doesn't exist, add new <li>item</li>
        // should I iterate over collection of firstNumbers ? 
    })

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault()
        let newComment = document.createElement("p")
        newComment.textContent = commentInput.value
        commentsList.appendChild(newComment)
    })
  })