import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './header'
import ListItems from './ListItems'
import Input from './Input'

const Home = () => {
    // Modal ivisibility
    const [modalvisi , setmodalvisi] = useState(false);
    const initialsTodos = [
        {
            title: "Get some snaks",
            date: "Sun , 11 Sep 2022 11:49:22 GMT",
            key: "1"
        },
        {
            title: "be ready to fight",
            date: "Sun , 11 Sep 2022 11:49:22 GMT",
            key: "2"
        },
        {
            title: "An apple a day keep doctor away",
            date: "Sun , 11 Sep 2022 11:49:22 GMT",
            key: "3"
        }
    ]

    const HandleAllClear = ()=>{
        settodos([]);
    }
    
    const [todos , settodos] = useState(initialsTodos);
    const [todosInputVal , setInputVal] = useState();

    // Function to add the todo in list
    const handleAddTodo = (todo)=>{
        const newTodoList = [...todos , todo];
        settodos(newTodoList);
        setmodalvisi(false);
    }

    // handleTriggerofEdit
   const [tohandleEditting , sethandleedit] = useState(null);

    const Edit = (item)=>{
       sethandleedit(item);
       setmodalvisi(true);
       setInputVal(item.title);
    }

    const handleedit = (editedtodo)=>{
        const newTodo = [...todos];
        const todoindex = todos.findIndex((todo)=>todo.key === editedtodo.key);
        newTodo.splice(todoindex , 1 , editedtodo);
        settodos(newTodo);
        sethandleedit(null);
        setmodalvisi(false);

    }

    return (
        <>
            <Header handleallclear={HandleAllClear} />
            <ListItems 
                todos={todos}
                settodos={settodos}
                edit={Edit}
            />
            <Input modalvisi={modalvisi} setmodalvisi={setmodalvisi} setInputVal={setInputVal}
            todosInputVal={todosInputVal}
            AddTodo={handleAddTodo}
            todos={todos}
            todotoedit = {tohandleEditting}
            settodotobeeddited={sethandleedit}
            edit={handleedit}
            />
        </>
    )
}

export default Home