import {Component} from 'react';
import Axios from '../../../axios';
import Post from '../../../components/Post/Post';
import classes from '../../../Main.module.css';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        Axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'ABC'
                    }
                });
                this.setState({
                    posts: updatedPost
                });
                //console.log(response);
            })
            .catch(error => {
                // console.log(error);
                this.setState({ error: error });
            });
    }

    postSelectHandler = (id) => {
        this.setState({ selectedPostID: id });
    }

    render(){
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectHandler(post.id)} />
            });
        }
        return (
            <section className={classes.Posts}>
                    {posts}
                </section>
        )
    }
}

export default Posts