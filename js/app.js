const wrapper = document.querySelector("#wrapper")
const footer = wrapper.lastElementChild
const aside = document.getElementsByTagName("aside")[0]
const section = document.getElementsByTagName("main")[0].children
const navlink = document.querySelector('#nav').children
const icon = document.querySelectorAll('.icon')
const jumplink = document.getElementsByClassName('jumplink')[0]
const lisoft = document.querySelectorAll(".lisoft")
const lihobbie = document.querySelectorAll(".lihobbie")
const hobdivItens = document.querySelector("#hobdiv").children
const hobdiv = document.querySelector("#hobdiv")
const desenhosthumbnail = document.querySelectorAll(".desenhosthumbnail")
const portfolioWrapper = document.querySelector("#portfolioWrapper")
const portfolioLinks = document.querySelector("#portfolioLinks").children
const allArts = portfolioWrapper.lastElementChild.children
const ulContato = document.querySelectorAll(".ulContato");

var intervalCarousel
var currentSlideIndex = 0
/* Array.from(icon).forEach((element, index) => {
	let lef = element.firstElementChild.offsetWidth / 6
	if(element.offsetWidth > element.firstElementChild.offsetWidth) {
		console.log(element.offsetWidth, element.firstElementChild.offsetWidth);
	} else {
		element.firstElementChild.style.transform = 'translateX(-' + lef + "px)";
	}
	// Perfil:	 offsetWidth = 77
	console.log(lef);
	
}) */

function checkDevice(){ 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		 Array.from(ulContato).forEach((e) => {
			//Array.from(e.children).forEach(el => el.lastElementChild.style.fontSize = "x-large")
		}) 
		console.log('mobile')
	}
	else {
		 Array.from(ulContato).forEach((e) => {
			//Array.from(e.children).forEach(el => el.lastElementChild.style.fontSize = "xx-large")
		}) 
		console.log('desktop')
	}
}
checkDevice()
// false - estou no PC


//configurações iniciais
changeDisplay(0)
navlink[0].classList.add('active')
jumplink.setAttribute('draggable', "false") // remover drag link
jumplink.lastElementChild.setAttribute('draggable', "false") // remover drag img
Array.from(lisoft).forEach((e) => e.firstElementChild.setAttribute('draggable', "false"))
hobdivItens[0].setAttribute('style','display:grid;')

// NAV LINKS - Links de navegação
Array.from(navlink).forEach((element, index) => {
	element.setAttribute('draggable', "false")
	element.addEventListener('click', (event) => {
		//event.preventDefault()
		changeDisplay(index)
		element.classList.add('active')
	})
	element.addEventListener('mouseover', (event) => {upView()})
})

// JUMPLINK - onclick para resumo
jumplink.addEventListener('click', (event) => {
	//event.preventDefault()
	changeDisplay(1)
	navlink[1].classList.add('active')
	
})


// PORTFOLIO LINKS - Links de exibição do portfólio
Array.from(portfolioLinks).forEach((element) => {
	element.addEventListener('click', () => {portfolioView(element)})
})

function portfolioView(elementAtivo){
	document.querySelectorAll(".portLiActive")[0].classList.remove("portLiActive")
	elementAtivo.classList.add('portLiActive')
	Array.from(allArts).forEach((element) => {
		element.style.display = "grid"
		if (element.dataset.item != elementAtivo.dataset.item) element.style.display = "none"
		if (elementAtivo.dataset.item == "all" ) element.style.display = "grid"
		element.lastElementChild.setAttribute('draggable', "false")
		element.addEventListener('animationend', animationEnd(element))
		
	})
	portfolioWrapper.previousElementSibling.textContent = elementAtivo.title
	if(portfolioWrapper.previousElementSibling.textContent === "Portfólio"){
		portfolioWrapper.previousElementSibling.textContent = "Todos os meus projetos"} else {
		portfolioWrapper.previousElementSibling.textContent = elementAtivo.title
	}
	
}

function changeDisplay(index){
	Array.from(section).forEach((element) =>{element.style.display = 'none'})
	section[index].style.display = 'flex'
	document.querySelectorAll('.active')[0].classList.remove("active")
	calcScroll()
	upView()
	aside.style.animationName = 'colorIn';
	aside.addEventListener('animationend', asideAnimationEnd)
	
	// se clicou em Resumo [1]
	if(index == 1){
		changeHobbieDisplay(0)
		lihobbie[0].classList.add('hobactive')
		intervalCarousel = window.setInterval(alterarThumb,5000)
	} else {
		clearInterval(intervalCarousel)
		currentSlideIndex = 0
	}
	
	// se clicou em Portfólio [2]
	if(index == 2) portfolioView(portfolioLinks[0])
}

// limpar animação do texto do ASIDE
function asideAnimationEnd(){
	aside.textContent = document.querySelectorAll('.active')[0].textContent
	aside.style.animationName = 'colorOut'
	aside.removeEventListener('animationend', asideAnimationEnd)
}

// limpar animação txt DIV's PORTFÓLIO
function animationEnd(element){
	element.firstChild.style.color = '#4C84FF'
	element.removeEventListener('animationend', animationEnd)
	//aside.textContent = elementAtivo.title
}

window.addEventListener("scroll", calcScroll); //scrollend

function calcScroll(){
	/* 
	if(Math.round(window.pageYOffset) >= (wrapper.scrollHeight - window.innerHeight) - Math.round(footer.clientHeight / 3)){
		footer.style.display = "flex"
		footer.style.position = "fixed"
	} else {
		footer.style.display = "none"
	} */
}

function upView(){
	wrapper.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'start'
	})
}

// INTERESSES/HOBBIES - onclick da ulhobbie
Array.from(lihobbie).forEach((element, index) => {
	element.firstElementChild.setAttribute('draggable', "false")
	element.addEventListener('click', (event) => {
		changeHobbieDisplay(index)
		element.classList.add('hobactive')
	})
})
window.onhashchange = function () {
  console.log("#changed", window.location.hash);
}

// mudar display hobbie exibido
function changeHobbieDisplay(index){
	Array.from(hobdivItens).forEach((element) =>{element.style.display = 'none'})
	hobdivItens[index].style.display = 'grid'
	document.querySelectorAll('.hobactive')[0].classList.remove("hobactive")

}

// DESENHOS CAROUSEL - mudar exibição das thumbnails desenhos
function alterarThumb(){
	
	desenhosthumbnail.forEach((element) => {
		element.style.display = 'none'
		element.style.animationName = ''
	})
	
	if(currentSlideIndex >= desenhosthumbnail.length) currentSlideIndex = 0 
	ue(desenhosthumbnail[currentSlideIndex]); ue(desenhosthumbnail[currentSlideIndex+1])
	function ue(e){ e.style.display = 'block'; e.style.animationName = 'fadeThumb' }
	currentSlideIndex+=2
}

// HOBBIE THUMBNAILS DESENHOS - onclick para PORTFOLIO
Array.from(desenhosthumbnail).forEach((element) => {
	// reset display e animationName
	element.style.display = 'none'
	element.style.animationName = ''
	element.setAttribute('draggable', "false")
	// onclick para PORTFOLIO
	element.addEventListener('click', ()=>{
		clearInterval(intervalCarousel)
		currentSlideIndex = 0
		alterarThumb()
		changeDisplay(2)
		navlink[2].classList.add('active')
		window.location.href='#portfolio';
	})
})

desenhosthumbnail[0].style.display = 'block'
desenhosthumbnail[1].style.display = 'block'

// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////

window.onload = CapturaParametrosUrl()
function CapturaParametrosUrl() {
	Array.from(navlink).forEach((element,index)=>{
		if(window.location.hash == element.hash){
			changeDisplay(index); 
			navlink[index].classList.add('active')
		}
	})
}
