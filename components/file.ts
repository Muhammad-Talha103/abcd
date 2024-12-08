import { StaticImageData } from "next/image";


export interface heroProps{
    heading: string
    tittle?: string
    text?: string
}

 

// sortInterface.ts
export interface SortProps {
    heading: string;
    about: string;
    tittle?: string;
    tittle1?: string;
    tittle2?: string;
    icons?: React.ReactNode[];
  }

  export interface GridItemsProps{
    tittle: string;
    text?: string;
    image?: StaticImageData;
    price?: string;
    price1?: string;
  }
  