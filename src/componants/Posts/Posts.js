import { Component } from "react";
import AddPost from "../AddPost/AddPost";
import SinglePost from "../SinglePost/SinglePost";

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [
                {id: "1", title: "Post 1", description: "post1 description 1"}
            ],
            PostTitle: "Post List Details",
            showPosts: true
        }

        console.log('post js constructor called');
    }    

    static getDerivedStateFromProps(props, state){
        console.log('post js get derived called');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('posts js should component update called');
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log('posts js snapshot before update called');
        return null;
    }

    componentDidUpdate(prevProp, prevState, snapshot){
        console.log('posts js component did update called');
        console.log(snapshot);
    }

    componentDidMount(){
        console.log('post js component did mount called');
    }

    updateButtonHandler(){
        console.log('udpate title');
        this.setState({
            PostTitle: 'Modified Title',
        })
    }

    titleHandler = (title, e) => {
        e.preventDefault();
        this.setState({
            PostTitle: title
        })
    }

    toggleHandler = () => {
        this.setState({
            showPosts: !this.state.showPosts
        })
    }

    titleChangeHandler = (id, e) => {
        const postIndex = this.state.posts.findIndex(post => post.id === id);
        const posts = [...this.state.posts];
        posts[postIndex].title = e.target.value;
        this.setState({
            posts,
        })
    }

    getPosts(){
        if(!this.state.showPosts) return null;
        let posts = this.state.posts.map((post) => 
        <SinglePost 
        key={post.id}
        title={post.title} 
        description={post.description}
        titleChange={this.titleChangeHandler.bind(this, post.id)}
        />
        )
        return (<div className="flex my-3">                    
                       {posts}
                </div>)
    }

    render(){
        console.log('post js render called');
        return(
            <div>
                <h2 className="text-2xl my-3">{this.state.PostTitle}</h2>
                <a href="https://www.google.com" className="px-5 py-2 bg-red-500 rounded-3xl" onClick={this.titleHandler.bind(this,'modified title using method param')}>Update Post Title </a>
                <button className="px-5 py-2 bg-red-500 rounded-3xl" onClick={this.toggleHandler}>{this.state.showPosts ? 'Hide Posts': 'Show Posts'}</button>
                    <hr />
                {this.getPosts()}

                <div className="my-5">
                    <AddPost />
                </div>
            </div>
        );
    }
}

export default Posts;