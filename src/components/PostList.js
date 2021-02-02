import React, { Component } from 'react'

//step:1 import axios library

import axios from 'axios'

class PostList extends Component {

    // step2: create state property to store the list of posts
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    // step3: we need to use axios to make a get request to the json place holder api , this  we need to place in the componentDidmout
    //this method will exute when the component mounts for the first time this only executed once in components life time
    //perfect place for get request
    componentDidMount() {
        //how can we access that data returns,axios is promise based library so we can add then() and catch()
        //then() accepts an arrow function as its response as an argument
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'error retreiving data' })
            })
    }
    render() {
        //here we are destructuring state property
        const { posts, errorMsg } = this.state
        return (
            <div>
                List Of posts
                {
                    //displaying list of posts using map() mthod
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) :
                        null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default PostList
