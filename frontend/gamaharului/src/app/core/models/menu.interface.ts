import { IconName, IconPrefix } from '@fortawesome/angular-fontawesome';

export interface MenuItem {
  text: string;
  link: string;
  icon?: IconName | [IconPrefix, IconName];
  exactLink?: boolean;
}
