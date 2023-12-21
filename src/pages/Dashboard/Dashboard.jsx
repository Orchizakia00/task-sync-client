import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const Dashboard = () => {
    return (
        <div className="bg-purple-200 min-h-[calc(100vh-20px)] pt-5">
            <div className="my-3 lg:ml-12">
                <Link to={'/add-task'}><Button text={'Add New Task'}></Button></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="col border-r border-black pr-4">
                    <h2 className="text-center font-bold text-3xl">To Do List</h2>
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