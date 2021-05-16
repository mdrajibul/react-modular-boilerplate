import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './../contexts';
import { DefaultMenus } from './../router';
import { IAppContext } from './../typings/common';
import { IRouting } from './../typings/routing';
import HeaderComponent from './Header';

interface IModuleMain {
  history?: any;
}

export const ModuleMain: FC<IModuleMain> = (props: IModuleMain) => {
  const routes: IRouting[] = DefaultMenus;
  const [contextValues, setContextValues] = useState<IAppContext>({});

  useEffect(() => {
    setContextValues({
      headerText: 'React Module Boilerplate',
    });
  }, [props, setContextValues]);

  return (
    <BrowserRouter>
      <AppProvider value={contextValues}>
        <HeaderComponent />
        <Switch>
          {routes.map((route: any, i: number) => (
            <Route key={`route-${i}`} exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
};
