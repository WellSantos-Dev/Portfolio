import styles from 'styled-components'

export const Box = ({ano, nomeProjeto, p, tecnologias, linkProjeto}) => {
  return (
    <Container>
      <div className="box">
        <div className="info-projeto">
          <h1>{nomeProjeto}</h1>
          <p>{p}</p>
          <a href={linkProjeto} target="_blank" >VER PROJETO</a>
        </div>
        <div className="tecnologias">
          {tecnologias.map((tecnologia) => (
            <div className="eachTec">{tecnologia}</div>
          ))}
        </div>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .box {
    display: flex;
    justify-content: space-between;
    background-color: #F5F5F5;
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;

    a {
      color: #333;
      text-decoration: none;
    }

    .info-projeto {
      max-width: 325px;
    }

    h1 {
      font-size: 1rem;
      color: #000;
      font-weight: 700;
      padding-bottom: 0.625rem;
    }

    p {
      font-weight: 400;
      font-size: 0.875rem;
      color: #525252;
      line-height: 20px;
      padding-bottom: 0.625rem;
    }

    .tecnologias {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
    
    .eachTec {
      padding: 5px 10px;
      background-color: #fff;
      font-size: 0.875rem;
      color: #141414;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }
`