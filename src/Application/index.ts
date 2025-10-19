import { createContext } from 'react';
import { NavigationContainer } from './NavigationContainer';
import BottomTab from './BottomTab';
import { defaultContext } from '../Consts';
import Navigator from './Navigator';
import Screen from './Screen';
export * from './Components';

const ApplicationContext = createContext(defaultContext);

export {
  NavigationContainer,
  ApplicationContext,
  Navigator,
  BottomTab,
  Screen,
};
