import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {

    const axios = useAxios();

    const { data: tasks = [] } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axios.get('/tasks');
            return res.data;
        }
    });

    console.log(tasks);

    return (
        <div className="bg-purple-200 min-h-[calc(100vh-20px)] pt-5">
            <div className="my-3 lg:ml-12">
                <Link to={'/add-task'}><Button text={'Add New Task'}></Button></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="col border-r border-black pr-4">
                    <h2 className="text-center font-bold text-4xl">To Do List</h2>
                    {
                        tasks.map(task => 
                            // <li key={task._id}>{task.title}</li>
                            <div key={task._id} className="m-6 bg-purple-300 hover:bg-purple-400 rounded-lg p-5">
                                <p className="text-2xl font-bold">{task.title}</p>
                                <p><span className="font-bold">Deadline:</span> {task.deadline}</p>
                            </div>
                        )
                    }
                </div>
                <div className="col border-r border-black pr-4">
                    <h2 className="text-center font-bold text-3xl">Ongoing Tasks</h2>
                </div>
                <div>
                    <h2 className="text-center font-bold text-3xl">Completed Tasks</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;