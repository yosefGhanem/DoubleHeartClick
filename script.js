// Click any area on the image
//then have the heart appeared

const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0

let timesClicked = 0
// Fire-off a function when double click
//making it more complex by doing a click

loveMe.addEventListener('click', (e)=>{
    if(clickTime ===0){
        clickTime = new Date().getTime()
        //it has the time when clicked
        //when pressing on that
        //console.log(clickTime)
    }else {
        if((new Date().getTime() - clickTime) < 800){
            //console.log(123)
            // Pass the event parameter
            craeteHeart(e)
            clickTime = 0
        }
        else {
            clickTime = new Date().getTime( )
        }
    }
})

const craeteHeart = (e)=>{
    // Add element
    const heart = document.createElement('i')
    // Add double classes to it
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    // Show the value
    //console.log(x,y)

    //get offset from left and right to subtraxt from x and y values

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    //So that gives us the correct coordinates within the image, not the viewport.

    //console.log(xInside, yInside)

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    // Add it to love me element 
    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked
    //we keep putting fas fa-heart 
    //to the html, so run a function
    // to remove them

    //remove it from the DOM after 3 seconds
    setTimeout(()=>heart.remove(),3000)

}