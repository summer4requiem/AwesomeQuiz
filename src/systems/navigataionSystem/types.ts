import {FC} from 'react';
export interface TabBarIconProps {
  icon: string;
  focused: boolean;
}

export interface BottomTabItem {
  name: string;
  label?: string;
  component: FC;
  icon: string;
}
