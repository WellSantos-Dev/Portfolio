import styles from 'styled-components'
import perfil from '../assets/profile.jpeg';

export const Home = () => {
  return (
    <Container>
      <div className="container">
        <section className="h-section">
          <div className="h-hero">
            <img src={perfil} alt="perfil" />
          </div>

          <div className="h-info">
            <h1>Front-end Developer & UI/UX Designer</h1>
            <p>Localizado no Litoral Norte - SP 🏖️</p>
          </div>
            
        </section>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .container {
    max-width: 100vw;
    padding-top: 160px;
    
  }
  
  .h-section {
    margin: 0 auto;
    max-width: 1160px;
    padding: 0 30px;
    
    display: flex;
    align-items: center;
  }

  .h-hero {
    self-align: start;
    margin-right: 8.75rem;
    
    img {
      max-width: 22.5rem;
      border-radius: 10px;
    }
  }


  .h-info {
    max-width: 34.375rem;

    h1 {
      font-size: 4.5rem;
      color: #141414;
      padding-bottom: 1.875rem;
    }

    p {
      font-size: 1.5rem;
      color: #525252;
    }
  }


  @media (max-width: 990px) {
    .h-hero {
      margin-right: 4rem;

      img {
        max-width: 15rem;
      }
    }

    .h-info {
      h1 {
        font-size: 2rem;
        padding-bottom: 1rem;
      }

      p {
        font-size: 1rem;
      }
    }

  }

  @media (max-width: 575px) { 
    .h-section {
      display: flex;
      flex-direction: column;
    }

    .h-hero {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;

      img {
        padding-bottom: 1.5rem;
      }

      p {
        font-size: 0.875rem;
      }

    }
    
    .h-info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      }
    }
   }
  `