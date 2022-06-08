const $menuToggle = document.getElementById('menu-toggle');
const $menu = document.getElementById('menu');
const $rootStyle = document.documentElement;

const hideMenu = ()=>{
    if (document.body.clientWidth<=600){
        $menu.classList.add('hidden');
    }
    else if(document.body.clientWidth>600&&$menu.classList.contains('hidden')){
        $menu.classList.remove('hidden');

    }
}
$menuToggle.addEventListener('click',()=>{
    $menu.classList.toggle('hidden');
    $menu.style.transitionDuration='0.2s';
})
window.addEventListener('load',hideMenu())
window.addEventListener('resize',()=>hideMenu())
