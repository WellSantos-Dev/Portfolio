import imageBirthday from '../../assets/project-photo/simpleProjects/birthday-list.png'
import excludeCandidates from '../../assets/project-photo/simpleProjects/exclude.png'
import testimonials from '../../assets/project-photo/simpleProjects/testimonials.png'
import imageDogs from '../../assets/project-photo/dogs.png'
import imageBikcraft from '../../assets/project-photo/bikcraft.png'

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
  ],
    // PROJETOS GRANDES
  [
    {
      id: 4,
      name: 'Rede Social - Dogs',
      url: 'https://redesocialdogs.vercel.app/',
      image: `${imageDogs}`,
    },
    {
      id: 5,
      name: 'Bikcraft | Em desenvolvimento',
      url: 'https://bikcraft-redesign.vercel.app/',
      image: `${imageBikcraft}`,
    },
  ]
]