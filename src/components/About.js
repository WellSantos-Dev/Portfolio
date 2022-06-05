import styles from 'styled-components'
import { Card } from './Card'
import { Intro } from './Intro'
import medal from '../assets/medal.png'
import work from '../assets/work.png'
import profile from '../assets/profile.jpeg'
import { Button } from './Button';

export const About = () => {
  return (
    <Container>
      <Intro p="Whoami" h1="About me"/>
      <section>
        <div className="a-left">
          <img src={profile} alt="Imagem representando o dono do site." />
        </div>
        <div className="a-right">
          <div className="cards">
            <Card img={medal} h1="Experience" p="4 years working"/>
            <Card img={work} h1="work" p="50+ Projects"/>
          </div>
          <p>I'm a front-end developer with 4 years of experience in projects. The technologies I use are ReactJS and Styled Components / Sass. I also know how to work with API. I've practiced with: Firebase, Firestore, Strapi, Stripe, TMDB, Spotfy API..
          </p>
          <Button text="Contact me"/>
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
  }

  .a-left img {
    border-radius: 10px;
    margin-right: 60px;
    width: 350px;
    border-radius: 10px;
  }

  .a-right {
    max-width: 600px;
  }

  .a-right .cards {
    display: flex;
  }

  .a-right p {
    color: #757384;
    font-size: 1.2rem;
    margin-top: 34px;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  button {
    padding: 15px;
    font-size: 1.3rem;
    border: none;
    border-radius: 10px;
    margin-top: 3rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: #E0DAFA;
    background-color: #401BD9;
    cursor: pointer;
  }
`