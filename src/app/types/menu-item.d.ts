export interface MenuItem {
  label: string;
  icon?: string;
  children?: MenuItem[];
  disabled?: boolean;
}
