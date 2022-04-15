import {HomeScreen, SettingsScreen, QuizzesScreen} from '../../../screens';
import {RouteNames} from '../constants';
import {BottomTabItem} from './../types';

export const bottomTabs: BottomTabItem[] = [
  {
    name: RouteNames.HomeScreen,
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: RouteNames.QuizzesScreen,
    component: QuizzesScreen,
    icon: 'solution1',
  },
  {
    name: RouteNames.SettingsScreen,
    component: SettingsScreen,
    icon: 'setting',
  },
];
