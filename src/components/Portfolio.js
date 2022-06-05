import styles from 'styled-components';
import { Project } from './Project';
import { Intro } from './Intro'

export const Portfolio = () => {
  return (
    <Container>
      <section>
        <Intro p="My Portfolio" h1="Recent Works"/>

        <div className="area-projects">
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </Container>
  )
}

const Container = styles.div`
    section {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 164px;
      margin-bottom: 168px;
    }

    .area-projects {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
`