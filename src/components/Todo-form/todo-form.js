import { React, useState } from 'react';
const TodoForm = (props) =>{
    const {} = props;

    const [inpVal, setInpVal] = useState({});
    
    
    const btnForm = () =>{
        
        setInpVal("")
    };
    return(
        <div className="todo-form">
            <input
            value={inpVal}

            placeholder="NEW Todo..." />
            <button onClick={btnForm}>Add</button>
            {
                
            }

        </div>
    )
}
export default TodoForm;