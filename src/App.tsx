import './styles/App.css';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Desenvolvedor Frontend | Criador de Experiências Digitais</p>
        <div className="social-links">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </header>
      <main>
        <Projects />
        <ContactForm />
      </main>
      <footer>© 2025 Seu Nome. Todos os direitos reservados.</footer>
    </div>
  );
}

export default App;
