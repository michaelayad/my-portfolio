export type ProfileType = {
  id?: Number;
  name?: string;
  bio?: string;
  title?: string;
  image?: string;
  imageUrl?: string;
  logo?: string;
  cv?: string;
  experience_years?: number;
  createdAt?: Date; // Optional because it will be autogenerated by Prisma
  updatedAt?: Date;
};
