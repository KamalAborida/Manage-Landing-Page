const hamburgerBtn = document.getElementById("hamburger")
let nav_visible = false

const updateInboxBtn = document.getElementById("updateInbox")
const updateInboxInpt = document.getElementById("updateInboxInpt")
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const swiperBalls = document.querySelectorAll(".ball")
const testimonials = [
  {
    name: "Ali Bravo",
    avatar: "./images/avatar-ali.png",
    comment: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
  },
  {
    name: "Anisha Li",
    avatar: "./images/avatar-anisha.png",
    comment: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis tempora fugiat? Esse, alias. Quo nisi suscipit accusamus dolorum amet.”',
  },
  {
    name: "Richard Watts",
    avatar: "./images/avatar-richard.png",
    comment: '“onsectetur adipisimpora Lorem ipsum dolor sit amet cfuuo nisi sugiat? Esse, alias. Qscipcing elit. Magni nobis teit accusamus dolorum amet.”',
  },
  {
    name: "Shanai Gough",
    avatar: "./images/avatar-shanai.png",
    comment: '“Manage has supercharged our team’s workflow. The ability t  cfuuo nisi sugiat? Esse, alias. Qscipcino maintain visibility on larger milestones at all times keeps everyone motivated.”',
  },
]


const hamMenuHandler = () => {
  if (nav_visible == false) {
    nav_visible = true
    const divOverlay = document.createElement("div")
    const div = document.createElement("div")
    const ul = document.createElement("ul")
    divOverlay.classList.add("ham-overlay")
    div.classList.add("ham-nav")
    ul.innerHTML = `
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Product</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Community</a></li>
    `
    div.append(ul)
    document.body.append(divOverlay)
    document.body.append(div)
    hamburgerBtn.src = "./images/icon-close.svg"
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden'
  }
  else {
    document.querySelector(".ham-overlay").remove()
    document.querySelector(".ham-nav").remove()
    hamburgerBtn.src = "./images/icon-hamburger.svg"
    nav_visible = false
    document.body.style.overflow = 'unset'
  }
}

const updateInboxHandler = () => {
  let email = updateInboxInpt.querySelector(".inpt").value
  if (!regexEmail.test(email)) {
    updateInboxInpt.classList.add("error")
  }
  else {
    updateInboxInpt.classList.remove("error")
    updateInboxInpt.querySelector(".inpt").value = ""
  }
}

const swiperHandler = (index) => {
  document.getElementById("reviewerName").textContent = testimonials[index].name
  document.getElementById("reviewerComment").textContent = testimonials[index].comment
  document.getElementById("reviewerImg").src = testimonials[index].avatar
  swiperBalls.forEach((ball, i) => {
    if (index == i) {
      ball.classList.add("ball--closed")
    }
    else {
      ball.classList.remove("ball--closed")
    }
  })
}


hamburgerBtn.addEventListener("click", hamMenuHandler)
updateInboxBtn.addEventListener("click", updateInboxHandler)
swiperBalls.forEach((ball, index) => {
  ball.addEventListener("click", swiperHandler.bind(this, index))
});