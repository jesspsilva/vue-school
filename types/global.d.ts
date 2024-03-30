declare interface ILogo {
  alt: string;
  src: string;
}

declare interface IPricingCard {
  header: {
    icon: string;
    title: string;
  },
  features: {
    title: string;
    list: IFeature[];
  },
  monthlySeatPrice: number
}