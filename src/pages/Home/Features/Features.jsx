

const Features = () => {
    return (
        <section className="bg-purple-200 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Key Features</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-10">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.ibb.co/zfMD2yD/task-management-tool.jpg"  // Add your own feature icons
                            alt="Feature 1"
                            className="mb-4 rounded-lg w-[400px] h-[250px]"
                        />
                        <h3 className="text-xl font-bold mb-2">Task Management</h3>
                        <p className="text-gray-600">
                            Efficiently manage tasks, set priorities, and keep track of deadlines with our intuitive task management system.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.ibb.co/xj2CDQ5/team-Collaboration-min.jpg"
                            alt="Feature 2"
                            className="mb-4 rounded-lg w-[400px] h-[250px]"
                        />
                        <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                        <p className="text-gray-600">
                            Foster collaboration among team members by assigning tasks, sharing files, and maintaining clear communication.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.ibb.co/j4TmMKs/12457060459538.png"
                            alt="Feature 3"
                            className="mb-4 rounded-lg w-[400px] h-[260px]"
                        />
                        <h3 className="text-xl font-bold mb-2">Calendar View</h3>
                        <p className="text-gray-600">
                            Visualize deadlines and milestones with a calendar view, making it easy to plan and manage your schedule.
                        </p>
                    </div>

                    {/* Add more features as needed */}
                </div>
            </div>
        </section>
    );
};

export default Features;
