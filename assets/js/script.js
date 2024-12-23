let isMenuVisible = false;

document.addEventListener('DOMContentLoaded', () => {
  const boxVideo = getElement('.video');
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

});

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

