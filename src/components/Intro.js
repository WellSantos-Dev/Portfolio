import styles from 'styled-components'

export const Intro = ({p, h1}) => {
  return (
    <Container>
      <div className="introducao">
      <p>{p}</p>
      <h1>{h1}</h1>
    </div>
    </Container>
  )
}


const Container = styles.div`
  .introducao {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  p {
    font-size: 1.4rem;
    color: #757384;
  }

  h1 {
    font-size: 3rem;
    color: #221E41;
    font-weight: 500;
  }
`