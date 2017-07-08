import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import moduleApp from './reducers';
import App from './App';

var data = {
  moduleList:[{
  	"id":'4d4fc729-00fd-445f-af40-7ee0b9c50d1e',
    "moduleName":"Module 1",
    "lessonsList":
    [{
    	"id": '1',
    	"lesson" : "Lesson 1.1"
    },
    {
    	"id": '2',
    	"lesson" : "Lesson 1.2"
    },
    {
    	"id": '3',
    	"lesson" : "Lesson 1.3"
    }]
  },
  {
  	"id":'7a3a0897-72b5-420d-92d8-c2bf7d34e814',
    "moduleName":"Module 2",
    "lessonsList":
    [{
    	"id": '4',
    	"lesson" : "Lesson 2.1"
    },
    {
    	"id": '5',
    	"lesson" : "Lesson 2.2"
    }]
  },
  {
  	"id":'fbe7d136-2cd4-4b94-b84e-9e8acbc748c7',
    "moduleName":"Module 3",
    "lessonsList":
    [{
    	"id": '6',
    	"lesson" : "Lesson 3.1"
    },
    {
    	"id": '7',
    	"lesson" : "Lesson 3.2"
    },
    {
    	"id": '8',
    	"lesson" : "Lesson 3.3"
    },
    {
    	"id": '9',
    	"lesson" : "Lesson 3.4"
    }]
  },
  {
  	"id": 'ece267ba-b61b-46b7-a211-2d71aae5ef8e',
    "moduleName":"Module 4",
    "lessonsList":
    [{
    	"id": '10',
    	"lesson" : "Lesson 4.1"
    },
    {
    	"id": '11',
    	"lesson" : "Lesson 4.2"
    },
    {
    	"id": '12',
    	"lesson" : "Lesson 4.3"
    }]
  },
  {
  	"id":'1ecf6c47-de82-46ba-81e0-a3e387f42633',
    "moduleName":"Module 5",
    "lessonsList":
    [{
    	"id": '13',
    	"lesson" : "Lesson 5.1"
    },
    {
    	"id": '14',
    	"lesson" : "Lesson 5.2"
    }]
  }],
  selectMode: {
  	mode:"MODULE_LIST",
  	selectModule:-1
  }
};


let store = createStore(moduleApp, data)

export default class Root extends Component {
render() {
	return (
	  	<Provider store={store}>
	    	<App />
	  	</Provider>
  	)
  }
}