import React from 'react';
import BannerMain from './components/BannerMain/BannerMain';
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <div stely='#1414141' >
      <Menu />
      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={'O que é RootsFlix?'} />

    <Carousel 
    ignoreFirstVideo
    category={dadosIniciais.categorias[0]}
    ></Carousel>

    <Footer></Footer>
    </div>

  );
}

export default App;
