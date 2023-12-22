/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
    const axios = useAxios();
    const {user} = useAuth();

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    });
    console.log(tasks);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleDelete = task => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to fire?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            axios.delete(`/tasks/${task._id}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.deletedCount > 0) {
                                        refetch();
                                        toast.success(`Task Deleted!`)
                                    }
                                })
                        }}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div ref={drag}
            style={{ border: isDragging ? "5px solid purple" : "0px" }}
            className="m-6 bg-purple-300 hover:bg-purple-400 rounded-lg p-5">
            <p className="text-2xl font-bold">{task.title}</p>
            <p><span className="font-bold">Priority:</span> {task.priority}</p>
            <p><span className="font-bold">Description:</span> {task.description}</p>
            <p><span className="font-bold">Deadline:</span> {task.deadline}</p>
            <div className="text-right">
                <Link to={`/edit-task/${task._id}`}><button className="btn mt-3 mr-3"><FaEdit color="purple"></FaEdit></button></Link>
                <button onClick={() => handleDelete(task)} className="btn mt-3"><FaTrashAlt color="red"></FaTrashAlt></button>
            </div>
        </div>
    );
};

export default Task;