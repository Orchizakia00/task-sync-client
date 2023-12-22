import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import DragDrop from "../../components/DragDrop/DragDrop";
import useAuth from "../../hooks/useAuth";


const Dashboard = () => {
    const { user } = useAuth();

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="bg-purple-200 min-h-[calc(100vh-20px)] pt-5">
                <div className="flex justify-between my-3 items-center mx-10">
                    <div className="">
                        <Link to={'/add-task'}><Button text={'Add New Task'}></Button></Link>
                    </div>
                    <div className="text-right">
                        <img src={user.photoURL} alt={user.name} className="rounded w-[100px] h-[100px] ml-28" />
                        <p className="text-right mt-2">{user.displayName}</p>
                        <p className="text-right mt-2">{user.email}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
                    <DragDrop />
                </div>
            </div>
        </DndProvider>
    );
};

export default Dashboard;