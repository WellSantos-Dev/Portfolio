import styles from 'styled-components'

export const Box = ({ano, nomeProjeto, tecnologias, linkProjeto, imagem}) => {
  return (
    <Container>
      <div className="box">
        <img src={imagem} alt={nomeProjeto} />
        <div className="container-projeto">
          <div className="info-projeto">
          <h1>{nomeProjeto}</h1>
        </div>
        <div className="tecnologias">
          {tecnologias.map((tecnologia) => (
            <div className="eachTec" key={tecnologia}>{tecnologia}</div>
            ))}
        </div>
      </div>
            <a href={linkProjeto} target="_blank" rel="noreferrer">VER PROJETO</a>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f3f3f3;
    margin-bottom: 2rem;
    border-radius: 5px;

    .container-projeto {
      .info-projeto {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .tecnologias {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .eachTec {
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        margin-bottom: 2rem;
      }
    }
    
    img {
      max-width: 400px;
      margin-bottom: 1.5rem;
      border-radius: 5px;
      margin-top: 2rem;
    }

    h1 {
      font-size: 2rem;
      padding-bottom: 0.5rem;
    }

    a {
      padding: 10px 20px;
      text-decoration: none;
      color: #fff;
      font-size: 1.3rem;
      background-color: #000;
      border-radius: 5px;
      margin-bottom: 2rem;
      display: block;
    }
  }
`