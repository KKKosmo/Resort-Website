import './App.css';
import './css/fonts.css';
import './css/animate.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Sroll from './components/Scroll';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
      <Sroll />
    </div>
  );
}

export default App;