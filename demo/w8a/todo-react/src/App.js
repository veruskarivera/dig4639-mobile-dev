import React from 'react';
import  './App.css';
import todoList from './todoList.json';

class TodoItem extends React.Component{
render(){
  return <p className='card'>{this.props.content}<input type="button" value="X"
  onClick={()=>this.props.removeTask(this.props.id)}/></p>
}
}
class App extends React.Component{
  constructor (props) {
    super(props)
      this.state={
        todoList: todoList,
       showOnlyUncompletedTask:false
    }
    this.currentID=4
  }
removeTask(taskID){
console.log(this.state.todoList)
console.log(taskID)
console.log(this.state.todoList[0].id)
let newList= this.state.todoList.filter((task)=>(task.id!==taskID))
console.log(newList)
this.setState({todoList:newList})
}



addTask(){
console.log (this.refs.taskContent.value)
let newtask=
  { "id":this.currentID,"content": "Task 3", "priority":3, "completed": false}
  this.currentID++;
let currentList=this.state.todoList
currentList.push(newtask)
this.setState({todoList:currentList})
}



render() {
  return(
    <>
  <div class="inputTask">
  <input type="text" ref="taskContent"/>
  <select ref="priority" name="priority">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <input type="button" value="Add Task" onClick={()=>this.addTask()}/>
  <br></br>
  <input type="checkbox" ref=" completedFilter"
  onChange={(e)=>this.setState({showOnlyUncompletedTask:e.target.checked})}
  id="completedFilter" name="completedFilter" value="completed"/>
  <label htmlFor="completedFilter">Show only completed tasks</label>
    </div>
    {(this.state.showOnlyUncompletedTask ?
    this.state.todoList.filter((v)=>v.completed)
      :
    this.state.todoList)
    .map((v,i)=><TodoItem id={v.id} key={i} priority={v.priority}
    remove={(id)=>this.removeTask(id)}
    content={v.content} completed={v.completed}/>)}
    </>
    );
  }
}

export default App;