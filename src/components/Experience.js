import styles from 'styled-components'
import {Intro} from './Intro'
import { Skill } from './Skill'

export const Experience = () => {
  return (
    <Container>
      <section>
        <Intro p="My Abilities" h1="My Skills"/>

        <div className="skills">
          <Skill h1="HTML" />
          <Skill h1="CSS" />
          <Skill h1="JavaScript" />
          <Skill h1="ReactJS" />
          <Skill h1="API" />
          <Skill h1="NextJS" />
          <Skill h1="Styled-Components" />
          <Skill h1="Sass" />
        </div>
      </section>
    </Container>
  )
}

const Container = styles.div`
  section {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 168px;
    flex-direction: column;
    background-color: #221E41;
    padding: 100px;
    border-radius: 10px;
  }

  h1 {
    color: #fff;

  }

  p {
    color: #cdcbdf;
  }

  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    flex-wrap: wrap;
  }
`