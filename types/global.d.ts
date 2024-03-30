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

declare interface ICoursesDetails {
  number: number;
  icon: string;
  iconLabel: string;
}

declare interface IFeature {
  available: boolean;
  label: string;
  featured: boolean;
}