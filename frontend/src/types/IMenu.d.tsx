import { Menu } from './Menu.d';

export interface IMenu {
  name: string;
  url?: string;
  submenus?: Menu[];
}
