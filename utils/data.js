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
      /*   sub_images: [
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
      ], */
      subServices: [
        {
          name: 'New Kitchen',
          slug: 'new_kitchen',
          key: 'newkitchen',
          image: '/images/con_kit_7.jpg',
          pics: [
            {
              key: 'nk1',
              image: '/images/con_kit_11.jpg',
            },
            {
              key: 'nk2',
              image: '/images/con_kit_12.jpg',
            },
            {
              key: 'nk3',
              image: '/images/dark_kit_4.jpg',
            },
            {
              key: 'nk4',
              image: '/images/con_kit_9.jpg',
            },
            {
              key: 'nk5',
              image: '/images/con_kit_6.jpg',
            },
            {
              key: 'nk6',
              image: '/images/dark_kit_7.jpg',
            },
            {
              key: 'nk7',
              image: '/images/dark_kit_6.jpg',
            },
            {
              key: 'nk8',
              image: '/images/dark_kit_4.jpg',
            },
            {
              key: 'nk9',
              image: '/images/dark_kit_3.jpg',
            },
          ],
        },
        {
          name: 'Renovation',
          slug: 'renovation',
          key: 'kitchenrenovation',
          image: '/images/con_kit_6.jpg',
          pics: [
            {
              key: '',
              image: '',
            },
          ],
        },
        {
          name: 'Flat Back Cabinet',
          slug: 'flatback_cabinet',
          key: 'flatback',
          image: '/images/con_kit_4.jpg',
          pics: [
            {
              key: '',
              image: '',
            },
          ],
        },
        {
          name: 'Cut to Size',
          slug: 'cut2size',
          key: 'cut2size',
          image: '/images/con_kit_3.jpg',
          pics: [
            {
              key: '',
              image: '',
            },
          ],
        },
        {
          name: 'Cabinet Prefacing',
          slug: 'cabinetpreface',
          key: 'cabipreface',
          image: '/images/con_kit_2.jpg',
          pics: [
            {
              key: '',
              image: '',
            },
          ],
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
          image: '/images/van-1.webp',
        },
        {
          name: 'van-2',
          key: 'van-2',
          image: '/images/van-2.webp',
        },
        {
          name: 'van-3',
          key: 'van-3',
          image: '/images/van-8.webp',
        },
        {
          name: 'van-4',
          key: 'van-4',
          image: '/images/van-4.webp',
        },
        {
          name: 'van-5',
          key: 'van-5',
          image: '/images/van-5.webp',
        },
        {
          name: 'van-6',
          key: 'van-6',
          image: '/images/van-6.webp',
        },
        {
          name: 'van-7',
          key: 'van-7',
          image: '/images/van-7.webp',
        },
        {
          name: 'van-8',
          key: 'van-8',
          image: '/images/van-9.webp',
        },
      ],
      subServices: [
        {
          name: 'Garage',
          slug: 'garage',
          key: 'garage',
          image: '/images/con_kit_4.jpg',
          pics: [
            {
              key: 'gs',
              image: '/images/con_kit_4.jpg',
            },
          ],
        },
      ],
      key: 'vanities',
      image: '/images/v-c.jpg',
      content:
        'Unleash your imagination to explore the possibilities of your dream bathroom. Wake up to a Perfect Kitchens’ exclusive vanity',
    },
    {
      name: 'Custom Joinery',
      slug: 'custom',
      cover: '/images/cover-3.webp',
      sub_images: [
        {
          name: 'Cus-1',
          key: 'cus-1',
          image: '/images/c-2.webp',
        },
        {
          name: 'Cus-2',
          key: 'cus-2',
          image: '/images/c-3.webp',
        },
        {
          name: 'Cus-3',
          key: 'cus-3',
          image: '/images/c-4.webp',
        },
        {
          name: 'Cus-4',
          key: 'cus-4',
          image: '/images/c-5.webp',
        },
        {
          name: 'Cus-6',
          key: 'cus-6',
          image: '/images/c-6.webp',
        },
        {
          name: 'Cus-7',
          key: 'cus-7',
          image: '/images/c-7.webp',
        },
        {
          name: 'Cus-8',
          key: 'cus-8',
          image: '/images/c-8.webp',
        },
        {
          name: 'Cus-9',
          key: 'cus-9',
          image: '/images/c-9.webp',
        },
        {
          name: 'Cus-10',
          key: 'cus-10',
          image: '/images/c-10.webp',
        },
      ],
      subServices: [
        {
          name: 'Garage',
          slug: 'garage',
          key: 'garage',
          image: '/images/con_kit_4.jpg',
          pics: [],
        },
      ],
      key: 'custom',
      image: '/images/c-c.jpg',
      content:
        'Perfect Kitchens’ specialist cabinet makers and designers will let you achieve that unique custom touch to make your home truly yours',
    },
    {
      name: 'Storage',
      slug: 'storage',
      cover: '/images/cover-4.webp',
      /* sub_images: [
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
      ], */
      subServices: [
        {
          name: 'Garage',
          slug: 'garage',
          key: 'garage',
          image: '/images/s-2.webp',
          pics: [
            {
              key: 's-1',
              image: '/images/S-1.webp',
            },
            {
              key: 's-2',
              image: '/images/s-2.webp',
            },
            {
              key: 's-3',
              image: '/images/s-3.webp',
            },

            {
              key: 's-5',
              image: '/images/s-5.webp',
            },
            {
              key: 's-9',
              image: '/images/s-9.webp',
            },
            {
              key: 's-10',
              image: '/images/s-10.webp',
            },
            {
              key: 's-11',
              image: '/images/s-11.webp',
            },
            {
              key: 's-13',
              image: '/images/s-13.webp',
            },
            {
              key: 's-14',
              image: '/images/s-14.webp',
            },
            {
              key: 's-17',
              image: '/images/s-17.webp',
            },
          ],
        },
        {
          name: 'Wardrobes',
          slug: 'wardrobes',
          key: 'nwardrobe',
          image: '/images/w-1.webp',
          pics: [
            {
              key: 'w-2',
              image: '/images/w-2.webp',
            },
            {
              key: 'w-3',
              image: '/images/w-3.webp',
            },
            {
              key: 'w-4',
              image: '/images/w-4.webp',
            },
            {
              key: 'w-5',
              image: '/images/w-5.webp',
            },
            {
              key: 'w-6',
              image: '/images/w-6.webp',
            },
            {
              key: 'w-7',
              image: '/images/w-7.webp',
            },
            {
              key: 'w-8',
              image: '/images/w-8.webp',
            },
            {
              key: 'w-9',
              image: '/images/w-9.webp',
            },
            {
              key: 'w-10',
              image: '/images/w-10.webp',
            },
          ],
        },
      ],
      key: 'storage',
      image: '/images/s-s.jpg',
      content:
        'Discover our range of stylish and innovative storage solutions created to maximise space using intelligent design and modern technology',
    },
    {
      name: 'Kitchen Design',
      slug: 'design',
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
      subServices: [
        {
          name: 'Garage',
          slug: 'garage',
          key: 'garage',
          image: '/images/con_kit_4.jpg',
          pics: [
            {
              key: 'gs',
              image: '/images/con_kit_4.jpg',
            },
          ],
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
        "After obtaining 3 quotes for our new kitchen, Built to Desire was not only the most affordable but the materials used were of better quality. Mark was professional and courteous, spending time going through our needs and wants. Mark and Angela always answered my calls and emails along the way. I wouldn't hesitate recommenkeyng Built to Desire to anyone in the future",
    },
    {
      name: 'Ken Phan – Fairfield',
      key: 2,
      content:
        'A professional approach to all aspects of getting our new kitchen exactly as we wanted it.',
    },
  ],
  promotion: [
    {
      name: 'Promo 1',
      image: '/images/promo-1.webp',
      content:
        'Free a stainless steel Westinghouse 600m dishwasher for any quote over $15.999',
      link: '',
      key: 'promo1',
    },
    {
      name: 'Promo 2',
      image: '',
      content: 'Coming soon',
      link: '',
      key: 'promo2',
    },
  ],
};

export default data;
