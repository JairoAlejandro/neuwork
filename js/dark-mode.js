class Darkmode extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.classList.add('dark-mode')
        const darkmodeBtn = document.createElement('div')
        darkmodeBtn.classList.add('darkmode-btn')
        this.appendChild(darkmodeBtn)
        this.addEventListener('click',()=>{
            document.body.style.transitionDuration='0.2s'
            document.body.classList.toggle('dark-theme')
            this.classList.toggle('active')
            if (document.body.classList.contains('dark-theme')){
                localStorage.setItem('dark-mode','true')
            }
            else{
                localStorage.setItem('dark-mode','false')
            }
        })

            if(localStorage.getItem('dark-mode')==='true'){
                document.body.classList.add('dark-theme')
                this.classList.add('active')
            }
            else if(localStorage.getItem('dark-mode')==='false'){
                document.body.classList.remove('dark-theme')
                this.classList.remove('active')
            }
       
    }
}

customElements.define('darkmode-toggle',Darkmode)

