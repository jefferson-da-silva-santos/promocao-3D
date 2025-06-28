
const arrOption = [
  {
    id: "m1",
    title: "Prejudica a saúde do doador",
    text: "Mito, pois a doação de sangue não prejudica a saúde do doador. Apenas cerca de 10% do sangue é retirado, e o corpo o repõe rapidamente. O processo é seguro, realizado com materiais descartáveis, e a triagem garante que o doador está saudável. Além disso, a prática oferece monitoramento de saúde e não traz.",
    src: "assets/image/pessoa feliz doando sangue.webp",
  },
  {
    id: "m2",
    title: "Apenas maiores de 18 podem doar",
    text: "Mito, pois no Brasil, a doação de sangue é permitida para pessoas entre 16 e 69 anos, desde que atendam a alguns critérios de saúde e peso mínimo (50 kg). No caso de menores de idade (16 e 17 anos), é necessário ter autorização dos responsáveis legais.",
    src: "assets/image/jovem18.webp",
  },
  {
    id: "m3",
    title: "Quem teve dengue não pode doar",
    text: "Mito, pois quem teve dengue pode doar sangue após a recuperação. Em casos leves, é preciso esperar 30 dias. Para dengue grave, o prazo pode ser maior, com avaliação médica. A restrição é temporária e visa garantir a segurança do doador e do receptor​​.",
    src: "assets/image/senhora.webp",
  },
  {
    id: "m4",
    title: "Não pode doar durante o período menstrual",
    text: "É mito que mulheres não podem doar sangue durante a menstruação. Esse período não é um impedimento, desde que a mulher esteja saudável, sem anemia e se sentindo bem. Só deve evitar doar se houver fluxo muito intenso ou sintomas como tontura, fraqueza e cansaço.",
    src: "assets/image/adolescente.webp",
  },
  {
    id: "m5",
    title: "Quem tem piercing e tatuagens não pode doar",
    text: "Mito, pois quem tem tatuagens ou piercings podem sim doar sangue. A doação é permitida após um prazo de 12 meses da última tatuagem ou piercing. Se o piercing estiver em locais como boca ou genitais, é preciso removê-lo e aguardar o mesmo período.",
    src: "assets/image/jovem-tatuada.webp",
  },
  {
    id: "m6",
    title: "Doar sangue engorda",
    text: "Mito, pois doar sangue não engorda. A doação de sangue não interfere no metabolismo nem no ganho de peso. O corpo trabalha apenas para repor o sangue doado, o que pode gerar uma leve sensação de fome, mas isso não altera o metabolismo de forma significativa.",
    src: "assets/image/gordinho.webp",
  },
  {
    id: "m7",
    title: "Medo de agulhas",
    text: "A fobia de agulhas é um dos principais motivos que afastam doadores. Esse medo pode surgir de experiências traumáticas ou associadas à dor. É importante reforçar que as agulhas utilizadas são específicas e seguras, causando apenas um leve incômodo. Técnicas de relaxamento e apoio emocional podem ajudar a superar esse receio.",
    src: "assets/image/medo agulha.webp",
  },
  {
    id: "m8",
    title: "Medo de dor",
    text: "Muitas pessoas acreditam que a doação de sangue será extremamente dolorosa, o que não é verdade. A picada da agulha é rápida e comparável a um pequeno beliscão. O desconforto geralmente dura poucos segundos, e a equipe médica está preparada para garantir o máximo de conforto. Após a coleta, a maioria dos doadores relata sensação tranquila.",
    src: "assets/image/medo dor.webp",
  },
  {
    id: "m9",
    title: "Medo de tontura e náuseas",
    text: "Alguns doadores temem se sentir mal após a doação, como tonturas ou náuseas. Esses sintomas são raros e, quando ocorrem, geralmente estão relacionados à falta de hidratação ou jejum. Para evitar desconforto, é importante se alimentar bem e beber bastante líquido antes da doação. O descanso após o procedimento também ajuda a prevenir esses efeitos.",
    src: "assets/image/tontura.webp",
  },
  {
    id: "m10",
    title: "Medo de ver sangue",
    text: "Ver o próprio sangue pode causar ansiedade e até mal-estar em algumas pessoas. No entanto, durante a doação, não é necessário observar o processo, e a equipe pode distrair o doador com conversa ou música. Evitar focar na coleta e concentrar-se em pensamentos positivos são estratégias que ajudam a lidar com esse medo.",
    src: "assets/image/ver-sangue.webp",
  },
  {
    id: "m11",
    title: "Medo de centros e hospitais",
    text: "Ambientes hospitalares podem despertar desconforto em alguns indivíduos devido a associações negativas com doenças. Os centros de coleta de sangue são diferentes, sendo locais acolhedores e organizados para transmitir segurança. Conhecer o espaço previamente e ser bem recepcionado pela equipe ajuda a reduzir essa ansiedade.",
    src: "assets/image/hospitais.webp",
  },
  {
    id: "m12",
    title: "Medo de pegar doença",
    text: "Um dos mitos mais prejudiciais é o de que é possível contrair doenças ao doar sangue. No entanto, todo o material utilizado é esterilizado e descartável, garantindo total segurança. Os protocolos seguem rigorosos padrões de saúde, e não há nenhum risco de contaminação. Esclarecer essa questão é essencial para tranquilizar os doadores​​.",
    src: "assets/image/doencas.webp",
  },
  {
    id: "m13",
    title: "Leite é fraco",
    text: "Mito, pois o leite materno tem todos os nutrientes necessários para o desenvolvimento do bebê, independentemente de sua aparência mais rala. Sua composição é equilibrada, contendo proteínas, gorduras, vitaminas e anticorpos essenciais para a saúde da criança.",
    src: "assets/image/leite fraco.webp",
  },
  {
    id: "m14",
    title: "Só podem doar grandes quantidades",
    text: "Mito, pois qualquer quantidade de leite doado é importante, até mesmo 1 ml pode salvar a vida de um recém-nascido prematuro. Os Bancos de Leite Humano aceitam doações pequenas, valorizando cada contribuição para ajudar bebês em estado crítico.",
    src: "assets/image/leite doado.webp",
  },
  {
    id: "m15",
    title: "Mães podem amamentar outras crianças",
    text: "Mito, pois a amamentação cruzada (sem controle dos Bancos de Leite) pode transmitir doenças. A doação segura é feita por meio dos Bancos de Leite Humano, onde o leite é pasteurizado e distribuído de forma controlada para os bebês que mais precisam.",
    src: "assets/image/amamentar outras.webp",
  },
  {
    id: "m16",
    title: "Leite insuficiente",
    text: 'Mito, pois a produção de leite é estimulada pela sucção do bebê e pela regularidade das mamadas. Na maioria dos casos, a percepção de "leite insuficiente" é equivocada, e o apoio correto pode ajudar a manter a produção adequada.',
    src: "assets/image/insulficiente.webp",
  },
  {
    id: "m17",
    title: "O bebê não quis pegar o peito",
    text: "Mito, pois a recusa temporária do peito pode ocorrer por diversos fatores, como mudanças na rotina, estresse ou confusão de bicos. Ajustes no ambiente e orientação adequada ajudam a superar essas dificuldades, garantindo a continuidade da amamentação.",
    src: "assets/image/pegar peito.webp",
  },
  {
    id: "m18",
    title: "Seios caem com a lactação",
    text: "Mito, pois o que provoca a flacidez dos seios é a genética, o envelhecimento e fatores como o ganho de peso, não a amamentação. Pelo contrário, o ato de amamentar traz benefícios à saúde da mulher, reduzindo o risco de câncer de mama e ovário​​.",
    src: "assets/image/seios caem.webp",
  },
  {
    id: "m19",
    title: "Órgãos podem ser vendidos após a morte do meu familiar",
    text: "Mito, pois o processo de doação é rigorosamente regulamentado por lei e fiscalizado por autoridades de saúde, garantindo segurança e ética.",
    src: "assets/image/imagemTecidos-1.webp",
  },
  {
    id: "m20",
    title: "Idosos não podem doar",
    text: "Mito, pois a idade não é fator impeditivo para a doação; o que importa é a condição de saúde do órgão no momento da doação.",
    src: "assets/image/imagemTecidos-2.webp",
  },
  {
    id: "m21",
    title: "Confundir morte encefálica com o estado de coma",
    text: "Mito, pois morte encefálica é irreversível, enquanto o coma é um estado em que há possibilidade de recuperação, conforme critérios médicos.",
    src: "assets/image/imagemTecidos-3.webp",
  },
  {
    id: "m22",
    title: "É necessário custo para doação",
    text: "Mito, pois todos os procedimentos relacionados à doação e ao transplante são gratuitos e custeados pelo sistema público de saúde.",
    src: "assets/image/imagemTecidos-4.webp",
  },
  {
    id: "m23",
    title: "Preferência na fila de espera",
    text: "Mito, pois a fila é única e regulamentada por critérios técnicos de compatibilidade e urgência, sem qualquer privilégio pessoal.",
    src: "assets/image/imagemTecidos-5.webp",
  },
  {
    id: "m24",
    title: "Doação desfigura o corpo",
    text: "Mito, pois os procedimentos são realizados com respeito ao corpo, preservando sua aparência, garantindo dignidade e respeito à família.",
    src: "assets/image/imagemTecidos-6.webp",
  },

  {
    id: "m25",
    title:
      "Se estiver internado posso correr risco de morrer para que ocorra a doação de órgãos",
    text: "Mito, pois a prioridade de médicos e hospitais é salvar vidas, e a doação só é considerada após o diagnóstico de morte encefálica.",
    src: "assets/image/imagemTecidos-7.webp",
  },
  {
    id: "m26",
    title: "Pessoas com histórico de doenças não podem fazer doação",
    text: "Mito, pois cada caso é avaliado individualmente, e algumas doenças não impedem a doação, dependendo da saúde do órgão.",
    src: "assets/image/imagemTecidos-8.webp",
  },
];

// Constantes para seletores e classes CSS, tornando o código mais legível e fácil de manter.
const SELECTORS = {
  MENU_BUTTON: ".menu-btn",
  NAV_LIST: ".navbar__list",
  MAP_BUTTONS: ".btn-mapa",
  CLOSE_OPTION_BUTTON: ".btn-close-option",
  VIDEO_1_BUTTON: ".btn-video-1",
  VIDEO_2_BUTTON: ".btn-video-2",
  GAME_GALLERY: ".galeria-jogo-da-vida",
  BOARD_GAME_BUTTON: ".btnTabuleiro",
  MEMORY_GAME_BUTTON: ".btnMemoria",
  AUDIENCE_VIDEO_IFRAME: ".video-audiencia",
  AUDIENCE_PREV_BUTTON: ".btn-audience-prev",
  AUDIENCE_NEXT_BUTTON: ".btn-audience-next",
  VIDEO_CONTAINER: ".video",
  VIDEO_DESCRIPTION: ".resultados__content__section--secundary__text",
  MAP_IMAGE: ".img-mapa",
  GAME_BUTTONS: ".btn-jogo-da-vida",
  OPTION_CONTAINER: ".conatiner-option",
  OPTION_TITLE: ".option--primary__title",
  OPTION_TEXT: ".option--primary__text",
  OPTION_IMAGE: ".option--secundary__img",
  HIDE_1: ".hide-1",
  HIDE_2: ".hide-2",
  BTN_MAPA_7: ".btn-mapa-7",
  BTN_MAPA_8: ".btn-mapa-8",
  BTN_MAPA_6: ".btn-mapa-6",
};

const CLASSES = {
  ACTIVE: "active",
  SHOW: "show",
  SHOW_2: "show-2",
};

const IMAGE_PATHS = {
  MENU_HAMBURGER: "assets/image/menu-humburguer.png",
  MENU_CROSS: "assets/image/cross.png",
  MAP_MYTHS_BLOOD: "assets/image/mapa mitos doacao de sangue.jpeg",
  MAP_FEARS_BLOOD: "assets/image/mapa medos doacao de sangue.jpeg",
  MAP_MYTHS_MILK: "assets/image/mapa mitos doacao de leite materno.jpeg",
  MAP_MYTHS_ORGANS: "assets/image/mapa mitos doação de tecidos.jpeg",
  GAME_BOARD_1: "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/Promocao3D/jogos/tabuleiro%20da%20vida/tabuleiro.jpeg",
  GAME_BOARD_2: "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/Promocao3D/jogos/tabuleiro%20da%20vida/tab1.jpeg",
  GAME_BOARD_3: "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/Promocao3D/jogos/tabuleiro%20da%20vida/tabu2.jpeg",
  GAME_BOARD_4: "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/Promocao3D/jogos/tabuleiro%20da%20vida/tabu3.jpeg",
  GAME_MEMORY_1: "https://raw.githubusercontent.com/jefferson-da-silva-santos/imagens-projetos/refs/heads/main/Promocao3D/jogos/memoria%20da%20vida/memoria.jpeg",
};

const VIDEO_PATHS = {
  YOUTUBE_0: "https://www.youtube.com/embed/cgEkDVPqyYU?si=KLzojCjdG_lIBrxb",
  YOUTUBE_1: "https://www.youtube.com/embed/QuJeJ8jG4Jo",
  YOUTUBE_2: "https://www.youtube.com/embed/iZwb0yh2klk?si=Qhwv_mt5CqlOvGBr",
  LOCAL_VIDEO: "./assets/video/video-pro.mp4",
};

const VIDEO_DESCRIPTIONS = {
  PRIMARY: `PL110/2024, Deputado Federal Eduardo da Fonte, Institui o Programa de Ensino e Conscientização sobre Doação de Sangue, Doação de Órgãos/Tecidos e Doação de Leite Materno – Promoção 3D no currículo escolar e acadêmico brasileiro.`,
  SECONDARY: `Dr. e Vereador Cristiano Teixeira Dantas, durante a sessão aprensenta PROJETO DE LEI 004/2024, Com o objetivo de istituir a Política de Conscientização e Incentivo da Doação de Sangue, Órgãos, Tecidos Leite Materno - Promoção 3D, no Município de Custódia.`,
};

// Variáveis de estado global (minimizar o uso, mas são necessárias para este contexto)
let isMenuVisible = false;
let isPrimaryVideoVisible = false;
let isSecondaryVideoVisible = false;

/**
 * Retorna um elemento ou uma lista de elementos do DOM.
 * @param {string} selector O seletor CSS do elemento.
 * @param {boolean} multiple Se true, retorna todos os elementos correspondentes.
 * @returns {Element|NodeList|null} O(s) elemento(s) encontrado(s) ou null.
 */
function getElement(selector, multiple = false) {
  return multiple ? document.querySelectorAll(selector) : document.querySelector(selector);
}

/**
 * Alterna um valor booleano.
 * @param {boolean} value O valor booleano a ser alternado.
 * @returns {boolean} O valor booleano invertido.
 */
function toggleBoolean(value) {
  return !value;
}

/**
 * Manipula a abertura e fechamento do menu de navegação.
 */
function toggleMenu() {
  const btnMenu = getElement(SELECTORS.MENU_BUTTON);
  const navList = getElement(SELECTORS.NAV_LIST);

  if (!btnMenu || !navList) return;

  isMenuVisible = toggleBoolean(isMenuVisible);
  navList.style.display = isMenuVisible ? "flex" : "none";
  btnMenu.setAttribute("src", isMenuVisible ? IMAGE_PATHS.MENU_CROSS : IMAGE_PATHS.MENU_HAMBURGER);
}

/**
 * Ajusta a visibilidade do menu com base na largura da janela.
 */
function handleMenuResize() {
  const width = window.innerWidth;
  const navList = getElement(SELECTORS.NAV_LIST);
  const btnMenu = getElement(SELECTORS.MENU_BUTTON);

  if (!navList || !btnMenu) return;

  if (width > 1000) {
    navList.style.display = "flex";
    btnMenu.setAttribute("src", IMAGE_PATHS.MENU_HAMBURGER);
    isMenuVisible = true;
  } else {
    navList.style.display = "none";
    btnMenu.setAttribute("src", IMAGE_PATHS.MENU_HAMBURGER);
    isMenuVisible = false;
  }
}

/**
 * Adiciona a classe 'active' ao botão clicado e remove de outros botões fornecidos.
 * @param {HTMLElement} currentButton O botão atualmente clicado.
 * @param {string[]} otherButtonSelectors Seletores CSS de outros botões para remover a classe 'active'.
 */
function setActiveButton(currentButton, otherButtonSelectors) {
  currentButton.classList.add(CLASSES.ACTIVE);
  otherButtonSelectors.forEach((selector) => {
    const element = getElement(selector);
    if (element) {
      element.classList.remove(CLASSES.ACTIVE);
    }
  });
}

/**
 * Altera a imagem principal do mapa e as classes dos botões do mapa.
 * @param {string} imageSrc O caminho da nova imagem.
 * @param {string[]} newButtonClasses As novas classes CSS para os botões do mapa.
 */
function updateMapContent(imageSrc, newButtonClasses) {
  const mapImage = getElement(SELECTORS.MAP_IMAGE);
  const mapButtons = getElement(SELECTORS.MAP_BUTTONS, true);

  if (!mapImage || !mapButtons) return;

  mapImage.setAttribute("src", imageSrc);
  mapButtons.forEach((button, index) => {
    if (newButtonClasses[index]) {
      // Remove a terceira classe (índice 2) e adiciona a nova
      const currentClass = button.classList[2];
      if (currentClass) {
        button.classList.remove(currentClass);
      }
      button.classList.add(newButtonClasses[index]);
    }
  });
}

/**
 * Controla a visibilidade de botões específicos do mapa.
 * @param {boolean} show Se true, exibe os botões; caso contrário, os oculta.
 */
function toggleMapButtonsVisibility(show) {
  const btn7 = getElement(SELECTORS.BTN_MAPA_7);
  const btn8 = getElement(SELECTORS.BTN_MAPA_8);
  const btn6 = getElement(SELECTORS.BTN_MAPA_6);

  if (!btn7 || !btn8 || !btn6) return;

  btn7.style.display = show ? "inline-block" : "none";
  btn8.style.display = show ? "inline-block" : "none";
  btn6.style.top = show ? "6%" : "20%";
  btn6.style.left = show ? "5%" : "7%";
}

/**
 * Remove a classe 'active' de todos os botões do jogo da vida.
 */
function removeGameButtonActiveClass() {
  const buttons = getElement(SELECTORS.GAME_BUTTONS, true);
  if (buttons) {
    buttons.forEach((button) => {
      button.classList.remove(CLASSES.ACTIVE);
    });
  }
}

/**
 * Carrega uma imagem de forma assíncrona.
 * @param {string} src O caminho da imagem.
 * @returns {Promise<Event>} Uma Promise que resolve quando a imagem é carregada.
 */
function loadImageAsync(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Manipula a exibição e o conteúdo da seção de opções.
 * @param {boolean} open Se true, abre a opção; caso contrário, a fecha.
 * @param {string} [currentClassButton=""] A classe do botão que acionou a abertura (usada para buscar dados da opção).
 */
async function toggleOptionDisplay(open = true, currentClassButton = "") {
  const optionContainer = getElement(SELECTORS.OPTION_CONTAINER);
  const optionTitle = getElement(SELECTORS.OPTION_TITLE);
  const optionText = getElement(SELECTORS.OPTION_TEXT);
  const optionImage = getElement(SELECTORS.OPTION_IMAGE);

  if (!optionContainer || !optionTitle || !optionText || !optionImage || typeof arrOption === 'undefined') return;

  const currentOption = arrOption.find((item) => item.id === currentClassButton);

  if (open && currentOption) {
    optionContainer.style.display = "flex";
    optionTitle.textContent = currentOption.title;
    optionText.textContent = currentOption.text;
    await loadImageAsync(currentOption.src); // Espera a imagem carregar
    optionImage.setAttribute("src", currentOption.src);
  } else {
    optionContainer.style.display = "none";
    optionTitle.textContent = "";
    optionText.textContent = "";
    optionImage.setAttribute("src", "");
  }
}

/**
 * Gerencia a exibição de vídeos e suas descrições.
 * @param {number} videoType O tipo de vídeo a ser exibido (1 para primário, 2 para secundário).
 */
function handleVideoDisplay(videoType = 1) {
  const videoContainer = getElement(SELECTORS.VIDEO_CONTAINER);
  const videoDescription = getElement(SELECTORS.VIDEO_DESCRIPTION);

  if (!videoContainer || !videoDescription) return;

  if (videoType === 1 && !isPrimaryVideoVisible) {
    videoContainer.innerHTML = `<iframe allow="encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
        src="${VIDEO_PATHS.YOUTUBE_2}"
        title="YouTube video player"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>`;
    videoDescription.textContent = VIDEO_DESCRIPTIONS.PRIMARY;
    isPrimaryVideoVisible = true;
    isSecondaryVideoVisible = false;
  } else if (videoType === 2 && !isSecondaryVideoVisible) {
    videoContainer.innerHTML = `<video width="100%" height="360" controls>
          <source src="${VIDEO_PATHS.LOCAL_VIDEO}" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>`;
    isSecondaryVideoVisible = true;
    isPrimaryVideoVisible = false;
    videoDescription.textContent = VIDEO_DESCRIPTIONS.SECONDARY;
  }
}

/**
 * Cria observadores de interseção para aplicar classes quando os elementos se tornam visíveis.
 * @param {string} hiddenClass O seletor da classe dos elementos a serem observados.
 * @param {string} showClass A classe a ser adicionada quando o elemento é visível.
 */
function createIntersectionObserver(hiddenClass, showClass) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(showClass);
        // Opcional: desconectar o observador após a primeira interseção se a animação for única
        // observer.unobserve(entry.target);
      }
    });
  });

  const hiddenElements = getElement(hiddenClass, true);
  if (hiddenElements) {
    hiddenElements.forEach((element) => observer.observe(element));
  }
}

/**
 * Lida com o carregamento do conteúdo da galeria de jogos.
 * @param {string} gameType O tipo de jogo a ser carregado ('board' ou 'memory').
 */
function loadGameGallery(gameType) {
  const galleryContainer = getElement(SELECTORS.GAME_GALLERY);
  if (!galleryContainer) return;

  removeGameButtonActiveClass();

  if (gameType === 'board') {
    getElement(SELECTORS.BOARD_GAME_BUTTON)?.classList.add(CLASSES.ACTIVE);
    galleryContainer.innerHTML = `
      <div class="${SELECTORS.GAME_GALLERY.substring(1)}">
        <img class="img-jogo-da-vida" src="${IMAGE_PATHS.GAME_BOARD_1}" alt="Tabuleiro da Vida">
        <img class="img-jogo-da-vida" src="${IMAGE_PATHS.GAME_BOARD_2}" alt="Tabuleiro da Vida">
        <img class="img-jogo-da-vida" src="${IMAGE_PATHS.GAME_BOARD_3}" alt="Tabuleiro da Vida">
        <img class="img-jogo-da-vida" src="${IMAGE_PATHS.GAME_BOARD_4}" alt="Tabuleiro da Vida">
      </div>`;
  } else if (gameType === 'memory') {
    getElement(SELECTORS.MEMORY_GAME_BUTTON)?.classList.add(CLASSES.ACTIVE);
    galleryContainer.innerHTML = `
      <div class="${SELECTORS.GAME_GALLERY.substring(1)}">
        <img class="img-jogo-da-vida" src="${IMAGE_PATHS.GAME_MEMORY_1}" alt="Memória da Vida">
      </div>`;
  }
}


// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  // Menu
  const btnMenu = getElement(SELECTORS.MENU_BUTTON);
  btnMenu?.addEventListener("click", toggleMenu);
  window.addEventListener("resize", handleMenuResize);

  // Observações
  createIntersectionObserver(SELECTORS.HIDE_1, CLASSES.SHOW);
  createIntersectionObserver(SELECTORS.HIDE_2, CLASSES.SHOW_2);

  // Botões de opção do mapa
  const mapButtons = getElement(SELECTORS.MAP_BUTTONS, true);
  mapButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentClass = button.classList[2]; // Assumindo que a classe relevante está sempre na 3ª posição
      toggleOptionDisplay(true, currentClass);
    });
  });

  const btnCloseOption = getElement(SELECTORS.CLOSE_OPTION_BUTTON);
  btnCloseOption?.addEventListener("click", (event) => {
    event.preventDefault();
    toggleOptionDisplay(false);
  });

  // Botões de categorias do mapa (Mitos, Medos, Leite, Órgãos)
  const mapCategoryButtons = [
    {
      selector: ".btn-01",
      image: IMAGE_PATHS.MAP_MYTHS_BLOOD,
      classes: ["m1", "m2", "m3", "m4", "m5", "m6"],
      others: [".btn-02", ".btn-03", ".btn-04"],
      hide: false
    },
    {
      selector: ".btn-02",
      image: IMAGE_PATHS.MAP_FEARS_BLOOD,
      classes: ["m7", "m8", "m9", "m10", "m11", "m12"],
      others: [".btn-03", ".btn-01", ".btn-04"],
      hide: false
    },
    {
      selector: ".btn-03",
      image: IMAGE_PATHS.MAP_MYTHS_MILK,
      classes: ["m13", "m14", "m15", "m16", "m17", "m18"],
      others: [".btn-02", ".btn-01", ".btn-04"],
      hide: false
    },
    {
      selector: ".btn-04",
      image: IMAGE_PATHS.MAP_MYTHS_ORGANS,
      classes: ["m19", "m20", "m22", "m23", "m24", "m26"], // M21, M25 missing?
      others: [".btn-02", ".btn-01", ".btn-03"],
      hide: true
    },
  ];

  mapCategoryButtons.forEach(btnConfig => {
    const button = getElement(btnConfig.selector);
    button?.addEventListener("click", () => {
      updateMapContent(btnConfig.image, btnConfig.classes);
      setActiveButton(button, btnConfig.others);
      toggleMapButtonsVisibility(btnConfig.hide);
    });
  });


  // Botões de vídeo
  getElement(SELECTORS.VIDEO_1_BUTTON)?.addEventListener("click", () => handleVideoDisplay(1));
  getElement(SELECTORS.VIDEO_2_BUTTON)?.addEventListener("click", () => handleVideoDisplay(2));

  // Lógica da galeria dos jogos da vida
  getElement(SELECTORS.BOARD_GAME_BUTTON)?.addEventListener("click", () => loadGameGallery('board'));
  getElement(SELECTORS.MEMORY_GAME_BUTTON)?.addEventListener("click", () => loadGameGallery('memory'));

  // Botões dos vídeos de audiência
  const iframeAudi = getElement(SELECTORS.AUDIENCE_VIDEO_IFRAME);
  if (iframeAudi) {
    getElement(SELECTORS.AUDIENCE_PREV_BUTTON)?.addEventListener('click', () => {
      iframeAudi.src = VIDEO_PATHS.YOUTUBE_0;
    });
    getElement(SELECTORS.AUDIENCE_NEXT_BUTTON)?.addEventListener('click', () => {
      iframeAudi.src = VIDEO_PATHS.YOUTUBE_1;
    });
  }
});