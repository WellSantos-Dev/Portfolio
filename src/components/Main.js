import { Home } from './Home'
import { Experience } from './Experience'
import { Formacao } from './Formacao'
import { Footer } from './Footer'
import { Header } from './Header'

export const Main = () => {
  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="experiencia">
        <Experience />
      </div>
      <div id="formacao">
        <Formacao />
      </div>
      <Footer />
    </>
  )
}