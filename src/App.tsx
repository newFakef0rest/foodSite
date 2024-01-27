import { Header } from "./components/Header/Header"
import { Poster } from "./components/Poster/Poster"

import PosterImage from './img/poster.png';

import './App.scss';
import { Features } from "./components/Features/Features";
import { About } from "./components/About/About";
import { Menu } from "./components/Menu/Menu";

const App: React.FC = () => {

  return (
    <>
      <div className='App'>
        <div className='posterImage'>
          <Header />
          <Poster />        
          <div className="posterImage__box">
            <img src={PosterImage} alt="" />
          </div>  
        </div>
        <Features />
        <About />
        <Menu />
      </div>
    </>
  )
}

export default App
