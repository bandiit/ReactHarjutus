import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import { People } from './components/people';
import { PersonDetails } from './components/PersonDetails';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/people' component={People} />
        <Route path='/people/:numeric_index' component={PersonDetails} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
