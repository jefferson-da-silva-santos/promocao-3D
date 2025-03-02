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
    text: 'Mito, pois doar sangue não engorda. A doação de sangue não interfere no metabolismo nem no ganho de peso. O corpo trabalha apenas para repor o sangue doado, o que pode gerar uma leve sensação de fome, mas isso não altera o metabolismo de forma significativa.',
    src: 'assets/image/gordinho.webp'
  },
  {
    id: 'm7',
    title: 'Medo de agulhas',
    text: 'A fobia de agulhas é um dos principais motivos que afastam doadores. Esse medo pode surgir de experiências traumáticas ou associadas à dor. É importante reforçar que as agulhas utilizadas são específicas e seguras, causando apenas um leve incômodo. Técnicas de relaxamento e apoio emocional podem ajudar a superar esse receio.',
    src: 'assets/image/medo agulha.webp'
  },
  {
    id: 'm8',
    title: 'Medo de dor',
    text: 'Muitas pessoas acreditam que a doação de sangue será extremamente dolorosa, o que não é verdade. A picada da agulha é rápida e comparável a um pequeno beliscão. O desconforto geralmente dura poucos segundos, e a equipe médica está preparada para garantir o máximo de conforto. Após a coleta, a maioria dos doadores relata sensação tranquila.',
    src: 'assets/image/medo dor.webp'
  },
  {
    id: 'm9',
    title: 'Medo de tontura e náuseas',
    text: 'Alguns doadores temem se sentir mal após a doação, como tonturas ou náuseas. Esses sintomas são raros e, quando ocorrem, geralmente estão relacionados à falta de hidratação ou jejum. Para evitar desconforto, é importante se alimentar bem e beber bastante líquido antes da doação. O descanso após o procedimento também ajuda a prevenir esses efeitos.',
    src: 'assets/image/tontura.webp'
  },
  {
    id: 'm10',
    title: 'Medo de ver sangue',
    text: 'Ver o próprio sangue pode causar ansiedade e até mal-estar em algumas pessoas. No entanto, durante a doação, não é necessário observar o processo, e a equipe pode distrair o doador com conversa ou música. Evitar focar na coleta e concentrar-se em pensamentos positivos são estratégias que ajudam a lidar com esse medo.',
    src: 'assets/image/ver-sangue.webp'
  },
  {
    id: 'm11',
    title: 'Medo de centros e hospitais',
    text: 'Ambientes hospitalares podem despertar desconforto em alguns indivíduos devido a associações negativas com doenças. Os centros de coleta de sangue são diferentes, sendo locais acolhedores e organizados para transmitir segurança. Conhecer o espaço previamente e ser bem recepcionado pela equipe ajuda a reduzir essa ansiedade.',
    src: 'assets/image/hospitais.webp'
  },
  {
    id: 'm12',
    title: 'Medo de pegar doença',
    text: 'Um dos mitos mais prejudiciais é o de que é possível contrair doenças ao doar sangue. No entanto, todo o material utilizado é esterilizado e descartável, garantindo total segurança. Os protocolos seguem rigorosos padrões de saúde, e não há nenhum risco de contaminação. Esclarecer essa questão é essencial para tranquilizar os doadores​​.',
    src: 'assets/image/doencas.webp'
  },
  {
    id: 'm13',
    title: 'Leite é fraco',
    text: 'Mito, pois o leite materno tem todos os nutrientes necessários para o desenvolvimento do bebê, independentemente de sua aparência mais rala. Sua composição é equilibrada, contendo proteínas, gorduras, vitaminas e anticorpos essenciais para a saúde da criança.',
    src: 'assets/image/leite fraco.webp'
  },
  {
    id: 'm14',
    title: 'Só podem doar grandes quantidades',
    text: 'Mito, pois qualquer quantidade de leite doado é importante, até mesmo 1 ml pode salvar a vida de um recém-nascido prematuro. Os Bancos de Leite Humano aceitam doações pequenas, valorizando cada contribuição para ajudar bebês em estado crítico.',
    src: 'assets/image/leite doado.webp'
  },
  {
    id: 'm15',
    title: 'Mães podem amamentar outras crianças',
    text: 'Mito, pois a amamentação cruzada (sem controle dos Bancos de Leite) pode transmitir doenças. A doação segura é feita por meio dos Bancos de Leite Humano, onde o leite é pasteurizado e distribuído de forma controlada para os bebês que mais precisam.',
    src: 'assets/image/amamentar outras.webp'
  },
  {
    id: 'm16',
    title: 'Leite insuficiente',
    text: 'Mito, pois a produção de leite é estimulada pela sucção do bebê e pela regularidade das mamadas. Na maioria dos casos, a percepção de "leite insuficiente" é equivocada, e o apoio correto pode ajudar a manter a produção adequada.',
    src: 'assets/image/insulficiente.webp'
  },
  {
    id: 'm17',
    title: 'O bebê não quis pegar o peito',
    text: 'Mito, pois a recusa temporária do peito pode ocorrer por diversos fatores, como mudanças na rotina, estresse ou confusão de bicos. Ajustes no ambiente e orientação adequada ajudam a superar essas dificuldades, garantindo a continuidade da amamentação.',
    src: 'assets/image/pegar peito.webp'
  },
  {
    id: 'm18',
    title: 'Seios caem com a lactação',
    text: 'Mito, pois o que provoca a flacidez dos seios é a genética, o envelhecimento e fatores como o ganho de peso, não a amamentação. Pelo contrário, o ato de amamentar traz benefícios à saúde da mulher, reduzindo o risco de câncer de mama e ovário​​.',
    src: 'assets/image/seios caem.webp'
  },
  {
    id: 'm19',
    title: 'Órgãos podem ser vendidos após a morte do meu familiar',
    text: 'Mito, pois o processo de doação é rigorosamente regulamentado por lei e fiscalizado por autoridades de saúde, garantindo segurança e ética.',
    src: 'assets/image/imagemTecidos-1.webp'
  },
  {
    id: 'm20',
    title: 'Idosos não podem doar',
    text: 'Mito, pois a idade não é fator impeditivo para a doação; o que importa é a condição de saúde do órgão no momento da doação.',
    src: 'assets/image/imagemTecidos-2.webp'
  },
  {
    id: 'm21',
    title: 'Confundir morte encefálica com o estado de coma',
    text: 'Mito, pois morte encefálica é irreversível, enquanto o coma é um estado em que há possibilidade de recuperação, conforme critérios médicos.',
    src: 'assets/image/imagemTecidos-3.webp'
  },
  {
    id: 'm22',
    title: 'É necessário custo para doação',
    text: 'Mito, pois todos os procedimentos relacionados à doação e ao transplante são gratuitos e custeados pelo sistema público de saúde.',
    src: 'assets/image/imagemTecidos-4.webp'
  },
  {
    id: 'm23',
    title: 'Preferência na fila de espera',
    text: 'Mito, pois a fila é única e regulamentada por critérios técnicos de compatibilidade e urgência, sem qualquer privilégio pessoal.',
    src: 'assets/image/imagemTecidos-5.webp'
  },
  {
    id: 'm24',
    title: 'Doação desfigura o corpo',
    text: 'Mito, pois os procedimentos são realizados com respeito ao corpo, preservando sua aparência, garantindo dignidade e respeito à família.',
    src: 'assets/image/imagemTecidos-6.webp'
  },

  {
    id: 'm25',
    title: 'Se estiver internado posso correr risco de morrer para que ocorra a doação de órgãos',
    text: 'Mito, pois a prioridade de médicos e hospitais é salvar vidas, e a doação só é considerada após o diagnóstico de morte encefálica.',
    src: 'assets/image/imagemTecidos-7.webp'
  },
  {
    id: 'm26',
    title: 'Pessoas com histórico de doenças não podem fazer doação',
    text: 'Mito, pois cada caso é avaliado individualmente, e algumas doenças não impedem a doação, dependendo da saúde do órgão.',
    src: 'assets/image/imagemTecidos-8.webp'
  }
]

let isMenuVisible = false;
let isPrimaryVideoVisible = false;
let isSecundaryVideoVisible = false;

document.addEventListener('DOMContentLoaded', () => {
  const arrButtonsOption = Array.from(getElement('.btn-mapa', true));


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

  const btnMitosDoacaoSangue = getElement('.btn-01');
  if (btnMitosDoacaoSangue) {
    btnMitosDoacaoSangue.addEventListener('click', () => {
      changeImage('assets/image/mapa mitos doacao de sangue.jpeg', ['m1', 'm2', 'm3', 'm4', 'm5', 'm6']);
      addCloseClassActive(btnMitosDoacaoSangue, ['.btn-02', '.btn-03', '.btn-04']);
      hideButtons(false);
    });
  }

  const btnMedosDoacaoSangue = getElement('.btn-02');
  if (btnMedosDoacaoSangue) {
    btnMedosDoacaoSangue.addEventListener('click', () => {
      changeImage('assets/image/mapa medos doacao de sangue.jpeg', ['m7', 'm8', 'm9', 'm10', 'm11', 'm12']);
      addCloseClassActive(btnMedosDoacaoSangue, ['.btn-03', '.btn-01', '.btn-04']);
      hideButtons(false);
    });
  }

  const btnMitosDoacaoLeite = getElement('.btn-03');
  if (btnMitosDoacaoLeite) {
    btnMitosDoacaoLeite.addEventListener('click', () => {
      changeImage('assets/image/mapa mitos doacao de leite materno.jpeg', ['m13', 'm14', 'm15', 'm16', 'm17', 'm18']);
      addCloseClassActive(btnMitosDoacaoLeite, ['.btn-02', '.btn-01', '.btn-04']);
      hideButtons(false);
    });
  }


  const btnMitosDoacaOrgaos = getElement('.btn-04');
  if (btnMitosDoacaOrgaos) {
    btnMitosDoacaOrgaos.addEventListener('click', () => {
      changeImage('assets/image/mapa mitos doação de tecidos.jpeg', ['m19', 'm20', 'm22', 'm23', 'm24', 'm26']);
      addCloseClassActive(btnMitosDoacaOrgaos, ['.btn-02', '.btn-01', '.btn-03']);
      hideButtons(true);
    });
  }

  const btnVideo1 = getElement('.btn-video-1');
  if (btnVideo1) {
    btnVideo1.addEventListener('click', () => {
      handleVideos(1);
    })
  }

  const btnVideo2 = getElement('.btn-video-2');
  if (btnVideo2) {
    btnVideo2.addEventListener('click', () => {
      handleVideos(2);
    })
  }
});

// Função de alterar vídeo
function handleVideos(video = 1) {
  const divVideo = getElement('.video');
  const descriptionVideo = getElement('.resultados__content__section--secundary__text');
  if (video === 1 && !isPrimaryVideoVisible) {
    divVideo.innerHTML = `<iframe allow="encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" 
        src="https://www.youtube.com/embed/iZwb0yh2klk?si=Qhwv_mt5CqlOvGBr" 
        title="YouTube video player" 
        frameborder="0" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
</iframe>`;
    descriptionVideo.textContent = `PL110/2024, Deputado Federal Eduardo da Fonte, Institui o Programa
              de Ensino e Conscientização sobre Doação de Sangue, Doação de
              Órgãos/Tecidos e Doação de Leite Materno – Promoção 3D no
              currículo escolar e acadêmico brasileiro.`;
    isPrimaryVideoVisible = true;
    isSecundaryVideoVisible = false;
  } else if (video === 2 && !isSecundaryVideoVisible) {
    divVideo.innerHTML = `<video width="100%" height="360" controls>
                <source src="assets/video/video-pro.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>`;
    isSecundaryVideoVisible = true;
    isPrimaryVideoVisible = false;
    descriptionVideo.textContent = `Dr. e Vereador Cristiano Teixeira Dantas, durante a sessão
              aprensenta PROJETO DE LEI 004/2024, Com o objetivo de istituir a
              Política de Conscientização e Incentivo da Doação de Sangue,
              Órgãos, Tecidos Leite Materno - Promoção 3D, no Município de
              Custódia.`
  }
}

function hideButtons(show) {
  const btn7 = getElement('.btn-mapa-7');
  const btn8 = getElement('.btn-mapa-8');
  btn7.style.display = show ? 'inline-block' : 'none';
  btn8.style.display = show ? 'inline-block' : 'none';
  getElement('.btn-mapa-6').style.top = show ? '6%' : '20%';
  getElement('.btn-mapa-6').style.left = show ? '5%' : '7%';
}

function addCloseClassActive(currentButton, arr) {
  currentButton.classList.add('active');
  arr.forEach(item => {
    const element = getElement(item);
    if (element) {
      element.classList.remove('active');
    }
  })
}

function changeImage(src, newClasses) {
  const image = document.querySelector('.img-mapa');
  image.setAttribute('src', src);
  const buttons = document.querySelectorAll('.btn-mapa');

  buttons.forEach((button, index) => {
    if (newClasses[index]) {
      button.classList.remove(button.classList[2]);
      button.classList.add(newClasses[index]);
    }
  });
}

// Função responsável por abrir e fechar option
// Função responsável por abrir e fechar option de forma assíncrona
async function openCloseOption(open = true, currentClassButton = '') {
  const option = getElement('.conatiner-option');
  const objeAtual = arrOption.find(item => item.id === currentClassButton);

  if (open && objeAtual) {
    option.style.display = 'flex';

    // Atualiza título e texto imediatamente
    getElement('.option--primary__title').textContent = objeAtual.title;
    getElement('.option--primary__text').textContent = objeAtual.text;

    // Carrega a imagem de forma assíncrona
    const image = getElement('.option--secundary__img');
    await loadImageAsync(objeAtual.src);
    image.setAttribute('src', objeAtual.src);
  } else {
    option.style.display = 'none';
    getElement('.option--primary__title').textContent = '';
    getElement('.option--primary__text').textContent = '';
    getElement('.option--secundary__img').setAttribute('src', '');
  }
}

// Função para carregar uma imagem de forma assíncrona
function loadImageAsync(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
}

// Função responsável por fechar o menu
function openCloseMenu(visible) {
  const btnMenu = getElement('.menu-btn');
  const listMenu = getElement('.navbar__list');
  listMenu.style.display = visible ? 'none' : 'flex';
  btnMenu.setAttribute('src', visible ? 'assets/image/menu-humburguer.png' : 'assets/image/cross.png');
  isMenuVisible = toggleVariable(isMenuVisible);
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
