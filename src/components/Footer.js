import styles from 'styled-components'

export const Footer = () => {
  return(
    <Container>
      <footer>
        <h1>Desenvolvido com ❤️ por Wellington Santos <br></br> Alguns direitos Reservados</h1>
      </footer>
    </Container>
  )
}

const Container = styles.div`
  footer {
    font-family: 'Roboto';
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 400;
    color: #fff;
    background-color: #221E41;
  }

  h1 {
    text-align: center;
  }
`