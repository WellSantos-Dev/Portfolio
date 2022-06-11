import imageBirthday from '../../assets/project-photo/simpleProjects/birthday-list.png'
import imageDogs from '../../assets/project-photo/dogs.png'
import imageBikcraft from '../../assets/project-photo/bikcraft.png'

export default [
    // PROJETOS PEQUENOS
  [
    {
      id: 1,
      name: 'Birthday Reminder',
      url: 'https://birthday-list-navy.vercel.app/',
      image: `${imageBirthday}`,
    },
  ],
    // PROJETOS GRANDES
  [
    {
      id: 2,
      name: 'Rede Social - Dogs',
      url: 'https://redesocialdogs.vercel.app/',
      image: `${imageDogs}`,
    },
    {
      id: 2,
      name: 'Bikcraft | Em desenvolvimento',
      url: 'https://bikcraft-redesign.vercel.app/',
      image: `${imageBikcraft}`,
    },
  ]
]