import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import BlogList from './pages/BlogList'
import Header from './components/Header'
import Footer from './components/Footer'
import ArticleItem from './pages/ArticleItem'
import NotFound from './pages/404'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
            <div>
                <Switch>
                    <Route exact path="/" component={BlogList} />
                    <Route path="/toDo" component={ToDoList} />
                    <Route path="/article/create" component={ToDoList} />
                    <Route path="/article/:id" component={ArticleItem} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
