

const selectCorpus = document.querySelectorAll(".select-rooms__list a"),
  corpuses = document.querySelectorAll(".corpuses a"),
  infoBubble = document.querySelector(".info-bubble")

console.log(corpuses)

// подсветка корпуса при клике на кнопку с номером корпуса


selectCorpus.forEach(el => {
  el.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let selfHref = self.getAttribute('href');
    let currentElement = document.querySelector(`.corpuses a[href = "${selfHref}"]`)
    let currentNumber = document.querySelector(`.numbers a[href = "${selfHref}"]`)
    currentElement.style.cssText = 'fill:#422510; opacity: 0.75';
    currentElement.classList.add('active')
    currentNumber.style.cssText = 'fill:#D70D2E; opacity: 0.75';
  })
})

// подсветка корпуса при наведении

corpuses.forEach(el => {
  console.log(el)
  el.addEventListener("mouseenter", (e) => {
    let self = e.currentTarget;
    let selfHref = self.getAttribute('href');
    let currentElement = document.querySelector(`.corpuses a[href = "${selfHref}"]`)
    let currentNumber = document.querySelector(`.numbers a[href = "${selfHref}"]`)
    currentElement.style.cssText = 'fill:#422510; opacity: 0.75';
    currentNumber.style.cssText = 'fill:#D70D2E; opacity: 0.75';
    infoBubble.style.display = "block"
  })

  el.addEventListener("mouseleave", (e) => {
    infoBubble.style.display = "none"
    if(el.classList.contains('active')){
      return
    }else{
      
        let self = e.currentTarget;
        let selfHref = self.getAttribute('href');
        let currentElement = document.querySelector(`.corpuses a[href = "${selfHref}"]`)
        let currentNumber = document.querySelector(`.numbers a[href = "${selfHref}"]`)
        currentElement.style.cssText = 'fill: transparent; opacity: 0.75';
        currentNumber.style.cssText = 'fill: transparent; opacity: 0.75';    
    }   
  })
})

//бабл следует за курсором мыши


  const followCursor = () => { 
  
    corpuses.forEach( corpuse =>{
      corpuse.addEventListener('mousemove', e => { 
        const target = e.target 
        if (!target) return
  
        if (target.closest('a')) {
          infoBubble.style.display = 'block'
        } else { // иначе
          infoBubble.style.display = 'none'
        }
  
        infoBubble.style.left = e.pageX + 'px'
        infoBubble.style.top = e.pageY + 'px' 
      })
    })}
  
    followCursor() 
 


