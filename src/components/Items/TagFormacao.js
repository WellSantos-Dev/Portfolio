import styles from 'styled-components'

export const TagFormacao = ({tipo, nome, local}) => {
  return (
    <Container>
      <div className="tag">
        <p>{tipo}</p>
        <h1>{nome}</h1>
        <h3>{local}</h3>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .tag {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #090909;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 20px;


    p {
      font-size: 0.875rem;
      color: #A3A3A3;
      font-weight: 400;
      text-transform: uppercase;
      padding-bottom: 10px;
    }

    h1 {
      font-size: 1rem;
      color: #fff;
      padding-bottom: 50px;
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      color: #A3A3A3;
    }


  }
`