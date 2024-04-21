export type CoffeeItem = {
  index: number;
  name: string;
  roaster: string;
  rating: number;
  favorite?: boolean;
};

export type CoffeeRating = 'all' | '1' | '2' | '3' | '4' | '5';

export type WishlistItem = {
  image: string;
  link: string;
  name: string;
};
