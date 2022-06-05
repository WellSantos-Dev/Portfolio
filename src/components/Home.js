import styles from 'styled-components'
import perfil from '../assets/perfil.jpg';
import { Button } from './Button';

export const Home = () => {
  return (
    <Container>
      <section>
        <div className="h-hero">
          <img src={perfil} alt="perfil" />
        </div>

        <div className="h-info">
          <p>Hello, im</p>
          <h1>Front-end Developer & UI/UX Designer</h1>
          <Button text="Download CV" className="downloadCV"/>
        </div>
          
      </section>
    </Container>
  )
}

const Container = styles.div`
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: calc(100vh - 90px);
    margin-top: 100px;
  }

  button {
    padding: 15px;
    background-color: #401BD9;
    color: #E0DAFA;
    font-size: 1.3rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    margin-top: 12px;
  }

  .h-hero {
    max-width: 300px;
    margin-right: 60px;
  }

  .h-info {
    max-width: 700px;
  }

  .h-info p {
    font-size: 1rem;
    color: #7a7a7e;
  }

  .h-info h1 {
    font-size: 3.875rem;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .h-info h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 576px) {
    button {
      font-size: 1rem;
    }

    .h-info h1 {
      font-size: 2rem;
    }
    
    .h-hero {
      width: 300px;
    }
  }

  @media (max-width: 500px) {
    .h-info h1 {
      font-size: 1.2rem;
    }

    .h-info {
      display: flex;
      flex-direction: column;
    }

    section {
      flex-direction: column;
      margin-bottom: 20px;
    }

    .h-hero {
      max-width: 100px;
      margin-bottom: 8px;
    }

    .h-hero img {
      padding: 0;
      margin: 0;
    }
  }
`