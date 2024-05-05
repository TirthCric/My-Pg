import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import ForPgOwner from './Components/ForPgOwner';
import MainFrame from './Components/MainFrame';
import PgDetailsAtFrame from './Components/PgDetailsAtFrame';
import "./App.css"
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className='main-container-div'>
        <div className="header-component">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<MainWithFooter />} />
          <Route path="/about" element={<About />} />
          <Route path="/forPGOwner" element={<ForPgOwner />} />
          <Route path="/mainPgFrame" element={<MainFrame />} />
          <Route path="/pgDetalisFrame" element={<PgDetailsAtFrame />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainWithFooter() {
  return (
    <>
      <Main />
      <Content />
      <Footer />
    </>
  );
}

export default App;
