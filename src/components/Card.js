import styles from 'styled-components'

export const Card = ({img, h1, p}) => {
  return (
    <Container>
        <div className="card">
          <img src={img} alt={h1} />
          <h1>{h1}</h1>
          <p>{p}</p>
        </div>
    </Container>
  )
}

const Container = styles.div`
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 140px;
    box-shadow: #ddd 1px 1px 12px;
    margin-right: 24px;
    border-radius: 10px;
  }

  h1 {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-family: 'Poppins';
    color: #7A7A7E;
    font-weight: 400;
  }

  img {
    width: 24px;
  }
`