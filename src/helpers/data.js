import kia from '../assets/marcas/kia.webp'
import toyota from '../assets/marcas/toyota.webp'
import suzuki from '../assets/marcas/suzuki.webp'
import chevrolet from '../assets/marcas/chevrolet.webp'
import nissan from '../assets/marcas/nissan.webp'
import bmw from '../assets/marcas/bmw.webp'
import subaru from '../assets/marcas/subaru.webp'
import renault from '../assets/marcas/renault.webp'
import mitsubishi from '../assets/marcas/mitsubishi.webp'
import mercedez from '../assets/marcas/mercedez.webp'
import mazda from '../assets/marcas/mazda.webp'
import jeep from '../assets/marcas/jeep.webp'
import hyundai from '../assets/marcas/hyundai.webp'
import ford from '../assets/marcas/ford.webp'

import kiaHover from '../assets/marcas/hovercars/kia.webp'
import toyotaHover from '../assets/marcas/hovercars/toyota.webp'
import suzukiHover from '../assets/marcas/hovercars/suzuki.webp'
import chevroletHover from '../assets/marcas/hovercars/chevrolet.webp'
import nissanHover from '../assets/marcas/hovercars/nissan.webp'
import bmwHover from '../assets/marcas/hovercars/bmw.webp'
import subaruHover from '../assets/marcas/hovercars/subaru.webp'
import renaultHover from '../assets/marcas/hovercars/renault.webp'
import mitsubishiHover from '../assets/marcas/hovercars/mitsubishi.webp'
import mercedezHover from '../assets/marcas/hovercars/mercedez.webp'
import mazdaHover from '../assets/marcas/hovercars/mazda.webp'
import jeepHover from '../assets/marcas/hovercars/jeep.webp'
import hyundaiHover from '../assets/marcas/hovercars/hyundai.webp'
import fordHover from '../assets/marcas/hovercars/ford.webp'

import { AiFillHome } from 'react-icons/ai'
import { FaCarAlt } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'

export const appRoutes = [
  {
    name: 'Inicio',
    path: '/',
    icon: AiFillHome
  },
  {
    name: 'Nuestros Autos',
    path: '/cars',
    icon: FaCarAlt
  },
  {
    name: 'Nosotros',
    path: '/about',
    icon: RiTeamFill
  }
]

export const brandsCarrousel = [
  {
    name: 'Kia',
    urlimg: kia,
    width: 'w-24',
    height: 'h-20',
    imgUrl: kiaHover
  },
  {
    name: 'toyota',
    urlimg: toyota,
    width: 'w-[90px]',
    height: 'h-[60px]',
    imgUrl: toyotaHover
  },
  {
    name: 'suzuki',
    urlimg: suzuki,
    width: 'w-20',
    height: 'h-20',
    imgUrl: suzukiHover
  },
  {
    name: 'chevrolet',
    urlimg: chevrolet,
    width: 'w-[100px]',
    height: 'h-[50px]',
    imgUrl: chevroletHover
  },
  {
    name: 'bmw',
    urlimg: bmw,
    width: 'w-20',
    height: 'h-20',
    imgUrl: bmwHover
  },
  {
    name: 'nissan',
    urlimg: nissan,
    width: 'w-[95px]',
    height: 'h-20',
    imgUrl: nissanHover
  },
  {
    name: 'mitsubishi',
    urlimg: mitsubishi,
    width: 'w-24',
    height: 'h-20',
    imgUrl: mitsubishiHover
  },
  {
    name: 'renault',
    urlimg: renault,
    width: 'w-24',
    height: 'h-20',
    imgUrl: renaultHover
  },
  {
    name: 'mercedez',
    urlimg: mercedez,
    width: 'w-24',
    height: 'h-20',
    imgUrl: mercedezHover
  },
  {
    name: 'jeep',
    urlimg: jeep,
    width: 'w-[120px]',
    height: 'h-16',
    imgUrl: jeepHover
  },
  {
    name: 'hyundai',
    urlimg: hyundai,
    width: 'w-[110px]',
    height: 'h-20',
    imgUrl: hyundaiHover
  },
  {
    name: 'ford',
    urlimg: ford,
    width: 'w-32',
    height: 'h-28',
    imgUrl: fordHover
  },
  {
    name: 'mazda',
    urlimg: mazda,
    width: 'w-24',
    height: 'h-20',
    imgUrl: mazdaHover
  },
  {
    name: 'subaru',
    urlimg: subaru,
    width: 'w-24',
    height: 'h-20',
    imgUrl: subaruHover
  }
]

const year = new Date().getFullYear()
const ages = []

for (let i = 0; i <= 14; i++) {
  ages.push(year - i)
}

export { ages }
