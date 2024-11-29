const contentOptionService = [
  {
    key: 'xeroz',
    title: 'Xerox e impressões',
    description: 'Faça suas cópias e impressões com rapidez e qualidade! Oferecemos serviço de xerox e impressão para todos os tipos de documentos. Conte com a nossa papelaria para suas necessidades do dia a dia!',
    htmlServices: '<p>Xeroz Preto/Branco = <span class="preco">R$ 0,50</span></p><p>Xeroz Colorida = <span class="preco">R$ 1,00</span></p><p>2° Via do Boleto = <span class="preco">R$ 1,50</span></p><p>Conta de Luz = <span class="preco">R$ 8,00</span></p><p>Fotos = <span class="preco">R$ 0,50</span></p><p>Diploma = <span class="preco">R$ 0,50</span></p><p>Certificado = <span class="preco">R$ 2,00</span></p><p>Curriculo = <span class="preco">R$ 2,00</span></p>'
  },
  {
    key: 'pagamentos',
    title: 'Pagamento de Contas',
    description: 'Pague suas contas de luz e internet de forma rápida e segura em nossa papelaria! Evite filas e resolva tudo em um só lugar. Estamos aqui para facilitar o seu dia a dia!',
    htmlServices: '<p>Conta de Luz</p><p>Conta de Internet</p>'
  },
  {
    key: 'arte',
    title: 'Arte Gráfica e Digitação',
    description: 'Precisa de arte gráfica ou digitação? Nossa papelaria oferece serviços profissionais para criar e formatar seus documentos e projetos. Qualidade e rapidez para você destacar suas ideias!',
    htmlServices: '<p>Digitação e Scanner</p><p>Convites</p><p>Adesivos</p><p>Crachá</p><p>Topo de Bolo</p><p>Foto 3x4</p><p>Curriculo</p><p>Convites</p><p>Plastificação de Documentos </p>'
  },
  {
    key: 'formatacao',
    title: 'Formatação de Aparelhos',
    description: 'Deixe seu aparelho como novo! Oferecemos formatação completa de celulares, tablets e computadores, garantindo mais desempenho e segurança. Conte conosco para renovar seu dispositivo!',
    htmlServices: '<p>Celular</p><p>Gravação de Músicas em Pendrive</p>'
  },
  {
    key: 'consultas',
    title: 'Consultas',
    description: 'Realize consultas a órgãos do governo de forma rápida e prática em nossa papelaria! Emitimos certidões, consultas e documentos oficiais para facilitar sua vida. Venha nos visitar!',
    htmlServices: '<p>Consulta no SERASA</p><p>Consulta no GOV</p><p>Consulta no INSS</p><p>Agendamento no Detran</p><p>Agendamento no INSS</p><p>Agendamento de RG</p><p>Agendamento de CPF</p>'
  },
  {
    key: 'venda',
    title: 'Venda de Produtos',
    description: 'Aqui você encontra uma variedade de produtos eletrônicos e de papelaria! Desde acessórios para o seu dia a dia digital até materiais escolares e de escritório. Tudo em um só lugar, com qualidade e ótimos preços!',
    htmlServices: '<p>Cabo de Carregador Tipo-C = <span class="preco">R$ 9,99</span></p><p>Micro USB = <span class="preco">R$ 9,99</span></p><p>Fones de Ouvido = <span class="preco">R$ 11,99</span></p><p>Envelope = <span class="preco">R$ 1,50</span></p><p>Cartolina = <span class="preco">R$ 2,00</span></p> <p>Relogio - = <span class="preco">R$ 18,00 e R$ 16,00</span> </p> <p>Pendrive 16GB - = <span class="preco">R$ 35,00</span> <p>Pendrive 16GB - = <span class="preco">R$ 35,00</span></p> <p>Cordão para chave de moto - = <span class="preco">R$ 9,99</span></p> <p>Plug de carregador - = <span class="preco">R$ 9,99</span></p>'
  },
]

let menuHumburguerVisible = false;
let optionServiceVisible = false;

document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = getElement('.group-nav__nav__img-menu');
  const menu = getElement('.group-nav__nav__list');

  //Define a altura inicial ao carregar a página
  window.onload = function () {
    setInitialHeight();
    // Adiciona o listener para o evento de scroll
    window.addEventListener('scroll', adjustHeightOnScroll);
  };

  //evento de click do botão de menu
  btnMenu.addEventListener('click', () => {
    menu.style.display = menuHumburguerVisible ? 'none' : 'flex';
    menuHumburguerVisible = toggleVariable(menuHumburguerVisible);
  });

  //voltar o menu ao normal quando o tamanho mudar
  window.addEventListener('resize', () => {
    if (window.innerWidth > 884) {
      menu.style.display = 'flex';
      menuHumburguerVisible = false;
    } else {
      menu.style.display = 'none';
      menuHumburguerVisible = false;
    }
  });

  // Evento para abrir o option de serviço
  getElement('.ver-mais', true).forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();

      contentOptionService.forEach(obj => {
        if (btn.classList.contains(obj.key)) {
          openClosedOtionService(obj.title, obj.description, obj.htmlServices);
        }
      });
    });
  });

  // Evento para fechar o option de serviço
  getElement('.btn-close').addEventListener('click', event => {
    event.preventDefault();
    openClosedOtionService();
  });

  // Animações

  criarObservacao('.hide-1', 'show-1');
  criarObservacao('.hide-2', 'show-2');

  criarObservacao('.hide-2-1', 'show-2-1');
  criarObservacao('.hide-2-2', 'show-2-2');

  criarObservacao('.hide-3-1', 'show-3-1');

  //Evento para mudar a cor do menu quando ele estiver no topo
  window.addEventListener('scroll', () => {
    getElement('.group-nav').style.backgroundColor = (window.scrollY === 0) ? 'rgba(0,0,0,.4)' : 'rgba(20, 8, 45, 0.8)';
  });

  // Clique nos botões de imagens
  const obj = {
    b1: 'src/image/loja1.jpg',
    b2: 'src/image/loja2.jpg',
    b3: 'src/image/loja3.jpg',
    b4: 'src/image/loja4.jpg',
  }
   // Seleciona todos os botões
   const buttons = [
    getElement('.b1'),
    getElement('.b2'),
    getElement('.b3'),
    getElement('.b4'),
   ];
   
   const imgLoja = document.querySelector('.img-loja');
   // Adiciona um evento de clique em cada botão
   buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        const className = this.className; // Pega a classe do botão clicado
        
        // Atualiza o src da imagem
        imgLoja.src = obj[className];

        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        this.classList.add('active');
    });
});

});

// Função de alternar valores booleanos de variáveis
function toggleVariable(variable) {
  return !variable;
}

//Função de selecionar elementos por classe
function getElement(clss, multiple = false) {
  return multiple ? document.querySelectorAll(clss) :
    document.querySelector(clss);
}

// Lógica para abrir option
function openClosedOtionService(title = '', description = '', html = '') {
  document.body.style.overflow = optionServiceVisible ? 'auto' : 'hidden';
  getElement('.container-option').style.display = optionServiceVisible ? 'none' : 'flex';
  getElement('.option__title').textContent = optionServiceVisible ? '' : title;
  getElement('.option__text').textContent = optionServiceVisible ? '' : description;
  getElement('.servicos').innerHTML = optionServiceVisible ? '' : html;
  optionServiceVisible = toggleVariable(optionServiceVisible);
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

// Função para definir a altura inicial
function setInitialHeight() {
  const header = document.querySelector('.group-header');
  if (header) {
    header.style.height = '26em'; // Define a altura inicial
  }
}

// Função para alterar a altura ao rolar a página
function adjustHeightOnScroll() {
  const header = document.querySelector('.group-header');
  if (header) {
    header.style.height = '100vh'; // Ajusta a altura ao rolar
  }
  // Remove o listener após a primeira rolagem
  window.removeEventListener('scroll', adjustHeightOnScroll);
}