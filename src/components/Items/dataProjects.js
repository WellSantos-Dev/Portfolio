import imageBirthday from '../../assets/project-photo/simpleProjects/birthday-list.png'
import excludeCandidates from '../../assets/project-photo/simpleProjects/exclude.png'
import testimonials from '../../assets/project-photo/simpleProjects/testimonials.png'
import questions from '../../assets/project-photo/simpleProjects/questions.png'
import cardapio from '../../assets/project-photo/simpleProjects/cardapio.png'
import candidato from '../../assets/project-photo/simpleProjects/candidato.png'
import imageDogs from '../../assets/project-photo/dogs.png'
import imageBikcraft from '../../assets/project-photo/bikcraft.png'
import devfront from '../../assets/project-photo/devfront.png'

export default [
    // PROJETOS PEQUENOS
  [
    {
      id: 1,
      name: 'Relembrar aniversário',
      url: 'https://birthday-list-navy.vercel.app/',
      image: `${imageBirthday}`,
    }, 
    {
      id: 2,
      name: 'Excluir candidatos',
      url: 'https://exclude-candidates.vercel.app/',
      image: `${excludeCandidates}`,
    },
    {
      id: 3,
      name: 'Testimonials',
      url: 'https://testimonial-eight.vercel.app/',
      image: `${testimonials}`,
    },
    {
      id: 4,
      name: 'Accordion',
      url: 'https://accordion-beta-lyart.vercel.app/',
      image: `${questions}`,
    },
    {
      id: 5,
      name: 'Cardápio',
      url: 'https://cardapio-olive.vercel.app/',
      image: `${cardapio}`,
    },
    {
      id: 6,
      name: 'Informações no clique',
      url: 'https://candidato.vercel.app/',
      image: `${candidato}`,
    },
  ],
    // PROJETOS GRANDES
  [
    {
      id: 7,
      name: 'Rede Social - Dogs',
      url: 'https://redesocialdogs.vercel.app/',
      image: `${imageDogs}`,
    },
    {
      id: 8,
      name: 'Bikcraft | Em desenvolvimento',
      url: 'https://bikcraft-redesign.vercel.app/',
      image: `${imageBikcraft}`,
    },
    {
      id: 9,
      name: 'DevFront | Refazendo',
      url: 'https://devfrontmaster.vercel.app/',
      image: `${devfront}`,
    }
  ]
]