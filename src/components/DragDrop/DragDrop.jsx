/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Task from "../Task/Task";
import { useState } from "react";
import { useDrop } from "react-dnd";
import useAuth from "../../hooks/useAuth";

const DragDrop = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const [ongoingLists, setOngoingLists] = useState([]);

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    });

    const todoTasks = tasks.filter(task => task.status === 'todo');

    const [{ isOver: isOngoingOver }, dropOngoing] = useDrop(() => ({
        accept: "div",
        drop: (task) => handleDrop(task.id, 'ongoing'),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const [{ isOver: isCompletedOver }, dropCompleted] = useDrop(() => ({
        accept: "div",
        drop: (task) => handleDrop(task.id, 'completed'),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleDrop = async (taskId, status) => {
        const selectedTask = tasks.find((task) => taskId === task._id);

        await axios.put(`/tasks/${taskId}`, { status });

        if (status === 'ongoing') {
            setOngoingLists((list) => [...list, selectedTask]);
        } else if (status === 'completed') {
            setOngoingLists((list) => list.filter((task) => task._id !== taskId));
        }

        refetch();
    };

    const ongoingTasks = tasks.filter(task => task.status === 'ongoing');
    const completedTasks = tasks.filter(task => task.status === 'completed');

    return (
        <>
            <div className="col border-r border-black pr-4">
                <h2 className="text-center font-bold text-4xl bg-purple-700 p-3 rounded-lg text-white">To Do List</h2>
                {
                    todoTasks.map(task =>
                        <Task key={task._id} task={task}></Task>
                    )
                }
            </div>
            <div className="col border-r border-black pr-4" ref={dropOngoing}>
                <h2 className="text-center font-bold text-4xl bg-purple-700 p-3 rounded-lg text-white">Ongoing Tasks</h2>
                {
                    ongoingTasks.map(task =>
                        <Task key={task._id} task={task}></Task>
                    )
                }
            </div>
            <div className="col" ref={dropCompleted}>
                <h2 className="text-center font-bold text-4xl bg-purple-700 p-3 rounded-lg text-white">Completed Tasks</h2>
                {
                    completedTasks.map(task =>
                        <Task key={task._id} task={task}></Task>
                    )
                }
            </div>
        </>
    );
};

export default DragDrop;
