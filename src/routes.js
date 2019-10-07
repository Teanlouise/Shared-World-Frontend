import React from 'react';
import { Route } from 'react-router-dom';

import PostList from './containers/PostListView';
import PostDetail from './containers/PostDetailView';
import PostCreate from './containers/PostCreateView';
import About from './containers/AboutView';
import Home from './containers/HomeView';
import ProfileList from './containers/ProfileListView';
import ProfileDetail from './containers/ProfileDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={ProfileList} />
        <Route exact path='/post/:user/:country' component={PostList} />
        <Route exact path='/post/:postID' component={PostDetail} />
        <Route exact path='/create' component={PostCreate} />
        <Route exact path='/user/:profileUserId' component={ProfileDetail} />
    </div>

);

export default BaseRouter;

