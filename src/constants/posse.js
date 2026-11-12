import workloopHome from '../projects/prod1/download.png'
import workloopProcess from '../projects/prod1/FireShot Capture 003 - How It Works - Workloop - [www.workloop.info].png'
import workloopBlog from '../projects/prod1/FireShot Capture 006 - Workloop Blog - Premium Editorial Talent Strategy - [www.workloop.info].png'
import cloverDashboard from '../projects/prod2/download.png'
import cloverClientPortal from '../projects/prod2/FireShot Capture 010 - Clover Community Healthcare — Client Support Portal_ - [clover-new-4rlp.vercel.app].png'
import cloverRequestForm from '../projects/prod2/FireShot Capture 011 - Clover Community Healthcare — Client Support Portal_ - [clover-new-4rlp.vercel.app].png'

const CAROUSEL_BASE = [
  {
    path: '4baab232f1d8e6b6be9eba807e5a5eeccf52c657-2055x2220.jpg',
    alt: "angel's envy",
  },
  {
    path: '6d92d15beeceb1aebbdc14a72fed740d98498ca6-6001x4001.jpg',
    alt: 'Santa Teresa',
  },
  {
    path: '5bbd1ee4069979462e50171d039614c74919d619-6240x4160.jpg',
    alt: 'Aberfeldy & Craigellachie',
  },
  {
    path: 'ea93b30dd0ec692a65d07c16efa461806810d601-2048x1365.jpg',
    alt: 'Saint Germain',
  },
]

const sanityUrl = (path, width) =>
  `https://cdn.sanity.io/images/jzwvg1cr/production/${path}?w=${width}&auto=format`

export const CAROUSEL_MEDIA = CAROUSEL_BASE.map((item) => ({
  alt: item.alt,
  src: sanityUrl(item.path, 1400),
}))

export const CAROUSEL_MEDIA_MOBILE = CAROUSEL_BASE.map((item) => ({
  alt: item.alt,
  src: sanityUrl(item.path, 480),
}))

export const HOME_HEADLINE = `crafting
ideas & telling
stories for
bold brands.`

export const WORKS = [
  {
    slug: 'workloop-hiring-platform',
    brand: 'Workloop',
    title: 'Hiring made\nsimple',
    thumb: workloopHome,
    description:
      'A friendly website that helps growing teams find and hire remote talent. Clear pages explain the process, introduce the service, and share useful hiring advice.',
    infos: ['Project: Hiring platform and website', 'Includes: Main site, process pages, and blog'],
    gallery: [
      {
        type: 'single',
        src: workloopHome,
        alt: 'Workloop homepage introducing its remote hiring service',
      },
      {
        type: 'single',
        src: workloopProcess,
        alt: 'Workloop page explaining its hiring process',
      },
      {
        type: 'single',
        src: workloopBlog,
        alt: 'Workloop blog with hiring advice and articles',
      },
    ],
  },
  {
    slug: 'clover-healthcare-support-portal',
    brand: 'Clover Community Healthcare',
    title: 'Support, made\nsimpler',
    thumb: cloverDashboard,
    description:
      'A simple online space where patients can request help and care teams can keep things organized. The portal brings support forms, account tools, and clear dashboards together in one place.',
    infos: ['Project: Healthcare support portal', 'Includes: Patient and team dashboards, support request form'],
    gallery: [
      {
        type: 'single',
        src: cloverDashboard,
        alt: 'Clover healthcare team dashboard',
      },
      {
        type: 'single',
        src: cloverClientPortal,
        alt: 'Clover patient dashboard for tracking support requests',
      },
      {
        type: 'single',
        src: cloverRequestForm,
        alt: 'Clover multi-step patient support request form',
      },
    ],
  },
]

export const NETWORK_CARDS = [
  {
    image:
      'https://cdn.sanity.io/images/jzwvg1cr/production/36acb21f026cf54fcaaee8f50c34b8a91907b521-853x1280.jpg?w=600&auto=format',
    name: 'Brice - Juicy Création ',
    role: 'Event production studio',
    link: 'https://www.linkedin.com/in/brice-goillot-64596768/',
  },
  {
    image:
      'https://cdn.sanity.io/images/jzwvg1cr/production/f3ee87e8aeab1a9a0f718b7386fa4be7b8b4fd27-1001x1001.jpg?w=600&auto=format',
    name: 'Jean Charles ',
    role: '3D Design',
    link: 'http://Jeancharlesduboc.com',
  },
  {
    image:
      'https://cdn.sanity.io/images/jzwvg1cr/production/3655f235b61494c81d3dadcd37892743111711ec-2162x2884.jpg?w=600&auto=format',
    name: 'Galatée & Zoé - Gazoline Studio ',
    role: 'Set Designers',
    link: 'https://www.linkedin.com/company/gazoline-studio/posts/?feedView=all',
  },
  {
    image:
      'https://cdn.sanity.io/images/jzwvg1cr/production/6819f07ff5dc4734ca955c1f1850b8a85c406aa6-3744x5616.jpg?w=600&auto=format',
    name: 'Maxence - Requin Cocktail ',
    role: 'Food and Beverages Consultant',
    link: 'https://www.linkedin.com/in/maxence-piattelli-091849194/',
  },
  {
    image:
      'https://cdn.sanity.io/images/jzwvg1cr/production/d3bb98e5f5b340ff57df63c2c850249861f9f5ff-1600x1066.jpg?w=600&auto=format',
    name: 'Charles - Les cocktails de Charles ',
    role: 'Food and Beverages Consultant',
    link: 'https://www.lescocktailsdecharles.fr/',
  },
  {
    image:
      'https://cdn.sanity.io/images/jzwvg1cr/production/a2d0aca14f0b9928cf54894085276747a0e82017-1536x1536.jpg?w=600&auto=format',
    name: 'Julien - Skillz Agency  ',
    role: 'Film and Content Producer',
    link: 'https://www.linkedin.com/in/juliendeporet/',
  },
  {
    image:
      'https://cdn.sanity.io/images/jzwvg1cr/production/d6cad6fc904caab9827f1287a1bd2978391a6cd5-2560x3840.jpg?w=600&auto=format',
    name: 'Constance - Studio Bloom Velvet ',
    role: 'Photographer',
    link: 'https://www.linkedin.com/in/constanceibanez/',
  },
]

export const SPEAKER_ICON =
  "data:image/svg+xml,%3csvg%20fill='none'%20height='10'%20viewBox='0%200%2011%2010'%20width='11'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m8.70153%201.90466c.60631.87113.9634%201.93997.9634%203.09501%200%201.15505-.35709%202.22389-.9634%203.09502m-1.71222-4.8636c.33832.50132.53673%201.111.53673%201.76858s-.19841%201.26727-.53673%201.76859m-2.61414-5.14406-1.35421%201.39969c-.07399.07647-.11098.1147-.15415.14205-.03828.02424-.08.0421-.12365.05294-.04923.01221-.10155.01221-.20618.01221h-.74316c-.23958%200-.35937%200-.45087.04819-.0805.04239-.14594.11003-.18695.19323-.04662.09458-.04662.21839-.04662.46601v2.1223c0%20.24763%200%20.37144.04662.46602.04101.0832.10645.15084.18695.19323.0915.04819.21129.04819.45087.04819h.74316c.10463%200%20.15695%200%20.20618.01221.04365.01083.08537.0287.12365.05294.04317.02734.08016.06558.15415.14205l1.35421%201.39969c.18324.18941.27487.28411.35353.29051.06826.00555.13496-.02301.17943-.07682.05125-.06202.05124-.19594.05124-.4638v-6.25073c0-.26786.00001-.40179-.05124-.4638-.04447-.05381-.11117-.08237-.17943-.07682-.07866.0064-.17028.1011-.35353.29051z'%20stroke='%23111'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"

export const COPY_ICON =
  "data:image/svg+xml,%3csvg%20fill='none'%20height='12'%20viewBox='0%200%2011%2012'%20width='11'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m4%204v-1.4c0-.56005%200-.84008.10899-1.05399.09588-.18816.24886-.34114.43702-.43702.21391-.10899.49394-.10899%201.05399-.10899h2.8c.56005%200%20.84008%200%201.05399.10899.18816.09588.34114.24886.43702.43702.10899.21391.10899.49394.10899%201.05399v3.8c0%20.56005%200%20.84008-.10899%201.05399-.09588.18816-.24886.34114-.43702.43702-.21391.10899-.49394.10899-1.05399.10899h-1.4m-4.4%203h2.8c.56005%200%20.84008%200%201.05399-.109.18816-.0959.34114-.2488.43702-.437.10899-.2139.10899-.49395.10899-1.054v-3.8c0-.56005%200-.84008-.10899-1.05399-.09588-.18816-.24886-.34114-.43702-.43702-.21391-.10899-.49394-.10899-1.05399-.10899h-2.8c-.56005%200-.84008%200-1.05399.10899-.18816.09588-.34114.24886-.43702.43702-.10899.21391-.10899.49394-.10899%201.05399v3.8c0%20.56005%200%20.8401.10899%201.054.09588.1882.24886.3411.43702.437.21391.109.49394.109%201.05399.109z'%20stroke='%23c42a75'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
