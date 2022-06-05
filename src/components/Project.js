import styles from 'styled-components'

export const Project = () => {
  return (
    <Container>
      <div className="project">
        <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="dogs"/>
        <h1>Dogs</h1>
        <a href="/#">See more <box-icon name='right-arrow-alt'></box-icon></a>
      </div>
    </Container>
  )
}

const Container = styles.div`
  .project {
    padding: 30px;
    box-shadow: #ddd 1px 1px 12px;
    border-radius: 10px;
    margin: 10px;
  }

  .project img {
    width: 300px;
    border-radius: 10px;
  }

  a {
    text-decoration: none;
    display: flex;
    aling-items: center;
    color: #333;
  }

  box-icon {
    margin: 0;
    paddding: 0;
    margin-left: 12px;
  }
`