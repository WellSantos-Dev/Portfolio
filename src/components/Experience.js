import styles from 'styled-components'
import dogs from '../assets/project-photo/dogs.png'
import bikcraft from '../assets/project-photo/bikcraft.png'
import { Link } from 'react-router-dom'

// Import Components
import { Box } from './Items/Box'

export const Experience = () => {
  return (
    <Container>
      <div className="container">
        <section className="content">
          <div className="e-left">
            <h1>Experiência</h1>
          </div>

          <div className="e-right">
            <div className="aprensentacao">
              <p id="whoami">Há cerca de 4 anos atrás eu comecei praticar Programação. Desenvolvi vários projetos com <span className="bold">ReactJS, NextJS, Styled-Components, Strapi, Stripe, SasS, FaunaDB, oAuth, Prismic CMS, Firebase, JavaScript, HTML e CSS</span>. Os projetos abaixo são os que mais me agregaram conhecimento na pratica e os considero os melhores até agora.</p>
              <Box ano="2021" nomeProjeto="Rede Social - Dogs" p="Desenvolvido com ReactJS, CSS e uma API do wordpress - pela qual recebi dados de usuarios. A aplicação é uma rede social para cachorro. Ela tem um sistema de login, recuperação de senha, cadastro de usuario, fazer post, dar like em post e comentar. Desenvolvi também uma parte apenas para gerenciar dados de acesso em gráfico." tecnologias={['ReactJS', 'Styled-components', 'API WordPress']} linkProjeto="https://redesocialdogs.vercel.app/" imagem={dogs}/>
              <Box ano="2022" nomeProjeto="Bikcraft" p="Este projeto foi desenvolvido com ReactJS e styled-components. Fiz a integração dele com uma API chamada Commerce.JS pra fazer o fetch dos produtos. Ele tem funcionalidade como Adicionar e remover produto do carrinho." tecnologias={['ReactJS', 'Styled-components', 'Commerce.js']} linkProjeto="https://bikcraft-redesign.vercel.app/" imagem={bikcraft}/>
              <Link to="/projetos">Veja mais projetos</Link>
            </div>
          </div>
          
        </section>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .container {
    padding-top: 7.5rem;
    max-width: 1160px;
    margin: 0 auto;
    padding-bottom: 7.5rem;
  }
  
  .content {
    display: flex;
    margin: 0 auto;
    max-width: 1160px;
    padding: 0 30px;

    .e-left {
      padding-right: 6.25rem;
      max-width: 432px;
      word-wrap: break-word;
      
      h1 {
        font-size: 9rem;
        color: #E0E0E0;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
   
    .e-right {

      .aprensentacao{
          font-size: 1.5rem;
          font-weight: 400;
          color: #525252;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;


         #whoami {
           padding-left: 2.25rem;
           padding-bottom: 3.75rem; 
          }

          #seeMoreProjects {
            color: #000;
            font-weight: bold;
            font-size: 1.5rem;
            text-decoration: none;
          }
          
      }
    }

    .bold {
      font-weight: 700;
      color: #141414;
    }
  }
  
  @media (max-width: 990px) {
    .content {
      display: flex;
      flex-direction: column;

      .e-left {
        max-width: 900px;
        word-wrap: initial;
        padding: none;

        h1 {
          font-size: 3.5rem;
          padding-bottom: 1rem;
        }
      }

      .e-right {
        max-width: 800px;
      }
      

      #whoami {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 575px) {
    .content {
      .e-left {
        h1 {
          font-size: 2rem;
        }
      }

      #whoami {
        padding: 0;
        margin: 0;
        font-size: 1rem;
      }
    }
  }


`