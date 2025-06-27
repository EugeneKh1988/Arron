
export interface ILink {
    name?: string;
    href?: string; 
}


export interface IImage {
    name?: string;
    href?: string;
}

export interface IAdvantageItem {
    title?: string;
    description?: string;
    imageSrc?: string;
}

export interface IGadgetItem {
    title?: string,
    imageSrc?: string,
    additionalIconName?: string,
    url?: string,
    decorationImage?: {
      src: string,
      size: {
        width: number,
        height: number,
      }
    },
  }

  export interface IContact {
    values?: string[];
    value?: string;
    imageSrc: string;
  }