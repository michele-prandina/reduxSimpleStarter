import React, { Component } from 'react';


class SearchBar extends Component{

    // Only class based components have a state.
    constructor(props){
        super(props);

        this.state = {
            term: 'default research'
        }
    }

    render (){
        return (
            <div>
                <label htmlFor="searchbox">Search for a lesson:</label>
                <input className="input-group" type="text" id="searchbox"
                       value={this.state.videos}
                       onChange={ event => this.setState({ videos: event.target.value }) }
                />
                <p>Value of the input: { this.state.videos } </p>
            </div>
        );
    }

    // static onInputChange(theEvent){
    //     theEvent.preventDefault();
    //
    //     this.setState({
    //        'term': theEvent.target.value
    //     });
    //
    //     console.log('the state is:', this.state.term);
    //     // console.log(theEvent.target.value);
    // }
}

export default SearchBar;