import React from 'react';


class TodoItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing:false
    }

    this.renderForm = this.renderForm.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  
  toggleState(){
    const { isEditing } = this.state;
    this.setState({
      isEditing:!isEditing
    })
  }

  updateItem(event){
    event.preventDefault();
    this.props.editTask(this.props.index, this.input.value);
    this.toggleState();
  }


  renderItem(){
    return (
      <li onClick={ () => {
        this.props.clickHandler(this.props.index);
      }} className={this.props.details.completed ? 'completed' : 
    ''}>
        {this.props.details.name}
        <button className ="btn1" onClick={(event) => {
          event.stopPropagation();
          this.props.deleteTask(this.props.index)
        }}>x</button>
          <button className="btn3" onClick={(event) => {
          event.stopPropagation();
          this.toggleState()
        }}>Edit</button>

      </li>    
    )
  }
  renderForm(){
    return ( 
      
     <form  onSubmit={this.updateItem} >
      <input type="text" ref={(value) => {
        this.input = value
      }}  defaultValue={this.props.details.name} />
      <button type="submit" className="btn2">✎</button>  
    </form>
    )
  }
  render(){
    const { isEditing } = this.state;
  return (
    <section>
    {
      isEditing ? this.renderForm() :  this.renderItem()
    }
     
    </section> 
       )
    }
}




export default TodoItem;