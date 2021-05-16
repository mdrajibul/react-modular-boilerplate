import React from 'react';
import WaitComponent from './components/Wait';
import WelcomeComponent from './components/welcome';
import { IRouting } from './typings/routing';
import { getPreparedRoute } from './utils/routingUtil';
const PageOneContainer = React.lazy(() => import('./components/PageOne'));
const PageTwoContainer = React.lazy(() => import('./components/PageTwo'));

export const DefaultMenus: IRouting[] = [
  {
    component: WelcomeComponent,
    exact: true,
    path: getPreparedRoute('home'),
    text: '',
  },
  {
    component: WelcomeComponent,
    exact: true,
    path: getPreparedRoute('welcome'),
    text: 'Welcome',
  },
  {
    component: WaitComponent(PageOneContainer),
    exact: true,
    path: getPreparedRoute('page.one'),
    text: 'Page one',
  },
  {
    component: WaitComponent(PageTwoContainer),
    exact: true,
    path: getPreparedRoute('page.two'),
    text: 'Page two',
  },
];
