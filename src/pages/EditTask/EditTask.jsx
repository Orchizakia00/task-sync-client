import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaTasks } from "react-icons/fa";


const EditTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const axios = useAxios();
    const { user } = useAuth();
    const task = useLoaderData();

    const { title, description, deadline, priority, _id, status } = task;

    const onSubmit = async (data) => {
        data.status = status;
        data.email = user.email;
        console.log(data);

        axios.patch(`/task/${_id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Tasks updated successfully!');
                    reset();
                }
            })
    };

    return (
        <div className="bg-purple-200 py-10 px-40 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Edit Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Title"
                        defaultValue={title}
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* priority */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select defaultValue={priority} {...register('priority', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select Priority</option>
                            <option value="high">High</option>
                            <option value="moderate">Moderate</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    {/* deadline */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Deadline"
                            defaultValue={deadline}
                            {...register('deadline', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register('description', { required: true })} defaultValue={description} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                </div>

                <button className="btn btn-block mt-6 bg-purple-600 text-white hover:bg-purple-400 hover:text-black">
                    Update Task <FaTasks></FaTasks>
                </button>
                {/* <Button className="btn-block" text={'Add Task'}></Button> */}
            </form>
        </div>
    );
};

export default EditTask;