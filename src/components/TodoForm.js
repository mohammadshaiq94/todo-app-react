import React from 'react'

const TodoForm = (props) => {
	return (
		<form  className="form" onSubmit={props.addTask}>
		  <input type="text" 
		    value={props.currentTask}
		    onChange={props.updateTask}
		   />
		   <button type="submit" className="btn">+</button>		
		</form>
	)
}



export default TodoForm