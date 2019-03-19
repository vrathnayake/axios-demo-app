import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import NewPost from './NewPost/NewPost'; 
import asyncComponent from '../../hoc/asyncComponent';
//lazy loading of the new post
const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth:true
    }

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="active">Home</NavLink></li>
                            <li><NavLink to={{ pathname: '/new-post'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* resolved top to bottom */}
                <Switch>
                    {/* this is a guard */}
                   {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} />: null}
                    {/* <Route render={() => <h1>Not Found</h1>}/> */}
                    <Route path="/posts"  component={Posts} />
                    <Redirect from="/" to="/posts/"/>
                    
                </Switch>

            </div>
        );
    }
}

export default Blog;