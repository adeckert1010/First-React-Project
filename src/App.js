import React from 'react';
import './App.css';
import ContactCard from './Components/ContactCard';
import Footer from './Components/Footer';
import MyInfo from './Components/MyInfo';
import NavBar from './Components/NavBar';
import TodoItem from './Components/TodoItem'
import Joke from './Components/Joke'
import jokesData from './Components/jokesData';

function App() {
    const jokeComponents = jokesData.map(joke => 
        <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    )

    return (
        <div className="App">
            <NavBar />
            <MyInfo />
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
            <div>
                {jokeComponents}
            </div>
            <Footer />
        </div>
    );
}

export default App;
