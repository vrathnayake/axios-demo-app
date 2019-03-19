import React, { Component } from 'react';
import Axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost: null
    }

    componentDidMount() {
        this.loadData();
        
    }

    componentDidUpdate(){
        console.log("Fullpost - component did update");
        this.loadData();
    }


    loadData(){
        
        if (this.props.match.params.postId) {
            //adding plus(+) to convert to number or != to compare just the value
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.postId)){
                Axios.get('/posts/' + this.props.match.params.postId)
                .then(response=>{
                    this.setState({loadedPost:response.data})
                });
            }          
        }

    }

    deletePostHandler= ()=>{
        Axios.delete('/posts/' + this.props.match.params.postId)
        .then(response =>{
            console.log(response);
        }).catch(error=>{
            //do something with error
        });
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if (this.props.match.params.postId) {
            post = <p style={{ textAlign: "center" }}>Loading......!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;