import React from 'react';

import User from '../../components/Users';

const authPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Julien" age={31} />
    </div>
);

export default authPage;