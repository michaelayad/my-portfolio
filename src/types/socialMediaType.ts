export type SocialMediaType = {
  id?: number; // Optional because it will be autogenerated by Prisma
  name?: string;
  link?: string;
  svgIcon?: string;
  profileId: number; // Foreign key to the Profile model
  createdAt?: Date; // Optional because it will be autogenerated by Prisma
  updatedAt?: Date; // Optional because it will be autogenerated by Prisma
};
