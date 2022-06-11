import styles from 'styled-components'
import { Link } from 'react-router-dom'

export const Projetos = () => {
  return (
    <Container>
      <div className="container-projetos">
        <header className="header-projetos">
          <div className="intro-header">
            <p>Olá recrutador</p>
            <h1>esses são alguns dos meu projetos!</h1>
          </div>
          <div className="button-home">
            <Link to="/">VOLTAR A HOME</Link>
          </div>
        </header>
      </div>
      <h1>Página contendo projetos em desenvolvimento!</h1>
    </Container>
  )
}

const Container = styles.div`
  .container-projetos {
    background-color: #141414;

    .header-projetos {
      max-width: 1160px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 300px;
      flex-wrap: wrap;
  
      .intro-header {
        p {
          color: #A3A3A3;
          font-size: 1.5rem;
          line-height: 32px; 
          text-transform: uppercase;
        }

        h1 {
          font-size: 3rem;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
  
      .button-home {
  
        a {
          padding: 10px 15px;
          border-radius: 5px;
          color: #fff;
          background-color: #333;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
    }
  }
  
`