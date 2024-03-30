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

declare interface IWorkshop {
  date: string,
  live: boolean,
  duration: string;
  title: string;
  description: string;
  teacher: {
    name: string;
    avatar: string;
  }
}

declare interface INavigationItem {
  label: string;
  to: string;
  children: INavigationItem[];
}