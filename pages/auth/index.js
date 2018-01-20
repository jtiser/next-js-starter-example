import React from 'react';

import User from '../../components/Users';

const authPage = (props) => (
    <div>
        <h1>The Auth Index Page - {props.appName}.</h1>
        <User name="Julien" age={31} />
    </div>
);

authPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super App (Auth)' });
        }, 1000);
    });
    return promise;
}

export default authPage;