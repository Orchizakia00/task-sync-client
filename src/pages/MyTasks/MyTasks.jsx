import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";


const MyTasks = () => {

    const axios = useAxios();
    const { user } = useAuth();

    const { data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    });
    console.log(tasks);

    return (
        <div className="bg-purple-200  min-h-screen">
            <div className="overflow-x-auto w-[70%] mx-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <tr key={task._id}>
                                <th>{index + 1}</th>
                                <td>{task.title}</td>
                                <td>{task.deadline}</td>
                                <td>{task.status}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTasks;