import './App.css';
import { contato_form } from './contact.js';

function App() {
  return (
    <div className="container">
      <div className="conteudo-principal">
        <div className="header">
          <div className="header-texto">
            <a href="#habilidade_link">Habilidades</a>
            <a href="#projetos_link">Projetos</a>
            <a href="#servicos_link">Serviços</a>
          </div>
          <div className="header-images">
            <a href="https://linkedin.com" className="linkedin-icon"><img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/linkedin.png" alt="" /></a>
            <a href="https://github.com" className="github-icon"><img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/github.png" alt="" /></a>
          </div>
        </div>
        <div className="conteudo">
          <div className="apresentacao">
            <span id="dev">
              Desenvolvedor<br />
              Front End
            </span>
            <br />
            <span id="dev-descricao">
              Ola, sou o Fernando, Programador Front End<br />
              Iniciante. Crio sites modernos e responsivos<br />
              com as melhores ferramentas do mercado.
            </span>
          </div>
          <div className="foto">
            <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/foto.png" alt="foto-fernando" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Habilidades() {
  return (
    <div className="habilidades" id="habilidade_link">
      <h1>Habilidades</h1>
      <div className="linguagens">
        <span>
          HTML<br />
          CSS<br />
          JAVASCRIPT<br />
          REACT<br />
          NODE JS<br />
        </span>
      </div>
      <div className="linguagens-imagens">
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/html5.png" alt="" />
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/css3.png" alt="" />
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/js.png" alt="" />
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/react.png" alt="" />
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/wordpress.png" alt="" />
      </div>
    </div>
  );
}

function Projetos() {
  return (
    <div class="projetos" id="projetos_link">
      <h1 class="texto-h1">Projetos</h1>
      <div class="projetos-imagens">
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/projeto.jpg" alt="projeto 1"/>
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/projeto.jpg" alt="projeto 2"/>
        <img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/projeto.jpg" alt="projeto 3"/>
      </div>
    </div>
  );
}


function Servicos() {
  return (
    <div class="servicos" id="servicos_link">
    <h1 class="texto-h1">Serviços</h1>
    <div class="servicos-info">
        <div class="servicos-texto">
            <h1>Site Institucional</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                et distinctio architecto voluptatibus! Aspernatur, necessitatibus natus.
                Asperiores quis quae iusto. Et ex illum aliquam voluptates,
                repellendus ratione nulla voluptate sed.</span>
        </div>
        <div class="servicos-texto">
            <h1>Blog</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                et distinctio architecto voluptatibus! Aspernatur, necessitatibus natus.
                Asperiores quis quae iusto. Et ex illum aliquam voluptates,
                repellendus ratione nulla voluptate sed.</span>
        </div>
        <div class="servicos-texto">
            <h1>Loja Virtual</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                et distinctio architecto voluptatibus! Aspernatur, necessitatibus natus.
                Asperiores quis quae iusto. Et ex illum aliquam voluptates,
                repellendus ratione nulla voluptate sed.</span>
        </div>

      </div>
    </div>
  );
}

function Contato() {
  const handleClick = () => {
    const email = document.getElementById('email').value;
    contato_form(email);
  }
  return (
    <div class="contato">
    <h1 class="texto-h1">Contato</h1>
    <div class="contato-form">
        <h1>Entrar em Contato</h1>
            <input type="text" id="nome" placeholder="Nome" />
            <input type="email" id="email" placeholder="Email" />
            <textarea placeholder="Mensagem"></textarea>
            <button onClick={handleClick}>Enviar</button>
            <div class="enviado"></div>
    </div>
   </div>
  );
}

function Footer() {
  return (
  <footer>
    <div class="footer">
     <a href="https://www.facebook.com/"><img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/facebook.png" alt="Facebook" /></a>
     <a href="https://www.instagram.com/"><img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/Instagram.png" alt="Instagram" /></a>
     <a href="https://www.github.com/"><img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/github.png" alt="Github" /></a>
     <a href="mailto:email@example.com"><img src="https://raw.githubusercontent.com/nandonweb/Portifolio/main/assets/images/email.png" alt="Email" /></a>
    </div>
  </footer>
  );
}

export { App, Habilidades, Projetos, Servicos, Contato, Footer };

