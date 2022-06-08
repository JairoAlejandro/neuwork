const router = document.getElementById('menu');
const $root = document.getElementById('root');

const loadPage = async(route)=>{
    const response = await fetch(route)
     const page = await response.text()
     return page
}

router.addEventListener('click',(e)=>{
    e.preventDefault()
    if (e.target.getAttribute('href')){
        const href = e.target.getAttribute('href')
        window.location.hash= href
        loadPage(href).then(page=>{
            $root.innerHTML=page;
        })
    }
})

window.addEventListener('load',()=>{
    if(window.location.hash){
        const hash = window.location.hash;
        loadPage(hash.replace('#','')).then(page=>{
            $root.innerHTML=page;
        })
    }
    else if(window.location.pathname==='/index.html'||window.location.pathname==='/'&&!window.location.hash){
        loadPage('/views/home.html').then(page=>{
            $root.innerHTML=page;
        })
    }
})

const cont = loadPage('/views/custom.html')



