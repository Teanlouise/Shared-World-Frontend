import React from 'react';
import { Route } from 'react-router-dom';

import PostList from './containers/PostListView';
import PostDetail from './containers/PostDetailView';
import PostCreate from './containers/PostCreateView';
import About from './containers/AboutView';
import Home from './containers/HomeView';
import ProfileList from './containers/ProfileListView';
import ProfileDetail from './containers/ProfileDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => (
    <div>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile' component={ProfileList} />
        <Route exact path='/post/:user/:country' component={PostList} />
        <Route exact path='/post/:postID' component={PostDetail} />
        <Route exact path='/post/create' component={PostCreate} />
        <Route exact path='/user/:profileUserID' component={ProfileDetail} />
    </div>

);

export default BaseRouter;

