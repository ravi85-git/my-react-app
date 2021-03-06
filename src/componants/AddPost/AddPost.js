import { Component } from "react";

class AddPost extends Component {
    state = {
        title: 'dfsd',
        description: '',
        status: 'active'
    }
    addPostHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    inputHandler = (input, e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    render(){
        return (
            <div>
                <h2 className="text-2xl font-bold">Add Post</h2>
                <form onSubmit={this.addPostHandler}>
                    <div className="my-3">
                        <label className="block">Title</label>
                        <input type="text" value={this.state.title} 
                        onChange={this.inputHandler.bind(this, 'title')}
                        className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600" />
                    </div>
                    <div className="my-3">
                        <label className="block">Description</label>
                        <textarea value={this.state.description} 
                        onChange={this.inputHandler.bind(this, 'description')}
                        className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600"></textarea>
                    </div>
                    <div className="my-3">
                        <label className="block">Status</label>
                        <select value={this.state.active} 
                        onChange={this.inputHandler.bind(this, 'status')}
                        className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="bg-indigo-900 text-white px-5 py-2">Add Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddPost;