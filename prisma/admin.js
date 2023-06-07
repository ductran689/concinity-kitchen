import prisma from './prisma';

// READ
export const getAllPics = async () => {
  const pics = await prisma.services.findMany({});
  return pics;
};
export const getCarousel = async () => {
  const caro = await prisma.top_img.findMany({});
  return caro;
};

export const getAbout = async () => {
  const about = await prisma.top_img.findMany({});
  return about;
};

export const getPic = async (id) => {
  const pic = await prisma.services.findUnique({
    where: { id },
  });
  return pic;
};

// CREATE
export const createUser = async (email, name, birthYear) => {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      birthYear,
    },
  });
  return user;
};

// UPDATE
export const updateUser = async (id, updateData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return user;
};

// DELETE
export const deleteUser = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
