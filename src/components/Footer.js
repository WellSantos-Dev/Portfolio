import styles from 'styled-components'

export const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="content">
          <div className="c-left">
            <p>Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋</p>
          </div>

          <div className="c-right">
            <h1>wellsantosprofissinal.dev@gmail.com</h1>
            <h1>(012) 99608-8228</h1>
            <h1>@well_dev</h1>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .container {
    background-color: #000;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1160px;
    padding: 40px;
    
    .c-left {
      max-width: 429px;

      p {
        color: #CCCCCC;
        font-size: 1.5rem;
      }
    }

    .c-right {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      h1 {
        color: #eee;
        font-size: 1.3rem;
        font-weight: 600;
        padding: 10px;
      }
    }
  }

  @media (max-width: 990px) {
    .content {
      flex-direction: column;
      
      .c-left p {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
    }
  }
`