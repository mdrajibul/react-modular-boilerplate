import { ModuleMain } from '@components/main';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';


const history = createBrowserHistory();

ReactDOM.render(<ModuleMain history={history} />, document.getElementById('root'));
