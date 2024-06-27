import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { StrictMode } from "react";
// import Header from './components/header/header'
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import Footer from "./components/footer/footer";
import GoToTop from "./GoToTop";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Header /> */}
        <GoToTop />
        <StrictMode>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </StrictMode>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
