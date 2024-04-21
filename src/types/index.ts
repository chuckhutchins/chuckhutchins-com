export type Coffee = {
  index: number;
  name: string;
  roaster: string;
  rating: number;
  favorite?: boolean;
};

export type CoffeeRating = 'all' | '1' | '2' | '3' | '4' | '5';

export type Media = {
  index: number;
  title: string;
  image: string;
  author?: string;
  medium?: string;
  platform?: string;
  season?: string;
  start?: string;
  end: string;
  rating: string;
  finish: number;
};

export type Wishlist = {
  image: string;
  link: string;
  name: string;
};
