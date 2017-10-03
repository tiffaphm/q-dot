import React from 'react';
import ReactDOM from 'react-dom';
import ManagerApp from './components/manager/ManagerApp.jsx';
import 'jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((<ManagerApp />), document.getElementById('app'));