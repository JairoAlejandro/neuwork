const rootStyles = document.documentElement;

const getProperty = (property)=>{
    let variable =  rootStyles.style.getPropertyValue(property);
    return variable
}
const updateProperties = ()=>{
    const darkShadow = getProperty('--dark-shadow');
    const lightShadow = getProperty('--light-shadow');
    const darkGradient = getProperty('--dark-gradient');
    const lightGradient = getProperty('--light-gradient');
    const distance = getProperty('--distance');
    const blur = getProperty('--blur');

    const varDs = document.getElementById('ds').innerHTML=darkShadow;
    const varLs = document.getElementById('ls').innerHTML=lightShadow;
    const varDg = document.getElementById('dg').innerHTML=darkGradient;
    const varLg = document.getElementById('lg').innerHTML=lightGradient;
    const varDis = document.getElementById('dis').innerHTML=distance;
    const varBl = document.getElementById('bl').innerHTML=blur;
}
document.body.addEventListener('click',(e)=>{
    
    if (e.target.getAttribute('id')==='save'){
        const $darkShadow = document.getElementById('dark-shadow').value;
        const $lightShadow = document.getElementById('light-shadow').value;
        const $darkGradient = document.getElementById('dark-gradient').value; 
        const $lightGradient = document.getElementById('light-gradient').value;
        const $distance = document.getElementById('distance').value;
        const $blur = document.getElementById('blur').value;
        
        rootStyles.style.setProperty('--dark-shadow',$darkShadow);
        rootStyles.style.setProperty('--light-shadow',$lightShadow);
        rootStyles.style.setProperty('--dark-gradient',$darkGradient);
        rootStyles.style.setProperty('--light-gradient',$lightGradient);
        rootStyles.style.setProperty('--distance',$distance+'px');
        rootStyles.style.setProperty('--blur',$blur+'px');
        updateProperties()
    }
})

    





