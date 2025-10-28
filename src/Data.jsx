import slideImg1 from './assets/slider-1.png';
import slideImg2 from './assets/slider-2.png';
import slideImg3 from './assets/slider-3.png';

import featureImg1 from './assets/food.svg';
import featureImg2 from './assets/chef.svg';
import featureImg3 from './assets/money.svg';
import featureImg4 from './assets/menu.svg';

import galleryImg1 from './assets/gallery-1.jpg';
import galleryImg2 from './assets/gallery-2.jpg';
import galleryImg3 from './assets/gallery-3.jpg';
import galleryImg4 from './assets/gallery-4.jpg';
import galleryImg5 from './assets/gallery-5.jpg';
import galleryImg6 from './assets/gallery-6.jpg';

import testimonialImg1 from './assets/testimonial-1.jpg';
import testimonialImg2 from './assets/testimonial-2.jpg';
import testimonialImg3 from './assets/testimonial-3.jpg';
import testimonialImg4 from './assets/testimonial-4.jpg';

import menuImg1 from './assets/menu-1.jpg';
import menuImg2 from './assets/menu-2.jpg';
import menuImg3 from './assets/menu-3.jpg';
import menuImg4 from './assets/menu-4.jpg';
import menuImg5 from './assets/menu-5.jpg';
import menuImg6 from './assets/menu-6.jpg';
import menuImg7 from './assets/menu-7.jpg';
import menuImg8 from './assets/menu-8.jpg';

export const navLinks = ['home', 'about', 'menu', 'gallery', 'testimonials'];

export const homeSlide = [
  {
    img: slideImg1,
    title: 'El <span> arte del fuego </span> Napolitano',
    description:
      'Hechas para disfrutar en pareja o entre risas con amigos. Pizzas de masa artesanal, ingredientes frescos y sabor napolitano en cada bocado. ¿Que esperas para pedir la tuya? Mira el menú y escribenos 🤌💚🤍❤️',
  },

  {
    img: slideImg2,
    title: 'Hechas con <span> Fuego y pensadas </span> para el sofá',
    description:
      'No necesitas viajar a Italia para probar una pizza napolitana real. La cocinamos con masa tradicional y horno de piedra — perfecta para dos o para compartir con amigos.',
  },

  {
    img: slideImg3,
    title: 'Tradición <span> italiana, espiritu </span> urbano',
    description:
      'Nada industrial, todo artesanal, donde el fuego transforma la masa en magia napolitana, que rescata la esencia de la pizza napolitana con ingredientes frescos y una masa artesanal',
  },
];

export const featureItem = [
  {
    id: 1,
    img: featureImg1,
    title: 'Fresh Testy Meals',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.',
  },

  {
    id: 2,
    img: featureImg2,
    title: 'Experienced Chefs',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.',
  },

  {
    id: 3,
    img: featureImg3,
    title: 'Affordable Price',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.',
  },

  {
    id: 4,
    img: featureImg4,
    title: 'Daily Fresh Menu',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words.',
  },
];

export const gallery = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
];

export const testimonialItem = [
  {
    img: testimonialImg1,
    name: 'Niesha Phips',
    description:
      'There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.',
    stars: 4.5,
  },

  {
    img: testimonialImg2,
    name: 'Daniel Porter',
    description:
      'There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.',
    stars: 5,
  },

  {
    img: testimonialImg3,
    name: 'Ebony Swihart',
    description:
      'There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.',
    stars: 4.8,
  },

  {
    img: testimonialImg4,
    name: 'Loreta Jones',
    description:
      'There are many variations passage available the majority have suffered of the alteration in some form by injected humour or randomised words which look even slightly believable.',
    stars: 4.4,
  },
];

export const menu = [
  {
    id: 1,
    img: menuImg1,
    category: 'Lunch',
    title: 'Roasted Beef',
    description: 'It is long established of fact that reader will distracted.',
    price: 50.25,
    reviews: 1600,
    stars: 5,
  },

  {
    id: 2,
    img: menuImg2,
    category: 'Dinner',
    title: 'Chicken Bread',
    description: 'It is long established of fact that reader will distracted.',
    price: 29.65,
    reviews: 1500,
    stars: 4.9,
  },

  {
    id: 3,
    img: menuImg3,
    category: 'Dinner',
    title: 'Roasted Steak',
    description: 'It is long established of fact that reader will distracted.',
    price: 60.35,
    reviews: 1800,
    stars: 4.5,
  },

  {
    id: 4,
    img: menuImg4,
    category: 'Lunch',
    title: 'Fish Steak',
    description: 'It is long established of fact that reader will distracted.',
    price: 40.79,
    reviews: 1300,
    stars: 4.8,
  },

  {
    id: 5,
    img: menuImg5,
    category: 'Breakfast',
    title: 'Vegetable Salad',
    description: 'It is long established of fact that reader will distracted.',
    price: 25.49,
    reviews: 1700,
    stars: 4.4,
  },

  {
    id: 6,
    img: menuImg6,
    category: 'Fast Food',
    title: 'Daily Fastfood',
    description: 'It is long established of fact that reader will distracted.',
    price: 45.19,
    reviews: 1900,
    stars: 4.5,
  },

  {
    id: 7,
    img: menuImg7,
    category: 'Lunch',
    title: 'Fresh Seafood',
    description: 'It is long established of fact that reader will distracted.',
    price: 69.25,
    reviews: 1400,
    stars: 4.4,
  },

  {
    id: 8,
    img: menuImg8,
    category: 'Dessert',
    title: 'Chocolate Shake',
    description: 'It is long established of fact that reader will distracted.',
    price: 35.62,
    reviews: 1200,
    stars: 5.0,
  },
];

export const footerLinks = ['about', 'menu', 'testimonials'];