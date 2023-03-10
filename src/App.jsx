import './assets/sass/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound /> }/>
       </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
