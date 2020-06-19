const menuList = [
  {
    name: 'Home',
    location: '/',
  },
  {
    name: 'About',
    location: '/about',
  },
  {
    name: 'Products',
    location: '/products',
    subMenu: [
      {
        name: 'Granite',
        location: '/products/granite',
      },
      {
        name: 'Marble',
        location: '/products/marble',
      },
      {
        name: 'Quartzite',
        location: '/products/quartzite',
      },
      {
        name: 'Quartz',
        location: '/products/quartz',
      },
      {
        name: 'Limestone',
        location: '/products/limestone',
      },
    ],
  },
  {
    name: 'Neolith',
    location: '/neolith',
    subMenu: [
      {
        name: 'Calacatta',
        location: '/products/calacatta',
      },
      {
        name: 'Calacatta Gold',
        location: '/products/calacatta-gold',
      },
      {
        name: 'Carrara',
        location: '/products/carrara',
      },
      {
        name: 'Estatuario',
        location: '/products/estatuario',
      },
      {
        name: 'Nero Marquina',
        location: '/products/nero-marquina',
      },
    ],
  },
  {
    name: 'Gallery',
    location: '/gallery',
  },
  {
    name: 'Contact Us',
    location: '/contact-us',
  },
];

export default menuList;
