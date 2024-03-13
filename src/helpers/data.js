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
    urlimg: `${kia}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://www.motor.com.co/__export/1691096656490/sites/motor/img/2022/11/15/2022-kia-seltos-facelift-1s_1.jpg_242310155.jpg'
  },
  {
    name: 'toyota',
    urlimg: `${toyota}`,
    width: 'w-[90px]',
    height: 'h-[60px]',
    imgUrl: 'https://www.motor.com.co/__export/1655140404919/sites/motor/img/2022/06/13/toyota-compact-cruiser-ev-1.jpg_554688468.jpg'
  },
  {
    name: 'suzuki',
    urlimg: `${suzuki}`,
    width: 'w-20',
    height: 'h-20',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/01/20230112-SUZUKI-FRONX-SUV-2024-01.jpg'
  },
  {
    name: 'chevrolet',
    urlimg: `${chevrolet}`,
    width: 'w-[100px]',
    height: 'h-[50px]',
    imgUrl: 'https://www.motor.com.co/__export/1684343462969/sites/motor/img/2023/01/22/chevrolet-montana-1464762_1.jpg_2006041591.jpg'
  },
  {
    name: 'bmw',
    urlimg: `${bmw}`,
    width: 'w-20',
    height: 'h-20',
    imgUrl: 'https://techcrunch.com/wp-content/uploads/2019/07/2019-bmw-i8-1.jpg'
  },
  {
    name: 'nissan',
    urlimg: `${nissan}`,
    width: 'w-[95px]',
    height: 'h-20',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/05/20220512-NISSAN-QASHQAI-2022-TURBO-NUEVA-GENERACION-COLOMBIA-PRECIO-CARACTERISTICAS-VERSIONES-VIDEO-01.jpg'
  },
  {
    name: 'mitsubishi',
    urlimg: `${mitsubishi}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/2022-outlander-launch-hero-image-source-1-1613556399.jpg?crop=0.7501090274749237xw:1xh;center,top&resize=1200:*'
  },
  {
    name: 'renault',
    urlimg: `${renault}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://i.blogs.es/e9ae78/megane-e-tech3/1366_2000.jpg'
  },
  {
    name: 'mercedez',
    urlimg: `${mercedez}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://www.motor.com.co/__export/1670344366498/sites/motor/img/2022/12/06/mercedes-amg-s-63-e-performance-00019_1.jpg_554688468.jpg'
  },
  {
    name: 'jeep',
    urlimg: `${jeep}`,
    width: 'w-[120px]',
    height: 'h-16',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/12/20221212-JEEP-GRAND-CHEROKEE-L-2023-COLOMBIA-PRECIO-FICHA-TECNICA-SUV-7-PASAJEROS-01.jpg'
  },
  {
    name: 'hyundai',
    urlimg: `${hyundai}`,
    width: 'w-[110px]',
    height: 'h-20',
    imgUrl: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/04/18-03-2023-PORTADA-Hyundai-Elantra-N-2024.jpg'
  },
  {
    name: 'ford',
    urlimg: `${ford}`,
    width: 'w-32',
    height: 'h-28',
    imgUrl: 'https://i1.wp.com/tiempomotor.com/wp-content/uploads/2022/01/Hennessey_VelociRaptor_600_1-1.jpg?resize=1170%2C610&ssl=1'
  },
  {
    name: 'mazda',
    urlimg: `${mazda}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://www.hibridosyelectricos.com/uploads/s1/38/77/88/2022122010350393354.jpeg'
  },
  {
    name: 'subaru',
    urlimg: `${subaru}`,
    width: 'w-24',
    height: 'h-20',
    imgUrl: 'https://fuelcarmagazine.com/wp-content/uploads/2021/11/Subaru-WRX-S4.jpg'
  }
]
