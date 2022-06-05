import styles from 'styled-components'

export const Skill = ({h1}) => {
  return (
    <Container>
      <h1>{h1}</h1>
    </Container>
  )
}

const Container = styles.div`
  h1 {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    font-weight: 400;
    font-size: 1.2rem;
    margin: 10px;
  }
`