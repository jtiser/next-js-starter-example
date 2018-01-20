import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
    //One way to use this :
    // static async getInitialProps(context) {
    //     console.log(context); 
    //     await
    //     return { appName: 'Super App' };
    // }

    //The other way to use it:
    static getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'Super App' });
            }, 1000);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}.</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        );
    }
}

export default IndexPage;