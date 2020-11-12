import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import classes from '../../Main.module.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render() {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/new-post">New Post</NavLink>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" exact component={NewPost}/>
                </header>
            </div>
        );
    }
}

export default Blog;