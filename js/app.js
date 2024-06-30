const body = document.getElementsByTagName('body')[0];
const wrapper = document.querySelector("#wrapper");
const footer = wrapper.lastElementChild;
const aside = document.querySelector("aside");
const main = document.querySelector("main");
const mainSection = main.children;
const menuLinks = document.querySelector('#menuLinks');
const iconLinks = document.querySelectorAll('.icon-link');
const skillSect = document.querySelectorAll('.skillSect');
const activeLink = Array.from(iconLinks).find(link => link.classList.contains('active'));

const ulDuvFreq = document.querySelector("#ulDuvFreq")
const ulDetails = document.querySelectorAll(".ulDetails")

const pSeries = document.querySelectorAll(".pSeries")
const olSeries = document.querySelectorAll(".olSeries")

const listalistulli = document.querySelectorAll(".listalistulli")
const nolistyle = document.querySelectorAll(".nolistyle")

const lihobbie = document.querySelectorAll(".lihobbie")
const hobdivItens = document.querySelector("#hobdiv").children
const hobdiv = document.querySelector("#hobdiv")
const desenhosthumbnail = document.querySelectorAll(".desenhosthumbnail")

var currentSkill = false;

let skillsList = document.querySelector('.skills-list');
let illustrationList = document.querySelector('.illustration-list');

const saibaMais = document.querySelector("#saibaMais")
const portfolioWrapper = document.querySelector("#portfolioWrapper")
const portfolioLinks = document.querySelector("#portfolioLinks").children
const allArts = portfolioWrapper.lastElementChild.children

const galeriaWrapper = document.querySelector("#galeriaWrapper")
const galeriaWrapperCounter = document.querySelector(".galeriaWrapperCounter")
const galeriaWrapperTitle = document.querySelector("#galeriaWrapperTitle")
const responseImgGalery = document.querySelector("#responseImgGalery")
const previousBtn = document.querySelector("#previousBtn")
const nextBtn = document.querySelector("#nextBtn")
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
const fullIco = document.querySelector('#fullIco')


const logo = document.querySelector('#logo');
const foto = document.querySelector('#foto');
const skillLink = document.querySelectorAll('.skillLink');
const copyright = document.querySelector('.copyright');

copyright.lastElementChild.appendChild(document.createElement('span').appendChild(document.createTextNode(" - " + new Date().getFullYear())));

let menuBarActive = false;
var intervalCarousel
var currentSlideIndex = 0;
var intervalSeries
var currentSeries = 0;

var intervalSkill
var timerSkill = 8192;




function checkDevice() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  //console.log(isMobile ? 'mobile' : 'desktop');
  menuBarActive = isMobile;
}

saibaMais.onclick = function(){
	this.parentElement.previousElementSibling.style.display="block";this.parentElement.style.display="none"
}

logo.addEventListener('click', () => iconLinks[0].click());

Array.from(ulDetails).forEach((elm, ind) => {
	elm.addEventListener('click', (event) => {
		let eTarget = event.target;
		if(eTarget.tagName == 'SUMMARY'){
			eTarget.nextElementSibling.style.display = 'block';
		}
		if(eTarget.tagName == 'P'){
			if(!eTarget.nextElementSibling){
				if(!eTarget.previousElementSibling)return;
				eTarget.previousElementSibling.display = 'block';
				eTarget.style.display = 'none';
			}
			if((!eTarget.previousElementSibling) || (!eTarget.nextElementSibling)){
				eTarget.parentElement.removeAttribute('open')
				return;
			}
			eTarget.style.display = 'none';
			eTarget.nextElementSibling.style.display = 'block';
			
		}
		
		//console.log(eTarget)
	})

	elm.ontouchend = (event) =>{
		if(event.target.tagName == 'SUMMARY'){
			event.target.nextElementSibling.style.display = 'block';
			//event.target.click();
		}
		if(event.target.tagName == 'P'){
			event.target.click();
		}
		
	}
})

//git remote add origin https://github.com/Giusley/giusley.github.io.git
const ulDuvFreqChildren = Array.from(ulDuvFreq.children);

ulDuvFreqChildren.forEach((elm) => {
    elm.classList.add('duvFreqPlus');

    elm.addEventListener('click', () => {
        ulDuvFreqChildren.forEach((item) => {
            const content = item.lastElementChild;

            if (item === elm) {
                // Alterna a exibição do conteúdo do item clicado
                if (content.style.display === 'block') {
                    content.style.animationName = 'duvLiAnimOut';
                    content.onanimationend = () => {
                        content.style.display = 'none';
                        elm.classList.add('duvFreqPlus');
                        elm.classList.remove('duvFreqMinus');
                    };
                } else {
                    content.style.display = 'block';
                    content.style.animationName = 'duvLiAnimIn';
                    elm.classList.add('duvFreqMinus');
                    elm.classList.remove('duvFreqPlus');
                }
            } else {
                // Oculta o conteúdo dos outros itens
                content.style.display = 'none';
                content.style.animationName = 'duvLiAnimOut';
                item.classList.add('duvFreqPlus');
                item.classList.remove('duvFreqMinus');
            }
        });
    });
});

document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
  //document.body.style.userSelect = 'none';
  checkDevice();
  if(!window.location.hash)showSection(mainSection[0])
 /*  skillLink.forEach((elm, ind) => {
	  elm.addEventListener('click', (e) => {
		if(ind == 0){
			foto.setAttribute('style', 'transform:rotate(2deg);')
		}
		if(ind == 1){
			foto.setAttribute('style', 'transform:rotate(0deg);')
		}
		if(ind == 2){
			foto.setAttribute('style', 'transform:rotate(-2deg);')
		}
		
	  })
	  
  }) */
  
	const stk1Div = document.getElementById('stk1');
	const stk2Div = document.getElementById('stk2');
	const stk3Div = document.getElementById('stk3');
	const stk4Div = document.getElementById('stk4');
	const stk5Div = document.getElementById('stk5');
	const stk6Div = document.getElementById('stk6');

	skillLink.forEach((elm, ind) => {
		
		elm.onmouseover = function () {
			if (ind === 0) {
			  stk1Div.style.opacity = '0.97501';
			  stk2Div.style.opacity = '0.97501';
			}
			if (ind === 1) {
			  stk3Div.style.opacity = '0.97501';
			  stk4Div.style.opacity = '0.97501';
			}
			if (ind === 2) {
			  stk5Div.style.opacity = '0.97501';
			  stk6Div.style.opacity = '0.97501';
			}
		};

		elm.onmouseout = function () {
			if (ind === 0) {
			  stk1Div.style.opacity = '0';
			  stk2Div.style.opacity = '0';
			}
			if (ind === 1) {
			  stk3Div.style.opacity = '0';
			  stk4Div.style.opacity = '0';
			}
			if (ind === 2) {
			  stk5Div.style.opacity = '0';
			  stk6Div.style.opacity = '0';
			}
		};
		
		elm.onclick = function(){
			if (ind === 0) {
			  stk1Div.style.animationName = '';
			  stk2Div.style.animationName = '';
			  document.querySelectorAll('.skillSect')[1].scrollIntoView({inline:'start',block: 'start'})
				setTimeout(()=>{
					Array.from(document.querySelectorAll('.ulDetails')[0].children).forEach(itm => {
					   itm.firstElementChild.removeAttribute('open')
				   })
					Array.from(document.querySelectorAll('.ulDetails')[1].children).forEach(itm => {
					   itm.firstElementChild.removeAttribute('open')
				   })
					window.scrollBy(0, -150);
					
				},750)
			 
			}
			if (ind === 1) {
			  stk3Div.style.animationName = 'giraLeft';
			  stk3Div.style.animationDelay = '2s';
			  stk4Div.style.animationName = 'giraRight';
			  stk4Div.style.animationDelay = '2s';
			  document.querySelectorAll('.ulDetails')[1].scrollIntoView({inline:'start',block: 'center'})
				setTimeout(()=>{
					 Array.from(document.querySelectorAll('.ulDetails')[1].children).forEach(itm => {
					   itm.firstElementChild.setAttribute('open', '')
				   })
				   
				   Array.from(document.querySelectorAll('.ulDetails')[0].children).forEach(itm => {
					   itm.firstElementChild.removeAttribute('open')
				   })
					window.scrollBy(0, -175);},750
				)
			}
			if (ind === 2) {
			  stk5Div.style.animationName = '';
			  stk6Div.style.animationName = '';
			  document.querySelectorAll('.skillSect')[0].scrollIntoView({inline:'start',block: 'start'})
			  setTimeout(()=>{
				
				   Array.from(document.querySelectorAll('.ulDetails')[0].children).forEach(itm => {
					   itm.firstElementChild.setAttribute('open', '')
				   })
				   
				   Array.from(document.querySelectorAll('.ulDetails')[1].children).forEach(itm => {
					   itm.firstElementChild.removeAttribute('open')
				   })
				   
				  
				  window.scrollBy(0, -175 );
			  },750)
				
			}
		}
		
		elm.ontouchend = function(){
			if (ind === 0) {
			  stk1Div.style.animationName = '';
			  stk2Div.style.animationName = '';
			  elm.click()
			}
			if (ind === 1) {
			  stk3Div.style.animationName = 'giraLeft';
			  stk3Div.style.animationDelay = '2s';
			  stk4Div.style.animationName = 'giraRight';
			  stk4Div.style.animationDelay = '2s';
			  
			  elm.click()
			}
			if (ind === 2) {
			  stk5Div.style.animationName = '';
			  stk6Div.style.animationName = '';
			  elm.click()
			}
		}
	});
	
  
	iconLinks.forEach((elm, ind) => {
		elm.addEventListener('click', (e) => {
			iconLinks.forEach(element => element.classList.toggle('active', false));
			Array.from(mainSection).forEach(mainSect => mainSect.style.display = 'none');

			aside.textContent = e.target.textContent;
			if(e.target.textContent == "Perfil") aside.textContent = 'Giusley Camilo';
			showSection(mainSection[ind])

			elm.classList.toggle('active', true);
		});
		elm.addEventListener("dragstart", (e) => e.preventDefault());
		elm.addEventListener("select", (e) => e.preventDefault());
		
		
		
	});
	
	
	

	currentSeries = 0;
	olSeries[currentSeries].style.display = 'block';
	pSeries[currentSeries].style.display = 'block';
	intervalSeries = window.setInterval(showNextItem, 5000);

	skillsList.style.display = 'block'
	skillsList.nextElementSibling.style.display = 'block'

	illustrationList.style.display = 'none'
	illustrationList.nextElementSibling.style.display = 'none'
	
	intervalSkill = window.setInterval(() => {
		currentSkill = !currentSkill;
		alterarSkillExibida(currentSkill)
	}, timerSkill);
	
	responseImgGalery.style.cursor = 'zoom-in'
  
  //document.querySelector('html').style.overflowY = 'hidden'
	
	window.addEventListener('popstate', function (event) {
		// Oculta o wrapper ao pressionar o botão de voltar
		document.querySelector('html').style.overflowY = 'overlay'
		document.querySelector("#galeriaWrapper").style.display = 'none'
	});
	
	const listaSoft = document.getElementById('ulsoft');
	const itensSoft = Array.from(listaSoft.getElementsByClassName('lisoft'));

  function exibirLis(inicio, fim) {
    itensSoft.forEach((item, index) => {
      if (index >= inicio && index < fim) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function alternarItens() {
    let inicio = 0;
    const intervalo = 4250; // 5 segundos

    function exibirProximoGrupo() {
      const fim = inicio + 6;

      // Exibir o próximo grupo de 6 itens
      exibirLis(inicio, fim);

      // Atualizar o índice de início para o próximo grupo
      inicio = (fim >= itensSoft.length) ? 0 : fim;

      // Chamar recursivamente após o intervalo
      setTimeout(exibirProximoGrupo, intervalo);
    }

    // Iniciar o loop
    exibirProximoGrupo();
  }

  // Iniciar o processo após o carregamento da página
  alternarItens();
  
	const cpLink = menuBarActive ? "https://codepen.io/Giusley-Camilo/pen/zYjPjZJ" : "https://codepen.io/Giusley-Camilo/full/zYjPjZJ";
	document.querySelector('#codepenLink').href = cpLink

	const carameloLink = menuBarActive ? "https://codepen.io/Giusley-Camilo/pen/ExdQyWe" : "https://codepen.io/Giusley-Camilo/full/ExdQyWe";
	const carameloElement = document.querySelector('div[data-link="https://codepen.io/Giusley-Camilo/pen/ExdQyWe"]')
	carameloElement.setAttribute('data-link', carameloLink)
	carameloElement.firstElementChild.firstElementChild.setAttribute('href', carameloLink)
	
	const elevadorLink = menuBarActive ? "https://codepen.io/Giusley-Camilo/pen/zYjPjZJ" : "https://codepen.io/Giusley-Camilo/full/zYjPjZJ";
	const elevadorElement = document.querySelector('div[data-link="https://codepen.io/Giusley-Camilo/pen/zYjPjZJ"]')
	elevadorElement.setAttribute('data-link', elevadorLink)
	elevadorElement.firstElementChild.firstElementChild.setAttribute('href', elevadorLink)
	
	const vendingMachineLink = menuBarActive ? "https://codepen.io/Giusley-Camilo/pen/gOQXLjX" : "https://codepen.io/Giusley-Camilo/full/gOQXLjX";
	const vendingMachineElement = document.querySelector('div[data-link="https://codepen.io/Giusley-Camilo/pen/gOQXLjX"]')
	vendingMachineElement.setAttribute('data-link', vendingMachineLink)
	vendingMachineElement.firstElementChild.firstElementChild.setAttribute('href', vendingMachineLink)
	
});

function showSection(elm){
	
	if(elm == mainSection[0])elm.style.display = 'flex'
	if(elm == mainSection[1]){
		intervalCarousel = window.setInterval(alterarThumb,5000)
		elm.style.display = 'flex'
	} else {
		clearInterval(intervalCarousel)
		currentSlideIndex = 0
	}
	if(elm == mainSection[2])elm.style.display = 'flex'
	if(elm == mainSection[3])elm.style.display = 'flex'
	
	
	
};
window.onhashchange = function () {
  console.log("#changed", window.location.hash);
}


document.addEventListener('keydown', (event) => {
  if(!responseImgGalery.offsetParent){
	  
	  console.log('offsetParent')
	  return;
  }
  if(event.code === 'ArrowUp' || event.code === 'ArrowLeft'){ // verifica se a tecla pressionada é a seta para baixo
    if(previousBtn.style.display == 'block')previousBtn.click()
	//console.log('left')
  }
  if(event.code === 'ArrowDown' || event.code === 'ArrowRight') {
	if(nextBtn.style.display == 'block')nextBtn.click()
	//console.log('right')
  }
  if(event.code === 'Escape' || event.code === 'Backspace'){
	document.querySelector(".btn-galeria-close").click()
	//console.log('esc')
  }
  
  
});


function adjustGrid() {
    
		if (window.outerWidth > 1999) {
			thumbsArticle.setAttribute('style', 'grid-template-columns: repeat(4, 1fr)!important');
			return;
		} else {
			if (window.outerWidth >= 768 && window.outerWidth < 992) { 
				thumbsArticle.setAttribute('style', 'grid-template-columns: repeat(3, 1fr)!important');
				return;
			} else if (window.outerWidth >= 576 && window.outerWidth < 768) { 
				thumbsArticle.setAttribute('style', 'grid-template-columns: repeat(2, 2fr)!important');
				return;
			} else {
				if (window.outerWidth >= 384 && window.outerWidth < 576) {
				thumbsArticle.setAttribute('style', 'grid-template-columns: repeat(2, 1fr)!important');
					return;
				}
				if (window.outerWidth < 384) {
				thumbsArticle.setAttribute('style', 'grid-template-columns: repeat(1, 1fr)!important');
					return;
				}


			}
		
			thumbsArticle.setAttribute('style', 'grid-template-columns: repeat(4, 1fr)!important');
		}
	//console.log(window.outerWidth)
}
window.onresize = function(){
	adjustGrid();
};

window.onload = function(){
	CapturaParametrosUrl();adjustGrid();
	
};

window.onscroll = function(e){
	const c = document.documentElement.scrollTop || document.body.scrollTop;
        if(e.timeStamp < 100)return;
		if(!menuBarActive)return;
		if (c > 2) {
           document.querySelector('#portfolioLinks').style.position = 'fixed'
           document.querySelector('#portfolioLinks').style.marginTop = '8vh'
		   //document.querySelector('#myBtn').style.display = 'block'
		  // console.log(c,e)
		  // 
        } else {
			 return;
			 document.querySelector('#portfolioLinks').style.position = 'relative'
			 document.querySelector('#portfolioLinks').style.top = '0vh'
			//thumbsArticle.setAttribute('style','margin: calc(8vh - .5em) auto')
			//portfolioWrapper.parentElement.style.setAttribute('style','margin: calc(8vh - .5em) auto')
			//document.querySelector('#myBtn').style.display = 'none'
		}
}

const summaryItems = document.querySelectorAll('.ulDetails li');

summaryItems.forEach((item) => {
    const summary = item.firstElementChild;
	
    summary.onfocus = () => {
        summary.setAttribute('open', '');
    };

    summary.onblur = () => {
        summary.removeAttribute('open');
    };
	
	if(!menuBarActive){
		summary.ontouchend = (event) => {
        if (!summary.getAttribute('open')) {
            try{event.preventDefault();}catch(e){summary.setAttribute('open', '');return false;} // Impede o comportamento padrão do toque
            summary.setAttribute('open', '');
        }else{
			summary.removeAttribute('open');
		}
		
    };
	} else{
		summary.onclick = () => {
        if (summary.getAttribute('open')) {
           summary.removeAttribute('open');
		   return
        }
		summary.setAttribute('open', '');
		
    };
	}
    
});


function CapturaParametrosUrl() {
 
  iconLinks.forEach((element, index) => {
   //Array.from(mainSection).forEach(mainSect => mainSect.style.display = 'none');
	if (window.location.hash === element.hash) {
      
	  if(element.hash === '#' || window.location.hash === '#'){
		  showSection(mainSection[0])
	  }if(element.hash === '#resumo'){
		  showSection(mainSection[1])
	  }if(element.hash === '#portfolio'){
		  showSection(mainSection[2])
	  }if(element.hash === '#contato'){
		  showSection(mainSection[3])
	  }
	  
	  
	  
      iconLinks.forEach(element => element.classList.toggle('active', false));
      iconLinks[index].classList.toggle('active', true);
    } else {
		
		if (/^#.*\^/.test(element.hash)) {
			console.log('showSection(mainSection[3]);')
		}
		/* 
		let dialog404 = document.createElement('dialog');
		dialog404.textContent = '404 - retornando para pagina inicial';
		dialog404.style.color = 'white';
		dialog404.style.backgroundColor = '#223344';
		dialog404.style.backgroundImage = 'url(/img/editar/fundocaixa-02.webp)';
		dialog404.style.backgroundRepeat = 'no-repeat';
		dialog404.style.backgroundSize = 'cover';
		document.body.appendChild(dialog404);
		dialog404.showModal(); // Para mostrar o dialog
		setTimeout(()=>{showSection(mainSection[0]);dialog404.close()},2200)
		//
		 */
	}
  });
  hobdivItens[0].style.display = 'grid'
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    item.classList.toggle('active');
    const content = item.querySelector('.accordion-content');
    if (item.classList.contains('active')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});


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
  //console.log("#changed", window.location.hash);
  history.pushState(null, null, document.location.href);
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
		 Array.from(mainSection).forEach(mainSect => mainSect.style.display = 'none');
		 mainSection[2].style.display = 'grid'
		iconLinks.forEach(element => element.classList.toggle('active', false));
		iconLinks[2].classList.toggle('active', true);
		aside.textContent = 'Portfólio'
		upView()
		window.location.href='#portfolio';
		showSection(mainSection[2])
	})
})

desenhosthumbnail[0].style.display = 'block'
desenhosthumbnail[1].style.display = 'block'


// ALTERAR EXIBIÇÃO SERIE

const showNextItem = () => {
  Array.from(olSeries).forEach(item => item.style.display = 'none');
  Array.from(pSeries).forEach(item => item.style.display = 'none');
  
  ++currentSeries
  if(currentSeries === 3) currentSeries = 0
  //console.log(currentSeries)
  olSeries[currentSeries].style.display = 'block';
  pSeries[currentSeries].style.display = 'block';
};

Array.from(nolistyle).forEach((ulli,idx) => {
	let frameItemName = ['https://open.spotify.com/embed/track/106Uop2gW5ruIR2SCZEDBo?utm_source=generator&theme=0',
	'https://open.spotify.com/embed/track/1HM7Vp84E4SMzdrZONg6bH?utm_source=generator&theme=0',
	'https://open.spotify.com/embed/track/1xsYj84j7hUDDnTTerGWlH?utm_source=generator&theme=0',
	'https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?utm_source=generator&theme=0',
	'https://open.spotify.com/embed/track/07q0QVgO56EorrSGHC48y3?utm_source=generator&theme=0',
	'https://open.spotify.com/embed/track/2Z8WuEywRWYTKe1NybPQEW?utm_source=generator&theme=0',
	'https://open.spotify.com/embed/track/27kMqdX3aoN3gBndVKlTfR?utm_source=generator&theme=0',
	'https://open.spotify.com/embed/track/6fybp4N6eW3bsFAvARxyVe?utm_source=generator&theme=0']
	
	nolistyle[idx].addEventListener('click', ()=>{
		document.querySelector('#responseSpotfy').innerHTML = `
		<iframe class="itframe2" style="border-radius:12px" 
									src="${frameItemName[idx]}" 
									width="100%" height="165" frameBorder="0"  
									allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
									loading="lazy"></iframe>
		`
		console.log(nolistyle[idx].textContent)
	})
});
function topFunction() {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    scrollToTop();
}



[skillsList, skillsList.nextElementSibling].forEach((elm,ind)=>{
	elm.addEventListener('click', ()=>{
		
		clearInterval(intervalSkill)
		intervalSkill =	window.setInterval(() => {
			currentSkill = !currentSkill;
			alterarSkillExibida(currentSkill)
		}, timerSkill);
		
		currentSkill = !currentSkill;
		alterarSkillExibida(currentSkill)
		//console.log(elm)
	})
})

Array.from([illustrationList, illustrationList.nextElementSibling]).forEach((Element,ind)=>{
	Element.addEventListener('click', ()=>{
		clearInterval(intervalSkill)
		intervalSkill =	window.setInterval(() => {
			currentSkill = !currentSkill;
			alterarSkillExibida(currentSkill)
		}, timerSkill);
		
		currentSkill = !currentSkill;
		alterarSkillExibida(currentSkill);
		//console.log(Element);
	})
})

function alterarSkillExibida(cs){
	if(cs){
		skillsList.style.display = 'none'
		skillsList.nextElementSibling.style.display = 'none'
		
		illustrationList.style.display = 'block'
		illustrationList.nextElementSibling.style.display = 'block'
	} else {
		skillsList.style.display = 'block'
		skillsList.nextElementSibling.style.display = 'block'
		
		illustrationList.style.display = 'none'
		illustrationList.nextElementSibling.style.display = 'none'
	}
}
// /////////////////////////////////////////////////
// PORTFOLIO LINKS - Links de exibição do portfólio

//portfolioAlfabetico()
function portfolioAlfabetico(){
	
	// Seleciona todos os elementos div dentro do article
	const divElements = document.querySelectorAll('#thumbsArticle div');

	// Converte NodeList em uma matriz para poder usar sort
	const divArray = Array.from(divElements);

	// Ordena a matriz com base no texto do span (infoArt)
	divArray.sort((a, b) => {
		const textA = a.querySelector('.infoArt').textContent.toLowerCase();
		const textB = b.querySelector('.infoArt').textContent.toLowerCase();

		return textA.localeCompare(textB);
	});

	// Remove todos os elementos div do article
	divElements.forEach(div => div.remove());

	// Adiciona os elementos div reordenados de volta ao article
	let thumbsArticle = document.getElementById('thumbsArticle');
	divArray.forEach(div => thumbsArticle.appendChild(div));

	
}

var category = 'all'
var allItemsCategory = [];
var desenhosItemsCategory = [];
var pinturaItemsCategory = [];
var digitalItemsCategory = [];
var appsItemsCategory = [];

var currentFolder
var currentPath
var nextSrc,prevSrc

Array.from(portfolioLinks).forEach((element) => {
	
	element.addEventListener('click', (e) => {
		portfolioView(element)
		category = document.querySelectorAll(".portLiActive")[0].dataset.item
	})
	currentFolder = category
})


const portfolioElements = document.querySelectorAll('#thumbsArticle div');
function transformImagePath(originalPath) {
    const pathSegments = originalPath.split('/');
    const fileName = pathSegments.pop();
    const [name, extension] = fileName.split('-min.');
    const newPathSegments = pathSegments.filter(segment => segment !== 'min'); // Remove 'min' segment
    
	return [...newPathSegments, `${name}.${extension}`].join('/');
}

// Função para mostrar o ícone de carregamento
function showLoadingIcon() {
    loadingIcon.style.display = 'block';
	galeriaWrapperTitle.style.display = 'none';
	responseImgGalery.style.display = 'none';
	
}

// Função para ocultar o ícone de carregamento e exibir a imagem
function hideLoadingIcon() {
    loadingIcon.style.display = 'none';
    responseImgGalery.style.display = 'block';
	galeriaWrapperTitle.style.display = 'block';
}



Array.from(portfolioElements).forEach((elm,index, arr) =>{
	
	allItemsCategory.push(portfolioElements[index])
	
	if(portfolioElements[index].dataset.item == 'desenhos')desenhosItemsCategory.push(portfolioElements[index])
	if(portfolioElements[index].dataset.item == 'pintura')pinturaItemsCategory.push(portfolioElements[index])
	if(portfolioElements[index].dataset.item == 'digital')digitalItemsCategory.push(portfolioElements[index])
	if(portfolioElements[index].dataset.item == 'apps')appsItemsCategory.push(portfolioElements[index])
	
	elm.addEventListener('click', (Event)=>{
		category = document.querySelectorAll(".portLiActive")[0].dataset.item
		let upSrc = '';
		let upLink = '';
		
		if(Event.target.dataset.id == 'statusIndicator') {
			upSrc = Event.target.parentElement.lastElementChild.src
			
		}
		
		if(Event.target.classList.contains('fas'))upSrc = Event.target.parentElement.parentElement.lastElementChild.src
		
		if(Event.target.dataset.item)upSrc = Event.target.lastElementChild.src
		
		if(Event.target.classList.contains('infoArt'))upSrc = Event.target.parentElement.lastElementChild.src
		
		if(Event.target.tagName === 'A'){
			upSrc = Event.target.parentElement.parentElement.lastElementChild.src
			upLink = Event.target.src;
		}
		
		if(Event.target.src) upSrc = Event.target.src
		
		const modifiedSrc = transformImagePath(upSrc);
		currentPath = modifiedSrc
		
		 // Crie uma nova imagem para pré-carregar
		const preloadedImage = new Image();

		// Manipulador de eventos para quando a imagem estiver carregada
		preloadedImage.onload = function () {
			hideLoadingIcon();
			responseImgGalery.src = modifiedSrc;
		};
		
		responseImgGalery.src = modifiedSrc
		//galeriaWrapperTitle.textContent = elm.firstElementChild.textContent
		if(responseImgGalery.style.maxHeight > window.innerHeight){
			responseImgGalery.style.cursor = 'zoom-in';
			responseImgGalery.style.maxHeight = '100vh'
			responseImgGalery.style.transform = `translate3d(0, 0, 0)`;
		}
		
		if(responseImgGalery.style.maxWidth > window.innerWidth){
			responseImgGalery.style.cursor = 'zoom-in';
			responseImgGalery.style.maxWidth = '100vw'
			responseImgGalery.style.transform = `translate3d(0, 0, 0)`;
		}
		
		if(elm.dataset.link){
			galeriaWrapperTitle.innerHTML = `<a href="${elm.firstElementChild.firstElementChild.href}" target="_blank"><i class="fas fa-link"></i>${elm.firstElementChild.textContent}</a>`
			//console.log(true)
			Event.preventDefault();
		} else {
			galeriaWrapperTitle.innerHTML = elm.firstElementChild.textContent
			//console.log(false)
			Event.preventDefault();
		}
		
		

		
		if(elm.dataset.item == 'desenhos') alteraContador(desenhosItemsCategory)
		if(elm.dataset.item == 'pintura') alteraContador(pinturaItemsCategory)
		if(elm.dataset.item == 'digital') alteraContador(digitalItemsCategory)
		if(elm.dataset.item == 'apps') alteraContador(appsItemsCategory)
		if(category == 'all') alteraContador(allItemsCategory)
			//galeriaWrapperCounter.textContent = `${index+1}/${allItemsCategory.length}`
		
		
		function alteraContador(arrItemsCategory){
			const indexItem = arrItemsCategory.indexOf(elm.closest('[data-item]'));

			if (indexItem !== -1) {
				if(indexItem == 0){
					previousBtn.setAttribute('disabled',true)
					previousBtn.style.display = 'none'
				} else {previousBtn.removeAttribute('disabled');previousBtn.style.display = 'block'}
				if(indexItem == arrItemsCategory.length - 1){
					nextBtn.setAttribute('disabled','')
					nextBtn.style.display = 'none'
				} else {nextBtn.removeAttribute('disabled');nextBtn.style.display = 'block'}

				galeriaWrapperCounter.textContent = `${indexItem+1}/${arrItemsCategory.length}`
				
				nextSrc = arrItemsCategory[indexItem+1];
				prevSrc = arrItemsCategory[indexItem-1];
			} else {
				console.log("O item não está no array.");
			}
		}
		
		
		
		
		
		
		//console.log(modifiedSrc);
		document.querySelector('html').style.overflowY = 'hidden'
		
		//document.querySelector("#galeriaWrapper img").ondragstart = () => false;
		
		document.querySelector("#galeriaWrapper").style.display = 'block'
	})
})




function portfolioView(elementAtivo){
	document.querySelectorAll(".portLiActive")[0].classList.remove("portLiActive")
	elementAtivo.classList.add('portLiActive')
	Array.from(allArts).forEach((element) => {
		element.style.display = "grid"
		if (element.dataset.item != elementAtivo.dataset.item) element.style.display = "none"
		if (elementAtivo.dataset.item == "all" ) element.style.display = "grid"
		//element.lastElementChild.setAttribute('draggable', "false")
		//element.addEventListener('animationend', animationEnd(element))
		element.style.cursor = 'pointer'
		
		//console.log(element.lastElementChild)
	})
	
}

function centerScroll(){
	setTimeout(()=>{
			let conteudo = document.querySelector('#galeriaImagem');
			let scrollX = (conteudo.scrollWidth - conteudo.clientWidth) / 2;
			let scrollY = (conteudo.scrollHeight - conteudo.clientHeight) / 2;

			conteudo.scrollTo({
				top: scrollY,
				left: scrollX,
				behavior: 'smooth' // Se desejar uma animação suave ao centralizar
			});
		},250)
}

responseImgGalery.addEventListener('load', (e) => {
	hideLoadingIcon()
	centerScroll()
})

//responseImgGalery.setAttribute('draggable', true)
responseImgGalery.addEventListener('dblclick', (e) => {
	responseImgGalery.style.cursor = 'zoom-out';
		responseImgGalery.style.maxHeight = 'none'
		responseImgGalery.style.maxHeight = responseImgGalery.naturalHeight
		isDragging = true;
		
		if(document.querySelector('#zoomIco').classList.contains('fa-search-plus')){
			document.querySelector('#zoomIco').classList.remove('fa-search-plus')
			document.querySelector('#zoomIco').classList.add('fa-search-minus')
			centerScroll();
		} else {
			document.querySelector('#zoomIco').classList.add('fa-search-plus')
			document.querySelector('#zoomIco').classList.remove('fa-search-minus')
		}
})
	
	
	
responseImgGalery.addEventListener('click', (e) => {
	
	
	if(responseImgGalery.style.cursor == 'zoom-out'){
		document.querySelector('#zoomIco').classList.remove('fa-search-minus')
		document.querySelector('#zoomIco').classList.add('fa-search-plus')
		
		responseImgGalery.style.cursor = 'zoom-in';
		responseImgGalery.style.maxHeight = '90vh'
		responseImgGalery.style.transform = `translate3d(0, 0, 0)`;
		return;
	}
	if(responseImgGalery.style.cursor == 'zoom-in'){
		document.querySelector('#zoomIco').classList.remove('fa-search-plus')
		document.querySelector('#zoomIco').classList.add('fa-search-minus')
		
		responseImgGalery.style.cursor = 'zoom-out';
		responseImgGalery.style.maxHeight = 'none'
		responseImgGalery.style.maxHeight = responseImgGalery.naturalHeight;
		centerScroll();
		return;
	}
	
		
	
	//isDragging == true ? isDragging = false : isDragging = true;
	
});

previousBtn.addEventListener('click',(e)=>{
	prevSrc.click();
	//console.log('antes',prevSrc)
})
nextBtn.addEventListener('click',(e)=>{
	showLoadingIcon();
	nextSrc.click();
})



document.querySelector(".btn-galeria-zoom").addEventListener('click',(e)=>{
		responseImgGalery.style.cursor = 'zoom-out';
		responseImgGalery.style.maxHeight = 'none'
		responseImgGalery.style.maxHeight = responseImgGalery.naturalHeight
		isDragging = true;
		
		if(document.querySelector('#zoomIco').classList.contains('fa-search-plus')){
			document.querySelector('#zoomIco').classList.remove('fa-search-plus')
			document.querySelector('#zoomIco').classList.add('fa-search-minus')
			
			responseImgGalery.style.cursor = 'zoom-out';
			responseImgGalery.style.maxHeight = 'none'
			responseImgGalery.style.maxHeight = responseImgGalery.naturalHeight;
			centerScroll();
			
			
			
			
		} else {
			document.querySelector('#zoomIco').classList.add('fa-search-plus')
			document.querySelector('#zoomIco').classList.remove('fa-search-minus')
			responseImgGalery.style.cursor = 'zoom-in';
			responseImgGalery.style.maxHeight = '90vh'
			responseImgGalery.style.transform = `translate3d(0, 0, 0)`;
		}
	
		
		
})

document.querySelector(".btn-galeria-close").addEventListener('click',()=>{
	document.querySelector('html').style.overflowY = 'overlay'
	document.querySelector("#galeriaWrapper").style.display = 'none'
})

fullIco.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
  const doc = window.document;
  const docEl = doc.documentElement;
  const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement) {
    requestFullScreen.call(docEl);
    fullIco.classList.remove('fa-expand');
    fullIco.classList.add('fa-compress');
    isFullScreen = true;
	
		/* responseImgGalery.style.cursor = 'zoom-out';
		responseImgGalery.style.maxHeight = 'none'
		responseImgGalery.style.maxHeight = responseImgGalery.naturalHeight
		isDragging = true; */
	
  } else {
    cancelFullScreen.call(doc);
    fullIco.classList.remove('fa-compress');
    fullIco.classList.add('fa-expand');
    
	isFullScreen = false;
	
		/* responseImgGalery.style.cursor = 'zoom-in';
		responseImgGalery.style.maxHeight = '90vh' */
		//responseImgGalery.style.transform = `translate3d(0, 0, 0)`;
	
  }
  
}
