import React from 'react'
import './styles.scss'
import imageDestack from '../../images/imagem-destaque.png'

const Home = () => {
  return (
    <main id="main-content" className="home__container">
      <div className="home__col">
        <h1 className="home__title">São Paulo para todos</h1>
        <p className="home__text">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.
        </p>
        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>
        <div className="home__pills"></div>
      </div>
      <div className="home__col">
        <div className="home__image home__image--destack">
          <img src={imageDestack} alt="Imagem destaque cadeirante"></img>
        </div>
      </div>
    </main>
  )
}

export default Home
