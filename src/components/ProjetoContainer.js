import styles from 'styled-components'
import data from './Items/dataProjects'
import { Link } from 'react-router-dom'

console.log(data)

export const ProjetoContainer = () => {

  return (
    <Container>
      <div className="container-projects">
        <div className="content-projects">
          <div className="basic-projects">
            <h1>Projetos Grandes</h1>
              <div className="projects">
                {
                  data[1].map((project) => (
                  <a href={project.url} key={project.name} target='_blank' rel="noreferrer">
                      <div className="project">
                      <img src={project.image} alt={project.name}/>
                      <h1>{project.name}</h1>
                    </div>  
                  </a>
                )) 
                }
              </div>
          </div>

          <div className="basic-projects">
            <h1>Projetos Básicos</h1>
              <div className="projects">
                {
                  data[0].map((project) => (
                  <a href={project.url} key={project.name} target='_blank' rel="noreferrer">
                    <div className="project">
                      <img src={project.image} alt={project.name}/>
                      <h1>{project.name}</h1>
                    </div>
                  </a>
                )) 
                }
              </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .container-projects {
    background-color: #E2E8F1;
  }
  .content-projects {
    a {
      text-decoration: none;
    }

    .basic-projects {
      max-width: 1160px;
      margin: 0 auto;
      
      h1 {
        text-align: center;
        font-weight: 500;
        padding-top: 3rem;
      }
      
      .projects {
        display: flex;
        gap: 40px;
        padding: 20px;
        border-radius: 5px;
        flex-wrap: wrap;
        justify-content: center;
        
        .project {
          cursor: pointer;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 10px 5px 15px #ccc;
          transition: all 0.5s ease;
          max-width: 300px;

          img {
            border-radius: 5px 5px 0 0;
          }

          h1 {
            font-weight: 400;
            padding: 15px;
            font-size: 1.2rem;
            color: #333;
          }
          }
        }

        .project:hover {
          transform: scale(1.1)
        }
    }
  }
`