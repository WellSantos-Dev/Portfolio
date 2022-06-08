import styles from 'styled-components'
import { TagFormacao } from './Items/TagFormacao'
import cursos from '../assets/cursos.svg'

export const Formacao = () => {
  return (
    <Container>
      <div className="container">
        <div className="content">
          <div className="f-left">
            <h1>FORMAÇÃO</h1>
          </div>

          <div className="f-right">
            <p>Minhas mais recentes experiências acadêmicas 🎓 foram <span id="color-white">ADS e Sistemas para Internet</span>. Além disso me mantenho sempre atualizado com cursos intensivos online.</p>
            <div className="formacoes">
              <TagFormacao tipo="Técnologo" nome="Sistemas para internet" local="UniAsselvi"/>
              
            </div>

            <div className="certificados">
              <div className="cursos"><h1><img src={cursos} alt="Icone de um livro representando curso" /> Cursos</h1></div>
              <a href="https://www.origamid.com/certificate/603e7da5/" target="_blank" rel="noreferrer">ReactJS</a>
              <a href="https://www.origamid.com/certificate/64c06518/" target="_blank" rel="noreferrer">JavaScript ES6+</a>
              <a href="https://www.origamid.com/certificate/b7ec82e4/" target="_blank" rel="noreferrer">Web Design completo</a>
              <a href="https://www.origamid.com/certificate/a8ecde12/" target="_blank" rel="noreferrer">CSS Grid Layout</a>
              <a href="https://www.origamid.com/certificate/ed83bf92/" target="_blank" rel="noreferrer">CSS FlexBox</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .container {
    background-color: #141414;
  }

  .content {
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 120px;
    padding-bottom: 120px;
  }

  .f-left {
    max-width: 500px;
    word-wrap: break-word;
    padding-right: 7.375rem;

    h1 {
      color: #000;
      font-size: 9rem;
      font-weight: 700;
    }
  }

  .f-right {   
    p {
      color: #A3A3A3;
      font-size: 1.5rem;
      line-height: 32px;
      padding-bottom: 3.75rem; 
    }

    .formacoes {
      display: flex;
    }
    
    #color-white {
      color: #fff;
      font-weight: 700;
      font-size: 1.5rem;
    }

    .certificados {
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: #000;
      border-radius: 5px;
      margin: 26px 0;
      
      h1 {
        display: flex;
        align-items: center;
        padding: 0;
        color: #A3A3A3;
        font-weight: 400;
        font-size: 1.5rem;
        text-transform: uppercase;
      }

      .cursos {
        margin-bottom: 1rem;
      }

      img {
        max-width: 25px;
        margin-right: 1rem;
      }

      a {
        font-size: 1.2rem;
        text-decoration: none;
        color: #eee;
        margin: 10px 0;
      }
    }

  }

  @media (max-width: 990px) {
    .content {
      flex-wrap: wrap;
      word-wrap: initial;
      max-width: 100%;

      .f-left {
        h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          padding: 0 20px;
          color: #e3e3e3;
        }
      }

      .f-right {
        .formacoes {
          display: flex;
          flex-wrap: wrap;
          padding: 10px;
        }
          padding: 0 20px;
          margin-bottom: 2rem;
        }
      }
    }
  }
`