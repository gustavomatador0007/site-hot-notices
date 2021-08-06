let recebeQuadrado = document.getElementById('coisa')

    function menu(){
    if(recebeQuadrado.style.display=='block'){
        recebeQuadrado.style.display='none'}
        else{
            recebeQuadrado.style.display='block'
        }
    }

    if(!localStorage.nossoCook){
        document.querySelector('.box-cookies').classList.remove('hide')
    }

    const acceptCookies = ()=>{
        document.querySelector('.box-cookies').classList.add('hide')
    localStorage.setItem("nossoCook","aceito");
    }

    const btnCookies = document.querySelector('.btn-cookies');
    btnCookies.addEventListener('click', acceptCookies);

