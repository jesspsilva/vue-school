declare interface INavigationItem {
  label: string;
  to: string;
  children: INavigationItem[];
}