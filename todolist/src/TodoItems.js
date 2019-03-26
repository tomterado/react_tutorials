
import React, { Component } from 'react';

class TodoItems extends Component {

    constructor(props) {    
        super(props);     
        this.createTasks = this.createTasks.bind(this);  
      }   

    delete(key){
        //Function Delete from Components/Props.
        this.props.delete(key);
    }

    createTasks(item){
        
        return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
    }

    render() { 
        var toDoEntries = this.props.entries;
        var listItems = toDoEntries.map(this.createTasks);

        return (
                <ul className="theList">
                    {listItems}
                </ul>
          );
    }
}

export default TodoItems;
