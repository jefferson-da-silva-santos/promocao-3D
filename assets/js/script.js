const arrOption = [
  {
    id: 'm1',
    title: 'Prejudica a saúde do doador',
    text: 'Mito, pois a doação de sangue não prejudica a saúde do doador. Apenas cerca de 10% do sangue é retirado, e o corpo o repõe rapidamente. O processo é seguro, realizado com materiais descartáveis, e a triagem garante que o doador está saudável. Além disso, a prática oferece monitoramento de saúde e não traz.',
    src: 'assets/image/pessoa feliz doando sangue.webp'
  },
  {
    id: 'm2',
    title: 'Apenas maiores de 18 podem doar',
    text: 'Mito, pois no Brasil, a doação de sangue é permitida para pessoas entre 16 e 69 anos, desde que atendam a alguns critérios de saúde e peso mínimo (50 kg). No caso de menores de idade (16 e 17 anos), é necessário ter autorização dos responsáveis legais.',
    src: 'assets/image/jovem18.webp'
  },
  {
    id: 'm3',
    title: 'Quem teve dengue não pode doar',
    text: 'Mito, pois quem teve dengue pode doar sangue após a recuperação. Em casos leves, é preciso esperar 30 dias. Para dengue grave, o prazo pode ser maior, com avaliação médica. A restrição é temporária e visa garantir a segurança do doador e do receptor​​.',
    src: 'assets/image/senhora.webp'
  },
  {
    id: 'm4',
    title: 'Não pode doar durante o período menstrual',
    text: 'É mito que mulheres não podem doar sangue durante a menstruação. Esse período não é um impedimento, desde que a mulher esteja saudável, sem anemia e se sentindo bem. Só deve evitar doar se houver fluxo muito intenso ou sintomas como tontura, fraqueza e cansaço.',
    src: 'assets/image/adolescente.webp'
  },
  {
    id: 'm5',
    title: 'Quem tem piercing e tatuagens não pode doar',
    text: 'Mito, pois quem tem tatuagens ou piercings podem sim doar sangue. A doação é permitida após um prazo de 12 meses da última tatuagem ou piercing. Se o piercing estiver em locais como boca ou genitais, é preciso removê-lo e aguardar o mesmo período.',
    src: 'assets/image/jovem-tatuada.webp'
  },
  {
    id: 'm6',
    title: 'Doar sangue engorda',
    text: 'Mito, pois doar sangue não engorda. A doação de sangue não altera o metabolismo e não interfere no ganho ou perda de peso. O corpo apenas trabalha para repor o sangue doado, o que pode gerar sensação de fome em algumas pessoas, mas isso não causa aumento de peso. Essa ideia equivocada surge porque o corpo precisa de energia para repor o volume sanguíneo doado, o que pode provocar uma leve fome, mas não altera o metabolismo de forma relevante.',
    src: 'assets/image/gordinho.webp'
  }
]

let isMenuVisible = false;

document.addEventListener('DOMContentLoaded', () => {
  const boxVideo = getElement('.video');
  const arrButtonsOption = Array.from(getElement('.btn-mapa', true));

  if (boxVideo) {
    boxVideo.addEventListener('click', () => {
      handlerClickBoxVideo(boxVideo);
    });
  }


  // menu
  const btnMenu = getElement('.menu-btn');
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      openCloseMenu(isMenuVisible);
    })
  }

  window.addEventListener('resize', () => {
    const largura = window.innerWidth;

    if (largura > 1000) {
      const listMenu = getElement('.navbar__list');
      listMenu.style.display = 'flex';
      btnMenu.setAttribute('src', 'assets/image/menu-humburguer.png');
      isMenuVisible = true;
    } else {
      const listMenu = getElement('.navbar__list');
      listMenu.style.display = 'none';
      btnMenu.setAttribute('src', 'assets/image/menu-humburguer.png');
      isMenuVisible = false;
    }
  });

  // Observações
  criarObservacao('.hide-1', 'show');
  criarObservacao('.hide-2', 'show-2');

  arrButtonsOption.forEach(button => {
    button.addEventListener('click', () => {
      const currentClass = button.classList[2];
      openCloseOption(true, currentClass);
    })
  })

  const btnCloseOption = getElement('.btn-close-option');
  if (btnCloseOption) {
    btnCloseOption.addEventListener('click', event => {
      event.preventDefault();
      openCloseOption(false);
    })
  }
});

// Função responsável por abrir e fechar option
function openCloseOption(open = true, currentClassButton = '') {
  const option = getElement('.conatiner-option');
  const objeAtual = arrOption.find(item => item.id === currentClassButton);
  const title = getElement('.option--primary__title');
  const text = getElement('.option--primary__text');
  const image = getElement('.option--secundary__img');

  option.style.display = open ? 'flex' : 'none';
  title.textContent = open ? objeAtual.title : '';
  text.textContent = open ? objeAtual.text : '';
  image.setAttribute('src', open ? objeAtual.src : '');
}



// Função responsável por fechar o menu
function openCloseMenu(visible) {
  const btnMenu = getElement('.menu-btn');
  const listMenu = getElement('.navbar__list');
  listMenu.style.display = visible ? 'none' : 'flex';
  btnMenu.setAttribute('src', visible ? 'assets/image/menu-humburguer.png' : 'assets/image/cross.png');
  isMenuVisible = toggleVariable(isMenuVisible);
}

// Função para adicionar e remover o frame do vídeo ao box
function handlerClickBoxVideo(box, frame = true) {
  box.innerHTML = frame
    ? `<iframe 
        allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" 
        src="https://www.youtube.com/embed/iZwb0yh2klk?autoplay=1&si=Qhwv_mt5CqlOvGBr" 
        title="YouTube video player" 
        frameborder="0" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>`
    : `<div class="video__play">
        <img class="video__icon" src="assets/image/botao-play.png" alt="Play button" />
      </div>`;
}

// Função de alternar valores booleanos de variáveis
function toggleVariable(variable) {
  return !variable;
}

//Função de selecionar elementos por classe
function getElement(clss, multiple = false) {
  return multiple ? document.querySelectorAll(clss) :
    document.querySelector(clss);
}

//Função responsável por aplicar animações com quando os elementos estão observáveis
// Uso:
/*
  criarObservacao('.hide-1', 'show-1');
  criarObservacao('.hide-2', 'show-2');
  criarObservacao('.hide-2-1', 'show-2-1');
  criarObservacao('.hide-2-2', 'show-2-2');
  criarObservacao('.hide-3-1', 'show-3-1');
*/
function criarObservacao(classeOculta, classeMostrar) {
  const observacao = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(classeMostrar);
      } else {
        return;
      }
    });
  });

  const elementosOcultos = document.querySelectorAll(classeOculta);
  elementosOcultos.forEach((element) => observacao.observe(element));
}
