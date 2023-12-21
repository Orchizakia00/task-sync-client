/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";

const Task = ({task}) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: { id: task._id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

    return (
        <div ref={drag} 
        style={{border: isDragging ? "5px solid purple" : "0px"}} 
        className="m-6 bg-purple-300 hover:bg-purple-400 rounded-lg p-5">
            <p className="text-2xl font-bold">{task.title}</p>
            <p><span className="font-bold">Deadline:</span> {task.deadline}</p>
        </div>
    );
};

export default Task;