import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import MyInfo from './Components/MyInfo';
import NavBar from './Components/NavBar';
import TodoItem from './Components/TodoItem';
import productsData from './vschoolProducts';
import Product from './Components/Product';
import todosData from './todosData'

function App() {
    
    const products = productsData.map(item =>
        <Product product ={item} key={item.id} name={item.name} price={item.price} description={item.description} />   )
        const todoItemComponents = todosData.map(item => 
            <TodoItem 
            todoItem={item} 
            key={item.id} 
            text={item.text} 
            completed={item.completed} />
            )


    return (
        <div className="App">
            <NavBar />
            <MyInfo />
            <div className="todo-list">
                <h2>My Todo list</h2>
                {todoItemComponents}
            </div>
            <div className="todo-list">
                {products}
            </div>

            <Footer />
        </div>
    );
}

export default App;
