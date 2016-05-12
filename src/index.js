/*
 *   Import libraries
 *
 * */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';



/*
 *   Import components
 *
 *
 * */
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';




/*
 *  Defining constants
 *
 *
 * */
const API_KEY = 'AIzaSyAFH-k0VOXFbtqKPHIanxfgs4vmXe7SDGk';




/*
 *   Defining the component
 *
 *
 * */

class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'react lessons' }, videos => this.setState({ videos })  );
    }

    render(){

        // console.log(this.state.videos);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <VideoDetail video = { this.state.videos } />
                            <VideoList video = { this.state.videos } />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}



/*
 *   Render the component
 *
 *
 * */
ReactDOM.render(<App />, document.querySelector('.container'));