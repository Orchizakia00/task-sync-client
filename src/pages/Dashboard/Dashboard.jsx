import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import DragDrop from "../../components/DragDrop/DragDrop";


const Dashboard = () => {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="bg-purple-200 min-h-[calc(100vh-20px)] pt-5">
                <div className="my-3 lg:ml-12">
                    <Link to={'/add-task'}><Button text={'Add New Task'}></Button></Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <DragDrop />
                </div>
            </div>
        </DndProvider>
    );
};

export default Dashboard;