import { Component } from "react";

class SinglePost extends Component {
    constructor(props){
        super(props);
        console.log('single post js constructor called');
    }

    // static getDerivedStateFromProps(props, state){
    //     return state;
    //     console.log('single post js get derived called');
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('single post js should component update called');
        return true;        
    }

    render() {
        console.log('single post js render called');
        return(
            <div className="m-4 p-3 flex border border-gray-400 shadow">
                <h3 className="text-xl font-bold text-blue-500">{this.props.title}</h3>
                <div>{this.props.description}</div>
                <div className="my-2">
                    <input type='text' value={this.props.title} 
                    onChange={this.props.titleChange}
                    className="px-5 py-1 border border-gray-500" />
                </div>
            </div>
        );
    }

    getSnapshotBeforeUpdate(privProps, privState){
        console.log('single post js snapshot before update called');
        return 'hello world';        
    }

    componentDidUpdate(privProps, privState, snapshot){
        console.log('single post js component did update called');
        console.log(snapshot);
    }

    componentDidMount(){
        console.log('single post js component did mount called');
    }

    componentWillUnmount(){
        console.log('single post js component unmmount called');
    }
}

export default SinglePost;