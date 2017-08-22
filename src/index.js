import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyBMdMQj26Y0O7vUk1HTFkd5BZR0ZPKnZDw';


// create a new component which should produce some html

class App extends Component {
	constructor(props){
		super(props);

		this.state= {
			videos:[],
			selectedVideo: null
		};

	
		this.videoSearch('surfboards');
	}

videoSearch(term){
	YTSearch({key: API_KEY, term: term}, (videos) =>{
		this.setState({
		videos:videos,
		selectedVideo: videos[0]
		});
	});
}