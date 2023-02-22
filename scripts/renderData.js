const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      title: 'Casa de Câmbio',
      date: '17 de Fevereiro de 2023',
      languages: ['html5', 'css3', 'javascript', 'figma'],
      description: `Casa de Câmbio é uma aplicação que faz a conversão do valor de uma moeda escolhida. <br /> <br />

        O projeto foi desenvolvido como avaliação pela Trybe, que exigiam os seguintes requisitos: <br /> <br />

        • Criar um repositório do zero e iniciar projeto com NPM; <br />
        • Estruturar o projeto para usar ESModules e instalar Vite como Dev Tool; <br />
        • Estruturar o HTML de acordo com protótipo e criar tags semânticas no HTML; <br />
        • Usar o endpoint da API sugerida; <br />
        • Usar o Sweet Alert 2 para as mensagens de Erro; <br />
        • Implementação do protótipo de alta fidelidade; <br /> <br />
`,
      imgSrc: './assets/projects/casadecambio.png',
      videoSrc: 'https://streamable.com/e/sjujot',
      linkedin: '',
      repository: 'https://github.com/thiagocredico/exercise-casa-de-cambio',
      site: 'https://convertasuamoeda.surge.sh'
    },
    {
      id: 2,
      type: 1,
      title: 'Gato ou Cachorro?',
      date: '24 de Janeiro de 2023',
      languages: ['html5', 'css3', 'javascript', ],
      description: `O DoWhile 2021 Card é uma aplicação interativa que mostra informações do usuário através da API do GitHub :D <br><br>

        Após concluir o evento, adicionei funcionalidades extras, como: <br><br>
        
        • Modal para o usuário inserir seus próprios dados no Card; <br>
        • Armazenamento dos dados inseridos pelo usuário no LocalStorage do navegador, fazendo com que as informações sejam mantidas mesmo após fechar a página; <br>
        • Animação de Flip em 3D (com CSS puro); <br>
        • Verso do Card com informações sobre o DoWhile 2021; <br>
        • Versão Desktop e Mobile.`,
      imgSrc: './assets/projects/gatocachorro.png',
      videoSrc: 'https://streamable.com/e/qceqn0',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858050562471145472/',
      repository: 'https://github.com/rhuanbello/origin-nlw-heat',
      site: 'https://pick-me-cat-dog.surge.sh'
    },
    {
      id: 3,
      type: 2,
      title: 'Caça Palavras',
      date: '28 de Outubro de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: `Daily Weather é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto os dos próximos 7 dias, além da velocidade do vento, nível de umidade, data/hora e temperatura máxima e mínima. <br><br>

        Esse projeto foi desenvolvido com as seguintes ferramentas: <br><br>
        
        • HTML5; <br>
        • Vanilla JavaScript; <br>
        • Compilador SASS; <br>
        • Unsplash API; <br>
        • Open Weather API (One Call & Current Weather Data); <br>
        • LocalStorage API; <br>
        • Moment.js; <br>
        `,
      imgSrc: './assets/projects/cacapalavras.png',
      videoSrc: 'https://streamable.com/e/gmb238',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6862799471626059776/',
      repository: 'https://github.com/rhuanbello/dailyweather',
      site: './caca-palavras/index.html'

    },
    {
      id: 4,
      type: 2,
      title: 'TrybeWarts',
      date: '14 de Outubro de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: `Esse é um projeto que eu desenvolvi a interface há dois meses atrás, mas que só fui me sentir confiante pra dar continuidade recentemente depois de avançar em meus estudos, pois meu objetivo era de construir toda a lógica do zero, sem utilizar a função eval(). <br><br> Eu ainda não tinha feito uma calculadora, e creio que esse seja um dos principais exercícios pra praticar a lógica de programação, então além de aplicar as funcionalidades e a interface da calculadora do Windows 10, tentei simular uma espécie de ambiente desktop, onde é possível abrir, fechar ou minimizar a aplicação. <br><br>  Algumas features que valem destacar: <br><br>
        • É possível utilizar o teclado para realizar as operações matemáticas; <br>
        • Ao "fechar" a calculadora os dados do display são apagados; <br>
        • Só é possível adicionar um ponto decimal; <br>
        • O tamanho da fonte do display se adapta conforme os números são adicionados; <br>
        • Responsivo para Mobile;`,
      imgSrc: './assets/projects/trybewarts.png',
      videoSrc: 'https://streamable.com/e/65khi6',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_clone-windows-calculator-activity-6854500487987904512-kwzK',
      repository: 'https://github.com/rhuanbello/clone-windowsCalculator',
      site: './sd-029-a-project-trybewarts/index.html'
    },
    {
      id: 5,
      type: 1,
      title: 'To-Do-List',
      date: '28 de Setembro de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: "Um E-Commerce utilizando apenas JavaScript (com localStorage) 🚀 <br><br> O objetivo desse segundo checkpoint era de desenvolver não só habilidades técnicas, mas também soft-skills como o trabalho em equipe e a organização. <br> Para essa entrega, nossa equipe (composta por Marcelo Garofalo, Filipe Farias e eu) decidiu transformar a entrega em uma loja virtual com JavaScript, alinhando o projeto com a nossa matéria de Programação Imperativa, ministrada pela instrutora Ana Cristina Teixeira. <br><br> Decidimos explorar as funcionalidades do localStorage para poder armazenar e recuperar as informações dos produtos adicionados ao carrinho, permitindo ao usuário alterar a quantidade de itens ou removê-los completamente. <br><br> Como demonstra o vídeo abaixo, mesmo após fecharmos o nosso navegador, os itens persistem em nosso carrinho de compras devido ao uso do localStorage, que armazena essas informações em nosso browser e possibilita a recuperação destes dados quando a página é aberta novamente.",
      imgSrc: './assets/projects/listadetarefas.png',
      videoSrc: 'https://streamable.com/e/tlz8yr',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_javascript-developer-digital-activity-6849053582579388416-IfoH',
      repository: 'https://github.com/rhuanbello/deathcatgrocerystore',
      site: './sd-029-a-project-todo-list/index.html'
    },
    {
      id: 6,
      type: 1,
      title: 'Pixels Art',
      date: '23 de Setembro de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: "Essa foi a minha tentativa de clonar a interface do YouTube utilizando HTML5, CSS3 e JavaScript. Com o conceito Don't Repeat Yourself na mente, fiz com que todo o projeto rodasse em uma única página manipulada pelo JavaScript, que fica responsável por atualizar o source e a descrição dos vídeos dependendo de qual vídeo o usuário seleciona, além de ocultar/exibir o sidebar e a main para dar destaque ao vídeo. Estou há aproximadamente um mês e meio estudando JavaScript e estou bem satisfeito por já estar conseguindo utilizá-lo para facilitar o desenvolvimento dos meus projetos, isso é extremamente motivador. Voltarei nesse projeto em breve para aprimorá-lo cada vez mais.",
      imgSrc: './assets/projects/pixelart.png',
      videoSrc: 'https://streamable.com/e/q700dy',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_html-css-developer-activity-6845803020157116417-39dj',
      repository: 'https://github.com/rhuanbello/clone-youtube',
      site: './sd-029-a-project-pixels-art/index.html'
    },
    {
      id: 7,
      type: 1,
      title: 'Meme Generator',
      date: '30 de Julho de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: "A Barber House é uma landing page mobile-first que reúne os conceitos fundamentais de HTML5, CSS3 e JavaScript. Ela possui animações para fazer surgir gradualmente cada section no decorrer do scroll. Além de ser totalmente responsiva para diferentes tamanhos de tela, é uma página facilmente customizável, pois todas as cores utilizadas estão armazenadas em variáveis dentro do CSS.",
      imgSrc: './assets/projects/memegenerator.png',
      videoSrc: 'https://streamable.com/e/6ci737',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6827021119288156160-qT7i',
      repository: 'https://rhuanbello.github.io/nlw6-origin/',
      site: './sd-029-a-project-meme-generator/index.html'
    },
    {
      id: 8,
      type: 1,
      title: 'Lessons Learned',
      date: '07 de Julho de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: "Minha primeira participação da Next Leve Week da Rocketseat. <br><br> Desenvolvemos do zero uma aplicação de gerenciamento de perguntas anônimas, esse foi meu primeiro contato com o Node.js, que apesar de não ser o meu foco, foi extremamente interessante conhecer.",
      imgSrc: './assets/projects/lessonslearned.png',
      videoSrc: 'https://streamable.com/e/4ozfu5',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6818692643816665088-FxZJ',
      repository: 'https://github.com/rhuanbello/nlw6-discover',
      site: './sd-029-a-project-lessons-learned/index.html'
    },
    {
      id: 9,
      type: 1,
      title: 'Color Guess',
      date: 'Em desenvolvimento',
      languages: ['html5', 'css3', 'javascript', ],
      description: "Em desenvolvimento",
      imgSrc: './assets/projects/colorguess.png',
      videoSrc: 'https://streamable.com/e/u6x84w',
      linkedin: '',
      repository: 'https://github.com/rhuanbello/naped',
      site: './sd-029-a-project-color-guess/index.html'
    },
    {
      id: 10,
      type: 1,
      title: 'Carta Misteriosa',
      date: 'Em desenvolvimento',
      languages: ['html5', 'css3', 'javascript', ],
      description: "Em desenvolvimento",
      imgSrc: './assets/projects/cartamisteriosa.png',
      videoSrc: 'https://streamable.com/e/dyteys',
      linkedin: '',
      repository: 'https://github.com/rhuanbello/clone-mercadoLivre',
      site: './sd-029-a-project-carta-misteriosa/index.html'
    },
    {
      id: 11,
      type: 1,
      title: 'Tech Gallery',
      languages: ['html5', 'css3', ],
      date: '04 de Setembro de 2021',
      description: "Esse é um projeto que realizei para o meu primeiro checkpoint da disciplina Front-End I da formação Certified Tech Developer na Digital House Brasil, em parceria com Mercado Livre e a Globant. <br><br> Neste checkpoint foi pedido um página sobre minha cidade, onde pudesse ser praticado os conceitos da propriedade position do CSS3. Aqui foi bem interessante trabalhar com contraste de cores e altura de linha para oferecer uma boa leitura ao usuário, além de praticar posicionamento sem precisar necessariamente de Flexbox ou CSS Grid Layout.",
      imgSrc: './assets/projects/techgallery.png',
      videoSrc: 'https://streamable.com/e/cwyvwh',
      linkedin: '',
      repository: 'https://github.com/rhuanbello/rioturism',
      site: './exercise-tech-gallery/tech-gallery.html'
    },
    {
      id: 12,
      type: 1,
      title: 'Reclame Aqui - Formulário Clone',
      languages: ['html5', 'css3', 'javascript', ],
      date: '30 de Julho de 2021',
      description: "Cultflix é um projeto que nasce desse fascínio e me convida a pôr em prática todo o aprendizado adquirido no Bootcamp HTML Web Developer da Digital Innovation One Inc. Ter a oportunidade de criar a minha própria versão de uma Plataforma de Streaming e ter a liberdade de inserir meus filmes favoritos é extremamente gratificante.",
      imgSrc: './assets/projects/clonereclameaqui.png',
      videoSrc: 'https://streamable.com/e/1tsfrm',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_ui-opentowork-css-activity-6821251240840835072-6GP0',
      repository: 'https://github.com/rhuanbello/cultflix',
      site: './exercise-forms/index.html'
    },
    // {
    //   id: 13,
    //   type: 1,
    //   title: 'Dashboard Star Wars',
    //   languages: ['html', 'sass', 'figma', 'javascript'],
    //   date: '08 de Julho de 2021',
    //   description: "Reunindo dois universos que eu amo: cinema e desenvolvimento. Assim, os estudos se tornam realmente divertidos! <br><br> Dashboard Star Wars é um projeto que realiza requisições de uma API externa para trazer diversos dados sobre o universo da saga. Projeto desenvolvido em um dia, apenas para praticar alguns conceitos.",
    //   imgSrc: 'assets/projects/dashboardstarwars.jpg',
    //   videoSrc: 'https://streamable.com/e/84kzet',
    //   linkedin: 'https://www.linkedin.com/posts/rhuanbello_desenvolvimento-ui-starwars-activity-6818976321042038784-FPYl',
    //   repository: 'https://github.com/rhuanbello/clone-windowsCalculator',
    //   site: 'https://rhuanbello.github.io/dashboard-starwars/'
    // },
    // {
    //   id: 14,
    //   type: 1,
    //   title: 'Animais Fantásticos',
    //   languages: ['html', 'sass', 'javascript'],
    //   date: 'Em desenvolvimento',
    //   description: "Em desenvolvimento",
    //   imgSrc: 'assets/projects/animaisfantasticos.jpg',
    //   videoSrc: 'https://streamable.com/e/5ugnu0',
    //   linkedin: 'https://www.linkedin.com/posts/rhuanbello_desenvolvimento-ui-starwars-activity-6818976321042038784-FPYl',
    //   repository: 'https://github.com/rhuanbello/animais-fantasticos',
    //   site: 'https://animaisfantasticos.vercel.app/'
    // },
    // {
    //   id: 15,
    //   type: 1,
    //   title: 'Brafé',
    //   date: '07 de Agosto de 2021',
    //   languages: ['html', 'css'],
    //   description: "Projeto desenvolvido durante o curso de CSS Avançado da Origamid, com duração de 9 horas. <br><br> Ao longo do curso colocamos em prática de forma exaustiva os principais métodos de posicionamento no CSS, desenvolvendo a mesma página de quatro formas diferentes.",
    //   imgSrc: 'assets/projects/brafe.jpg',
    //   videoSrc: 'https://streamable.com/e/wkskpg',
    //   linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-bootstrap-activity-6829784614278713344-j3x8',
    //   repository: 'https://github.com/rhuanbello/brafe',
    //   site: 'https://brafe-rhuanbello.vercel.app/'
    // },
    // {
    //   id: 16,
    //   type: 1,
    //   title: 'Bikcraft',
    //   date: '15 de Junho de 2021',
    //   languages: ['html', 'sass', 'figma', 'javascript'],
    //   description: "Projeto final do ótimo curso de Web Design Completo da Origamid, onde tive a oportunidade de desenvolver do wireframe ao código o projeto Bikcraft, colocando em prática todos os conteúdos teóricos apresentados no curso, como: UX/UI Design, Adobe XD, Semântica, SEO, Grid, Reset, Responsividade, Animações, Domínio, hospedagem e muito mais.",
    //   imgSrc: 'assets/projects/bikcraft.jpg',
    //   videoSrc: 'https://streamable.com/e/rtxzgb',
    //   linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6810692015794331648-f2UO',
    //   repository: 'https://github.com/rhuanbello/bikcraft',
    //   site: 'https://rhuanbello.github.io/bikcraft/'
    // },
    // {
    //   id: 17,
    //   type: 1,
    //   title: 'Flexblog',
    //   date: '17 de Junho de 2021',
    //   languages: ['html', 'css'],
    //   description: "Projeto final do curso de CSS FlexBox da Origamid, um layout que te facilita bastante na hora definir o tamanho e o alinhamento (vertical e horizontal) de itens. <br><br> Apesar de ser uma página simples, ela engloba as mais importantes propriedades do CSS FlexBox, como o Display Flex, Flex Wrap, Justify Content, Flex Basis, etc. Sendo assim, depois de alguns pequenos ajustes, a página já se torna completamente responsiva, pois o FlexBox é um layout bastante inteligente por si só.",
    //   imgSrc: 'assets/projects/flexblog.jpg',
    //   videoSrc: 'https://streamable.com/e/d3c1bk',
    //   linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6811412518758707200-jcJ8',
    //   repository: 'https://github.com/rhuanbello/flexblog',
    //   site: 'https://rhuanbello.github.io/flexblog/'
    // },
    // {
    //   id: 18,
    //   type: 1,
    //   title: 'Le Scone',
    //   date: '01 de Outubro de 2021',
    //   languages: ['html', 'css'],
    //   description: "Projeto desenvolvido durante o curso de CSS com SASS da Origamid.",
    //   imgSrc: 'assets/projects/lescone.jpg',
    //   videoSrc: 'https://streamable.com/e/ajfxe4',
    //   linkedin: '',
    //   repository: 'https://github.com/rhuanbello/lesconde',
    //   site: 'https://lesconde-rhuanbello.vercel.app/'

    // },
    // {
    //   id: 19,
    //   type: 1,
    //   title: 'Wildbeast',
    //   date: '09 de Julho de 2021',
    //   languages: ['html', 'css'],
    //   description: "Projeto de mais um curso da Origamid, dessa vez sobre CSS Grid Layout, que sinceramente é uma mão na roda. Nunca foi tão fácil mudar totalmente a composição de um site, você literalmente pode fazer isso com uma linha de código. Após conhecer todos os conceitos dessa especificação (como o Grid Template Columns, Rows, Areas e Auto) foi desenvolvido o site Wildbeast para fixar na prática todo o aprendizado.",
    //   imgSrc: 'assets/projects/wildbeast.jpg',
    //   videoSrc: 'https://streamable.com/e/dyan89',
    //   linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6819437498171822080-BTlV',
    //   repository: 'https://github.com/rhuanbello/wildbeast',
    //   site: 'https://rhuanbello.github.io/wildbeast/'
    // }
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<ion-icon name="logo-${language}"></ion-icon>
                `)}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html5'
    },
    {
      name: 'CSS3',
      src: 'css3'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    // {
    //   name: 'TypeScript',
    //   src: 'typescript'
    // },
    {
      name: 'React.js',
      src: 'react'
    },
    // {
    //   name: 'Next.js',
    //   src: 'nextjs'
    // },
    // {
    //   name: 'CSS-in-JS',
    //   src: 'styledcomponents'
    // },
    // {
    //   name: 'Material UI',
    //   src: 'materialui'
    // },
    // {
    //   name: 'Tailwind CSS',
    //   src: 'tailwindcss'
    // },
    // {
    //   name: 'GraphQL',
    //   src: 'graphql'
    // },
    // {
    //   name: 'Apollo',
    //   src: 'apollo'
    // },
    // {
    //   name: 'Redux',
    //   src: 'redux'
    // },
    // {
    //   name: 'React Query',
    //   src: 'reactquery'
    // },
    // {
    //   name: 'React Testing',
    //   src: 'testing'
    // },
    // {
    //   name: 'Strapi',
    //   src: 'strapi'
    // },
    // {
    //   name: 'Storybook',
    //   src: 'storybook'
    // },
    // {
    //   name: 'SASS',
    //   src: 'sass'
    // },
     {
      name: 'Node.js',
      src: 'nodejs'
    },
    {
      name: 'Python',
      src: 'python'
    },
    {
      name: 'NPM',
      src: 'npm'
    },
       {
      name: 'GITHUB',
      src: 'github'
    },
       {
      name: 'Slack',
      src: 'slack'
    },
    {
      name: 'Figma',
      src: 'figma'
    }
  ]

  // cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
  //   <div class="box" key="${index}">
  //     <p>${name}</p>
  //     <img src="assets/languages/${src}.svg" alt="html">
  //   </div>
  // `).join('')
  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
  <div class="box" key="${index}">
    <p>${name}</p>
    <ion-icon name="logo-${src}"></ion-icon>

  </div>
`).join('')
}

{/* <i class="fa-brands fa-${src}"></i> */}
{/* <i class="fi fi-brands-${src}"></i> */}


const addData = ({ title, description, date, site, repository, linkedin, videoSrc }) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('transparent')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  // modalLinkRepository.setAttribute('href', repository)
  // modalLinkLinkedin.setAttribute('href', linkedin)
  iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop=0')

}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent')
  iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();