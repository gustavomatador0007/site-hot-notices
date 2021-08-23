if (!localStorage.nossoCook) {
    document.querySelector('.box-cookies').classList.remove('hide')
}

const acceptCookies = () => {
    document.querySelector('.box-cookies').classList.add('hide')
    localStorage.setItem("nossoCook", "aceito");
}

const btnCookies = document.querySelector('.btn-cookies');
btnCookies.addEventListener('click', acceptCookies);

/*fim do script dos cookies*/


let botao1 = document.getElementById('acao_botao')
let conteudo1 = document.getElementById('section_escondida1')

botao1.addEventListener('click',()=>{
    conteudo1.classList.toggle('ativo')
})

/** FIM DE DEIXAR OS CONTEUDOS ESCONDIDOS 1 */

let botao2 = document.getElementById('acao_botao2')
let conteudo2 = document.getElementById('section_escondida2')

botao2.addEventListener('click',()=>{
    conteudo2.classList.toggle('ativo2')
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
    title: 'Qual Iphone comprar em 2021?',
    description: 'Na matéria de hoje, trarei um modelo para você que está procurando um Iphone de entrada/intermediário.',
    image_url: 'public/assets/img/iphone.gif',
    link: 'src/pages/iphones.html'
})
section.innerHTML = card

section.innerHTML += template({
    title: 'Sonda Perseverance perfura solo de Marte para a coleta de amostras, mas conteúdo sumiu.',
    description: 'Perseverance começou a coletar amostras de uma rocha, a primeira de muitas que deverão ser trazidas à terra, disse a Nasa na última sexta-feira (06).',
    image_url: 'public/assets/img/perseverance.gif',
    link: 'src/pages/perseverance.html'
})

/** FIM DOS PRIMEIROS CONTEUDOS COPIADOS */

const section_games= document.getElementById('games');

const card_games = template ({
    title: 'Qual é o jogo mais jogado de 2021?',
    description: 'Na matéria da vez, iremos falar sobre os três (3) jogos mais jogados de 2021, a lista foi feita a partir de uma análise de jogadores ativos e a quantidade de contas registradas nos games mais jogados.',
    image_url: 'public/assets/img/minecraft.gif' ,
    link: 'src/pages/maisjogados.html'
})

section_games.innerHTML = card_games

section_games.innerHTML += template ({
    title: 'Melhores jogos de PS5 em 2021',
    description: 'Sabemos que a nova geração de consoles chegou recentemente, trazendo alguns jogos exclusivos e atualizações de jogos do PS4 para um melhor desempenho no PS5. Por esse motivo na matéria da vez, você irá ver alguns ótimos jogos para jogar no PS5.',
    image_url: 'public/assets/img/miles-morales.gif',
    link: 'src/pages/melhoresgames.html'
})

/** FIM DOS SEGUNDOS CONTEUDOS COPIADOS */
/** FIM DOS CONTEUDOS - INICIO DOS CONTEUDOS ESCONDIDOS ABAIXO*/

const section_escondida2 = document.getElementById('noticias_escondidas')

const card_escondido1 = template ({
    title: ' Netflix aumenta preço de seus planos, confira os ajustes',
    description: 'No último dia 22 de julho (quinta-feira), a Netflix anunciou o aumento nos preços de seus planos.  Veja abaixo os ajustes nos planos:',
    image_url: 'public/assets/img/netflix.gif' ,
    link: 'src/pages/materia1.html'
})

section_escondida2.innerHTML += card_escondido1

section_escondida2.innerHTML += template  ({
    title: '“Venom: Tempo de Carnifina” ganha novo trailer, confira os detalhes.',
    description: 'Após três anos desde o lançamento do primeiro filme, Venom um dos maiores vilões do Homem-Aranha volta ao cinema e promete ser mais “sombrio e assustador”.',
    image_url: 'public/assets/img/Logo-de-Venom-Capa.gif',
    link: 'src/pages/materia2.html'
})

/** FIM DOS PRIMEIROS CONTEUDOS ESCONDIDOS - INICIO DOS SEGUNDOS CONTEUDOS ESCONDIDOS */

const section_escondida4 = document.getElementById('noticias_escondidas2')

const card_escondido2 = template ({
    title: 'Trailer do jogo God of War: Ragnarok pode aparecer em agosto',
    description: 'De acordo com o leaker QuimSix, o novo God of War terá seu primeiro trailer em agosto.',
    image_url: 'public/assets/img/god-of-war.gif' ,
    link: 'src/pages/godofwar.html'
})

section_escondida4.innerHTML += card_escondido2

section_escondida4.innerHTML += template({
    title: 'Após oito anos desde seu lançamento GTA V atinge 150 milhões de cópias vendidas.',
    description: 'A Rockstar desenvolvedora do GTA V, publicou nessa última segunda-feira (02) um relatório mostrando o número de vendas em seus jogos. Entre os jogos, o que mais chamou a atenção foi o GTA V, que passou de 150 milhões de cópias vendidas',
    image_url: 'public/assets/img/GTA_V_Protagonistas.gif',
    link: 'src/pages/esport2.html'
})