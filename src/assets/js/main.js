if ( document.querySelector('.menu.accordion') ){
    new ItcAccordion('.menu.accordion', {		
			  
	});
}

if ( document.querySelector('.faq-accordion.accordion') ){
    new ItcAccordion('.faq-accordion.accordion', {		
        alwaysOpen: false
	});
}


if ( document.querySelector('.accordion.mobile-spoiler') ){

    const accSpoilers = document.querySelectorAll('.accordion.mobile-spoiler');
    accSpoilers.forEach(  spoiler => {
        new ItcAccordion(spoiler, {		
			  
        });
    })
    
}




const hamburger = document.querySelector('.hamburger');
const mobMenu = document.querySelector('.header-bottom');
const hamburgerMenuClose = document.querySelector('.header-bottom__close');
const header = document.querySelector('.header');

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  hideMenu();
});

hamburger.addEventListener('click', function(){
	if ( !this.classList.contains('active') ){
		mobMenu.classList.add('active');
		this.classList.add('active');

        let bodyWidth = document.documentElement.clientWidth;      
                
        document.body.style.maxWidth  = bodyWidth + 'px';
        header.style.maxWidth  = bodyWidth + 'px';
        document.body.classList.add('no-scroll');
	} else{
		mobMenu.classList.remove('active');
		this.classList.remove('active');
	}
	
        
})

function hideMenu(){
	mobMenu.classList.remove('active');
    hamburger.classList.remove('active');

    document.body.classList.remove('no-scroll');
    document.body.removeAttribute('style');
    header.removeAttribute('style');
}

hamburgerMenuClose.addEventListener('click', hideMenu);

const footerSloganSlider = new Swiper(".swiper.swiper-footer-slogan", {
	spaceBetween: 30,
	speed: 1000,
	effect: "fade",
	loop: true,
	autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
});


$(window).load(function(){
    $('.partners').liMarquee();
})

//отложенная загрузка изображений
let observerOptions = {
    rootMargin: '0px'  
};
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("[data-lazy-img]"));
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.getAttribute('data-lazy-img');
                    lazyImage.removeAttribute('data-lazy-img')
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        },observerOptions);
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
    
    }
});

/*

data-to-jump="#test"  - куда переносимся
data-media-jump="768" - media breakpoint
data-mode="desktop-first" - если не указано то по умолчанию mobile-first

*/
document.addEventListener('DOMContentLoaded', function(){
    let jumpBlocks = document.querySelectorAll('[data-to-jump][data-media-jump]');

    if ( jumpBlocks.length ){
        jumpBlocks.forEach( jb => {
            
            const targetBlockLink = jb.getAttribute('data-to-jump');
            const targetBlockNode = document.querySelector(targetBlockLink);
            const targetMedia = Number(jb.getAttribute('data-media-jump'));
            

            const initialParent = jb.parentNode;
            
            let vw = document.documentElement.clientWidth;
            
            if ( targetBlockNode &&  targetMedia )  {

                const mode = jb.getAttribute('data-mode');

                if ( mode === 'desktop-first' ){
                    if ( vw <= targetMedia ) targetBlockNode.append(jb);
                } else{
                    if ( vw >= targetMedia ) targetBlockNode.append(jb);
                }
                
                

                window.addEventListener('resize', function(){
                    
                    let currentParent = jb.parentNode;
                    let vw = document.documentElement.clientWidth;

                    if ( mode === 'desktop-first' ){
                        if ( vw <= targetMedia  && currentParent !=  targetBlockNode ){
                            targetBlockNode.append(jb)
                        } else if ( vw > targetMedia && currentParent != initialParent) {
                            initialParent.append(jb);
                        }

                    } else{
                        if ( vw >= targetMedia  && currentParent !=  targetBlockNode ){
                            targetBlockNode.append(jb)
                        } else if ( vw < targetMedia && currentParent != initialParent) {
                            initialParent.append(jb);
                        }
                    }
                })
            }


            

        } )  
    }

})


let slider = new Swiper(".swiper.project-gallery", {
    speed: 1000,
    
    slidesPerView: 1.2,
    spaceBetween: 4,
    
    
    breakpoints: {
        580: {
            slidesPerView: 2.5,
            spaceBetween: 4
        },
        992: {
            slidesPerView: 'auto',
            spaceBetween: 0
        }
    }
})


document.addEventListener('DOMContentLoaded', function(){

    const testWindow = document.documentElement.clientWidth;

    let _breakpoints =  {
        
    }

    let _effect = 'fade';

    if ( testWindow < 992 ){
        _breakpoints = {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 0,
                
            }
        }

        _effect = false;
    } 

    const descriptionSlider  = new Swiper(".dp-slider-block__slider.swiper", {
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1.1,
        spaceBetween: 20,
       
        pagination: {
            el: '.dp-slider-block__slider-pagination',
            clickable: true,
        },
        effect: _effect,
        breakpoints: _breakpoints,
        
    })

    const miniCatalogGallery  = new Swiper(".mc__gallery.swiper", {
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1,
        spaceBetween: 20,
       
        pagination: {
            el: '.mc__gallery-pagination',
            clickable: true,
        },
        effect: _effect,
        
        
    })
})



Fancybox.bind('[data-fancybox]', {
    compact: false,
    contentClick: "iterateZoom",
    Images: {
      Panzoom: {
        maxScale: 2,
      },
    },
    Toolbar: {
      display: {
        left: [
          "infobar",
        ],
        middle : [],
        right: [
          "iterateZoom",
          "close",
        ],
      }
    }
  });  


  //Модальные окна
let doc = document.querySelector('html');
const modals = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: true,
    waitTransitions: false,
    closeOnOverlay: true,
	beforeOpen: function(){
        let bodyWidth = document.documentElement.clientWidth;    
        header.style.maxWidth  = bodyWidth + 'px';
        document.body.style.maxWidth  = bodyWidth + 'px';        
        document.body.classList.add('no-scroll');
		doc.classList.add('stop-scroll');
	},
	afterClose: function(){
        
		doc.classList.remove('stop-scroll');
        document.body.classList.remove('no-scroll');
        document.body.removeAttribute('style');
        header.removeAttribute('style');
	}
});


const approves = document.querySelectorAll('[data-approve]');
if ( approves.length ){
    approves.forEach( cb => {
        let parent = cb.closest('form');

        
        const target_link = cb.getAttribute('data-approve');
        const targetNode = parent.querySelector(target_link);
        console.log(cb);
        if ( !cb.checked ){
            targetNode.setAttribute('disabled', 'disabled');
        }
        cb.addEventListener('change', function(){
            
            if ( !this.checked ){
                targetNode.setAttribute('disabled', 'disabled');
            } else {
                targetNode.removeAttribute('disabled');
            }   
        })
    } )
}


const fileInput = document.querySelectorAll('input[name=file-load]');
if ( fileInput.length ){
    fileInput.forEach( re => {
		re.addEventListener('change', function(event) {
			// Получаем файл из input file	
			const file = event.target.files[0];	
			if (file) {	
				let parent =  this.closest('.file-wrap');
				parent.classList.add('file-loaded');
				const fileNameNode = parent.querySelector('.file-wrap__file-name');			
				fileNameNode.innerHTML = file.name;
			}
		
		});
	} )

    
}

	
let phoneInputs = document.querySelectorAll('input[name="phone"]');
if ( phoneInputs.length ){
    phoneInputs.forEach( inp => {
        let mask = IMask(inp, {
            mask: '+{7} 000 000 00-00',
			
            lazy: true,  // make placeholder always visible
            placeholderChar: '_'     // defaults to '_'
        })

		inp.addEventListener('focus', function(){
			mask.updateOptions({
				lazy: false,
			});
		})
		inp.addEventListener('blur', function(){
			mask.updateOptions({
				lazy: true,
			});
		})
    } )
}

	


let egPhotoSlider = new Swiper(".swiper.eg-slider", {
    speed: 1000,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
})

let fixCardSlider = new Swiper(".swiper.fix-card-slider", {
    speed: 1000,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 20,

    1180: {
        freeMode: false,
        simulateTouch: false,
    }
})


const slGalleries = document.querySelectorAll('.sl-gallery');

if ( slGalleries.length ){
    slGalleries.forEach( slGallery => {
        const images = slGallery.querySelectorAll('img');

       
        let height = slGallery.getAttribute('data-height');


        let allWidth = 0;

        images.forEach( img => {
            allWidth = allWidth + img.offsetWidth;
        } )
        
        images.forEach( img => {

            let parent = img.closest('.sl-gallery__item');

            let percentWidth = (img.offsetWidth / allWidth ) * 100;
            console.log("calc(" + percentWidth + " - 10px)");
            parent.style.width = "calc(" + percentWidth + "% - 10px)";
            parent.style.height = slGallery.getAttribute('data-height') + 'px';
        } )
        

        slGallery.classList.add('active')


    })
}