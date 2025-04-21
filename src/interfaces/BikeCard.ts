export interface Bike {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

export interface CardsContainerProps {
  bikes: Bike[];
}
