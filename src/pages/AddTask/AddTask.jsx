
const AddTask = () => {

    const handleAdd = e => {
        e.preventDefault();
    }

    return (
        <div className="bg-purple-200 py-10 px-40 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Add New Task</h2>
            <form onSubmit={handleAdd}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full" name="priority">
                                <option disabled selected>Select priority</option>
                                <option>High</option>
                                <option>Moderate</option>
                                <option>Low</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-purple-600 text-white hover:bg-purple-400 hover:text-black mt-6" />
            </form>
        </div>
    );
};

export default AddTask;