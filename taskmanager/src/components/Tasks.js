import React, { Component } from 'react'
import Task from './Task'

export default class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            tasks:[
                {
                    id:1,
                    title:'task 1'
                },
                {
                    id:2,
                    title:'task 2'
                },
                {
                    id:3,
                    title:'task 3'
                },
                {
                    id:4,
                    title:'task 4'
                },
                {
                    id:5,
                    title:'task 5'
                }
            ]
        }
    }
    deleteTask = (id) => {
        let tasks = this.state.tasks.filter(task => {
            return task.id !== id
        })
        this.setState({
            tasks:tasks
        })
    }   
    render() {
        const {tasks} = this.state
        return (
            <div>
                {tasks.map(task => (
                    <Task key={task.id} title={task.title} id={task.id} deleteTask={this.deleteTask} />
                ))}
             </div>
        )
    }
}
