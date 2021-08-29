if (!localStorage.nossoCook) {
    document.querySelector('.box-cookies').classList.remove('hide')
}

const acceptCookies = () => {
    document.querySelector('.box-cookies').classList.add('hide')
    localStorage.setItem("HOT-NOTICES", "aceito");
}

const btnCookies = document.querySelector('.btn-cookies');
btnCookies.addEventListener('click', acceptCookies);

/*fim do script dos cookies*/


let botao1 = document.getElementById('acao_botao')
let conteudo1 = document.getElementById('section_escondida1')
let botao_escondido1 = document.getElementById('botao_ver_mais_escondido1')

botao1.addEventListener('click',()=>{
    conteudo1.classList.toggle('ativo')
    if(botao_escondido1.style.display=='block'){
        botao_escondido1.style.display='none'
    }else{
        botao_escondido1.style.display='block'
    }
})

/** FIM DE DEIXAR OS CONTEUDOS ESCONDIDOS 1 */

let botao2 = document.getElementById('acao_botao2')
let conteudo2 = document.getElementById('section_escondida2')
let botao_escondido2 = document.getElementById('btn_2_escondido');

botao2.addEventListener('click',()=>{
    conteudo2.classList.toggle('ativo2')
    if(botao_escondido2.style.display=='block'){
        botao_escondido2.style.display='none'
    }else{
        botao_escondido2.style.display='block'
    }
})

/** FIM DE DEIXAR OS CONTEUDOS ESCONDIDOS 2 */

function template ({ title, description, image_url, link, alt}) {
    return `<section class="card_item">
<img src="${image_url}" alt="${alt}" class="" width="320px">
<div class="">
    <h2 id="">${title}</h2>
    <p class="">${description}</p>
</div>
<a href="${link}"><div class=""><input type="button" value="Ver Mais" class=""></div></a>
</section>`

}

/** FIM DO TEMPLATE */

const section = document.getElementById('noticias');

const card = template({
    title: 'Homem aranha 3 – Tobey Maguire vai aparecer?',
    description: 'O novo Trailer do Homem Aranha sem Volta Para Casa, deixou todos os fãs da franquia animados, porém a dúvida ainda é “Tobey Maquire vai aparecer? ”, um detalhe pode ter dado uma grande pista.',
    image_url: 'public/assets/img/Homem-Aranha_(atores).gif',
    link: 'src/pages/homemaranha.html'
})
section.innerHTML = card

section.innerHTML += template({
    title: 'Nova temporada de The 100 estreia dia 1 de setembro ',
    description: 'Confira os detalhes da nova e última temporada da série The 100.',
    image_url: 'public/assets/img/The_100_logo.gif',
    link: 'src/pages/the100.html'
})

/** FIM DOS PRIMEIROS CONTEUDOS COPIADOS */

const section_games= document.getElementById('games');

const card_games = template ({
    title: 'A moeda RP do League of Legends (LOL) aumentou no Brasil',
    description: 'A Riot anunciou que terá um aumento nos preços do RP no League of Legends  (LOL) e no TeamFight tactics(TFT) no Brasil.',
    image_url: 'public/assets/img/lol.gif' ,
    link: 'src/pages/rplol.html'
})

section_games.innerHTML = card_games

section_games.innerHTML += template ({
    title: 'Nova geração de consoles PS5, XBOX SERIES X | S tem preços mais baratos',
    description: 'A hora de migrar para a nova geração de consoles chegou! Com o novo reajuste nos preços do IPI feita pelo governo federal ...',
    image_url: 'public/assets/img/xbox-x-e-s.gif',
    link: 'src/pages/xbox.html'
})

/** FIM DOS SEGUNDOS CONTEUDOS COPIADOS */
/** FIM DOS CONTEUDOS - INICIO DOS CONTEUDOS ESCONDIDOS ABAIXO*/

const section_escondida2 = document.getElementById('noticias_escondidas')

const card_escondido1 = template ({
    title: 'Qual Iphone comprar em 2021? Descubra o melhor modelo para você',
    description: 'Na matéria de hoje, trarei um modelo para você que está procurando um Iphone de entrada/intermediário.',
    image_url: 'public/assets/img/iphone.gif' ,
    link: 'src/pages/iphones.html'
})

section_escondida2.innerHTML += card_escondido1

section_escondida2.innerHTML += template  ({
    title: 'Sonda Perseverance perfura solo de Marte para a coleta de amostras, mas conteúdo sumiu.',
    description: 'Perseverance começou a coletar amostras de uma rocha, a primeira de muitas que deverão ser trazidas à terra, disse a Nasa na última sexta-feira (06).',
    image_url: 'public/assets/img/perseverance.gif',
    link: 'src/pages/perseverance.html'
})

/** FIM DOS PRIMEIROS CONTEUDOS ESCONDIDOS - INICIO DOS SEGUNDOS CONTEUDOS ESCONDIDOS */

const section_escondida4 = document.getElementById('noticias_escondidas2')

const card_escondido2 = template ({
    title: 'Qual é o jogo mais jogado de 2021?',
    description: 'Na matéria da vez, iremos falar sobre os três (3) jogos mais jogados de 2021, a lista foi feita a partir de uma análise de jogadores ativos e a quantidade de contas registradas nos games mais jogados.',
    image_url: 'public/assets/img/minecraft.gif' ,
    link: 'src/pages/maisjogados.html'
})

section_escondida4.innerHTML += card_escondido2

section_escondida4.innerHTML += template({
    title: ' Melhores jogos de PS5 em 2021',
    description: 'Sabemos que a nova geração de consoles chegou recentemente, trazendo alguns jogos exclusivos e atualizações de jogos do PS4 para um melhor desempenho no PS5. Por esse motivo na matéria da vez, você irá ver alguns ótimos jogos para jogar no PS5.',
    image_url: 'public/assets/img/miles-morales.gif',
    link: 'src/pages/melhoresgames.html'
})