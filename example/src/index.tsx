import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './modules/ClassComponent';
// import HooksComponents from './modules/HooksComponents';

ReactDOM.render(
    <React.StrictMode>
        <ClassComponent id={8} />
        {/* <HooksComponents /> */}
    </React.StrictMode>,
    document.getElementById('root'),
);
