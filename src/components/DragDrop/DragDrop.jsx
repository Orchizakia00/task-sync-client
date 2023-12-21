import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Task from "../Task/Task";
import { useState } from "react";
import { useDrop } from "react-dnd";


const DragDrop = () => {
    const axios = useAxios();
    const [ongoingLists, setOngoingLists] = useState([]);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get('/tasks');
            return res.data;
        }
    });

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (task) => addTaskToOngoingList(task.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addTaskToOngoingList = async (taskId) => {
        console.log(taskId);
        const selectedTask = tasks.find((task) => taskId === task._id);

        // Update the backend to change the status of the task
        await axios.put(`/tasks/${taskId}`, { status: 'ongoing' });

        // Update the local state to reflect the change
        setOngoingLists((list) => [...list, selectedTask]);
        refetch();
    };
    const ongoingTasks = tasks.filter(task => task.status === 'ongoing');
    console.log(ongoingTasks);

    return (
        <>
            <div className="col border-r border-black pr-4">
                <h2 className="text-center font-bold text-4xl">To Do List</h2>
                {
                    tasks.filter(task => task.status === 'todo').map(task =>
                        <Task key={task._id} task={task}></Task>
                    )
                }
            </div>
            <div className="col border-r border-black pr-4" ref={drop}>
                <h2 className="text-center font-bold text-4xl">Ongoing Tasks</h2>
                {
                    ongoingTasks.filter(task => task.status === 'ongoing').map(task =>
                        <Task key={task._id} task={task}></Task>
                    )
                }
            </div>
            <div>
                <h2 className="text-center font-bold text-4xl">Completed Tasks</h2>
            </div>
        </>
    );
};

export default DragDrop;