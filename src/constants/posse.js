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
    slug: 'st-germain-st-germain-spritz-le-grand-remix',
    brand: 'St-Germain Spritz',
    title: 'Le Grand Remix',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/ea93b30dd0ec692a65d07c16efa461806810d601-2048x1365.jpg?w=150&auto=format',
    description: `Partnering with top agencies OMD, Monks & Laurent Guyot, dexian Agency had to think big during summer 2025 : imagine and produce a strong concept that will bring fame and popular engagement with St-Germain Spritz. It ended up into "St-Germain Spritz - Le Grand Remix", a unique blend of webserie, influence, social media and brand experience campaign.

Afterwards, an ephemeral spot in Paris was created by dexian Agency, at Barapapa, to experience the St-Germain Spritz - Le Grand Remix experience.for real ! The chef's and influencer's food-pairing were offered with each St-Germain Spritz cocktail sold, during 1 month, on a breathtaking and tailor-made spot on les quais de Seine.`,
    infos: [
      'Expertise: Brand experience of the concept, design, venue scouting, bar deal, staffing, perfect execution of the chefs pairings, setup, dismantle, and storage.',
      'Client: St Germain',
      'Year: 2025',
    ],
    gallery: [
      {
        type: 'two',
        images: [
          'https://cdn.sanity.io/images/jzwvg1cr/production/862d832ecc80e101ce7dbe7b42fe031753be4d55-2048x1366.jpg?w=750&auto=format',
          'https://cdn.sanity.io/images/jzwvg1cr/production/aef0d16f6c74022a7e71002ba874eef3f3684e0d-2048x1366.jpg?w=750&auto=format',
        ],
      },
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/aab1c17ee7c06d94220533abc493a05c117bcc20-2048x1782.jpg?w=1500&auto=format',
      },
      {
        type: 'two',
        images: [
          'https://cdn.sanity.io/images/jzwvg1cr/production/e19725774e072d0e2ced74238d2f6048b40c11d7-2048x1366.jpg?w=750&auto=format',
          'https://cdn.sanity.io/images/jzwvg1cr/production/82495915251ac3fdd709f54721e279bf4c0f798d-8074x4542.jpg?w=750&auto=format',
        ],
      },
    ],
  },
  {
    slug: 'santa-teresa-brand-booth-bar-whisky-live',
    brand: 'Santa Teresa ',
    title: 'Brand Booth & Bar @ Whisky Live',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/f364433c6665918687af04ddc8c40a5962c34759-6240x4160.jpg?w=150&auto=format',
    description:
      'dexian Agency crafted an immersive brand booth and bar experience for Santa Teresa at Whisky Live, bringing the spirit of Venezuela to life through experiential design and hospitality.',
    infos: ['Client: Santa Teresa', 'Year: 2024'],
    gallery: [
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/f364433c6665918687af04ddc8c40a5962c34759-6240x4160.jpg?w=1500&auto=format',
      },
    ],
  },
  {
    slug: 'aberfeldy-craigellachie-brand-booth-bar-whisky-live',
    brand: 'Aberfeldy & Craigellachie ',
    title: 'Brand booth & bar @ Whisky Live',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/5bbd1ee4069979462e50171d039614c74919d619-6240x4160.jpg?w=150&auto=format',
    description:
      'A dual-brand experiential booth celebrating Scottish whisky heritage at Whisky Live, designed and produced by dexian Agency.',
    infos: ['Client: Aberfeldy & Craigellachie', 'Year: 2024'],
    gallery: [
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/5bbd1ee4069979462e50171d039614c74919d619-6240x4160.jpg?w=1500&auto=format',
      },
    ],
  },
  {
    slug: 'angels-envy-the-great-escape',
    brand: "Angel's Envy",
    title: 'The Great Escape',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/580aebf17748937ff7c39a3a3b8e323c38f4038b-5760x8640.jpg?w=150&auto=format',
    description:
      "An experiential campaign for Angel's Envy that invited audiences into a world of craft, escape, and premium bourbon storytelling.",
    infos: ["Client: Angel's Envy", 'Year: 2024'],
    gallery: [
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/580aebf17748937ff7c39a3a3b8e323c38f4038b-5760x8640.jpg?w=1500&auto=format',
      },
    ],
  },
  {
    slug: 'st-germain-spritz-club-2024',
    brand: 'St Germain',
    title: 'Spritz Club 2024',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/4c026fea115ed92e2a3d2920b3da97fc1173692e-7008x4672.jpg?w=150&auto=format',
    description:
      'The Spritz Club 2024 brought St-Germain to life through curated events, influence, and bold brand experiences across key markets.',
    infos: ['Client: St-Germain', 'Year: 2024'],
    gallery: [
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/4c026fea115ed92e2a3d2920b3da97fc1173692e-7008x4672.jpg?w=1500&auto=format',
      },
    ],
  },
  {
    slug: 'st-germain-la-serre-st-germain-spritz',
    brand: 'St-Germain',
    title: 'La Serre',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/ac05164a38047ad3e346f523053ad951bed816ad-3991x5986.jpg?w=150&auto=format',
    description:
      'La Serre — an immersive greenhouse experience celebrating the botanical soul of St-Germain Spritz.',
    infos: ['Client: St-Germain', 'Year: 2024'],
    gallery: [
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/ac05164a38047ad3e346f523053ad951bed816ad-3991x5986.jpg?w=1500&auto=format',
      },
    ],
  },
  {
    slug: 'santa-teresa-life-shaker-tour',
    brand: 'Santa Teresa',
    title: 'Life Shaker Tour',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/104b2fc30aa1e7ee677e12d13651b31ab4727607-3597x5396.jpg?w=150&auto=format',
    description:
      'A touring brand experience bringing the Santa Teresa Life Shaker to audiences across France.',
    infos: ['Client: Santa Teresa', 'Year: 2024'],
    gallery: [
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/104b2fc30aa1e7ee677e12d13651b31ab4727607-3597x5396.jpg?w=1500&auto=format',
      },
    ],
  },
  {
    slug: 'brand-booth-bar-duvel',
    brand: 'Duvel',
    title: 'Brand Booth & Bar Duvel',
    thumb:
      'https://cdn.sanity.io/images/jzwvg1cr/production/aff291fdfc7b7a1cd57443d7498451f49f7fe3a6-1080x810.jpg?w=150&auto=format',
    description:
      'A premium brand booth and bar activation for Duvel at a major industry event.',
    infos: ['Client: Duvel', 'Year: 2024'],
    gallery: [
      {
        type: 'single',
        src: 'https://cdn.sanity.io/images/jzwvg1cr/production/aff291fdfc7b7a1cd57443d7498451f49f7fe3a6-1080x810.jpg?w=1500&auto=format',
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
