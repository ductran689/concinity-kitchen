const data = {
  products: [
    {
      name: 'First name',
      slug: 'first-name',
      category: 'cabinet',
      image: '/images/cabinet_1.jpg',
      price: 90,
      countInStock: 10,
    },
    {
      name: 'First name',
      slug: 'first-name',
      category: 'cabinet',
      image: '/images/cabinet_1.jpg',
      price: 90,
      countInStock: 10,
    },
    {
      name: 'Second name',
      slug: 'second-name',
      category: 'cabinet',
      image: '/images/cabinet_2.jpg',
      price: 290,
      countInStock: 0,
    },
    {
      name: 'Second name',
      slug: 'second-name',
      category: 'cabinet',
      image: '/images/cabinet_2.jpg',
      price: 290,
      countInStock: 0,
    },
    {
      name: 'Third name',
      slug: 'third-name',
      category: 'cabinet',
      image: '/images/kitchen_1.jpg',
      price: 120,
      countInStock: 90,
    },
  ],
  about_images: [
    {
      name: 'about_1',
      image: '/images/cabinet_1.jpg',
    },
    {
      name: 'about_2',
      image: '/images/cabinet_2.jpg',
    },
    {
      name: 'about_3',
      image: '/images/kitchen_1.jpg',
    },
  ],
  services: [
    {
      name: 'Kitchen',
      slug: 'kitchen',
      cover: '/images/cover-1.webp',
      sub_images: [
        {
          name: 'kit-1',
          key: 'kit-1',
          image: '/images/kit-1.jpg',
        },
        {
          name: 'kit-2',
          key: 'kit-2',
          image: '/images/kit-2.jpg',
        },
        {
          name: 'kit-3',
          key: 'kit-3',
          image: '/images/kit-3.jpg',
        },
        {
          name: 'kit-4',
          key: 'kit-4',
          image: '/images/kit-4.jpg',
        },
        {
          name: 'kit-5',
          key: 'kit-5',
          image: '/images/kit-5.jpg',
        },
      ],
      key: '123',
      image: '/images/dark_kit_2.jpg',
      content:
        'Let us create you a kitchen to fulfil your aspirations. Custom made, exquisitely designed and perfectly installed using the latest tools and hardware.',
    },
    {
      name: 'Vanities',
      slug: 'vanities',
      cover: '/images/cover-2.webp',
      sub_images: [
        {
          name: 'van-1',
          key: 'van-1',
          image: '/images/kit-6.jpg',
        },
        {
          name: 'van-2',
          key: 'van-2',
          image: '/images/kit-7.jpg',
        },
        {
          name: 'van-3',
          key: 'van-3',
          image: '/images/kit-8.jpg',
        },
        {
          name: 'van-4',
          key: 'van-4',
          image: '/images/kit-12.jpg',
        },
        {
          name: 'van-5',
          key: 'van-5',
          image: '/images/kit-10.jpg',
        },
        {
          name: 'van-6',
          key: 'van-6',
          image: '/images/kit-11.jpg',
        },
      ],
      key: 'vanities',
      image: '/images/dark_kit_3.jpg',
      content:
        'Unleash your imagination to explore the possibilities of your dream bathroom. Wake up to a Perfect Kitchens’ exclusive vanity',
    },
    {
      name: 'Custom',
      slug: 'custom',
      cover: '/images/cover-3.webp',
      sub_images: [
        {
          name: 'Cus-1',
          key: 'cus-1',
          image: '/images/kit-20.jpg',
        },
        {
          name: 'Cus-2',
          key: 'cus-2',
          image: '/images/kit-21.jpg',
        },
        {
          name: 'Cus-3',
          key: 'cus-3',
          image: '/images/kit-22.jpg',
        },
        {
          name: 'Cus-4',
          key: 'cus-4',
          image: '/images/kit-23.jpg',
        },
      ],
      key: 'custom',
      image: '/images/dark-kit_1.jpg',
      content:
        'Perfect Kitchens’ specialist cabinet makers and designers will let you achieve that unique custom touch to make your home truly yours',
    },
    {
      name: 'Storage',
      slug: 'storage',
      cover: '/images/cover-4.webp',
      sub_images: [
        {
          name: 'sto-1',
          key: 'sto-1',
          image: '/images/kit-26.jpg',
        },
        {
          name: 'sto-2',
          key: 'sto-2',
          image: '/images/kit-25.jpg',
        },
        {
          name: 'sto-3',
          key: 'sto-3',
          image: '/images/kit-24.jpg',
        },
        {
          name: 'sto-4',
          key: 'sto-4',
          image: '/images/kit-23.jpg',
        },
      ],
      key: 'storage',
      image: '/images/dark_kit_7.jpg',
      content:
        'Discover our range of stylish and innovative storage solutions created to maximise space using intelligent design and modern technology',
    },
  ],
  gallery: [
    {
      name: 'KITCHENS',
      slug: 'kitchen',
      image: '/images/con_kit-1.jpg',
    },
    {
      name: 'BEFOR & AFTER',
      slug: 'before_after',
      image: '/images/con_kit-2.jpg',
    },
    {
      name: 'VANITIES',
      slug: 'vanities',
      image: '/images/cabinet_1.jpg',
    },
    {
      name: 'WARDROBES',
      slug: 'wardrobes',
      image: '/images/con_wardrobe_1.jpg',
    },
    {
      name: 'LAUDRIES',
      slug: 'laundries',
      image: '/images/con_kit-3.jpg',
    },
    {
      name: 'CUSTOM JOINERY',
      slug: 'custom_joinery',
      image: '/images/con_kit-12.jpg',
    },
    {
      name: 'OUTDOOR KITCHEN / BBQ',
      slug: 'outdoor_kitchen',

      image: '/images/con_kit-7.jpg',
    },
  ],
  testimonial: [
    {
      name: 'Warner – Moss Vale',
      key: 1,
      content:
        "After obtaining 3 quotes for our new kitchen, Built to Desire was not only the most affordable but the materials used were of better quality. Mark was professional and courteous, spending time going through our needs and wants. Mark and Angela always answered my calls and emails along the way. I wouldn't hesitate recommenidng Built to Desire to anyone in the future",
    },
    {
      name: 'Ken Phan – Fairfield',
      key: 2,
      content:
        'A professional approach to all aspects of getting our new kitchen exactly as we wanted it.',
    },
  ],
};

export default data;
