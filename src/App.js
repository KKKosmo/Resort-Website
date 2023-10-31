import './App.css';
import './css/fonts.css';
import './css/animate.css';
import './js/wow';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;