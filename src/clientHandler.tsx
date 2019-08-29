import React from 'react';
import { hydrate, render } from 'react-dom';
import { AppProvider } from './appProvider';
import { AppContext } from './context';
import { globalModels } from './models/saviour';

export const clientHandler = (provider: typeof AppProvider) => {
  const context: AppContext = {};
  const p = new provider(context);
  p.prepare();

  globalModels.forEach(a => console.log(a.name));

  const element = document.getElementById(p.name);
  if (process.env.NODE_ENV === 'production') {
    hydrate(p.application as any, element);
    return () => null;
  } else {
    render(p.application as any, element);
    const update =  () => hydrate(p.application as any, element);
    window.addEventListener('orientationchange', () => {
      update();
    });
    return update;
  }
};
