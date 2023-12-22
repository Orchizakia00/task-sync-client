
const Benefit = () => {
    return (
        <section className="bg-purple-200 py-10">
            <div className="container mx-auto text-center px-10 mb-14">
                <h2 className="text-4xl font-bold mb-10">Who Can Benefit?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Person 1 */}
                    <div className="bg-purple-300 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Busy Professionals</h3>
                        <p className="text-gray-700">
                            Stay organized and manage your tasks efficiently, even during your busiest days. Our task management website helps professionals stay on top of their work.
                        </p>
                    </div>

                    {/* Person 2 */}
                    <div className="bg-purple-300 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Students</h3>
                        <p className="text-gray-700">
                            Keep track of assignments, projects, and deadlines. Our task management tool is perfect for students looking to stay organized and manage their academic workload.
                        </p>
                    </div>

                    {/* Person 3 */}
                    <div className="bg-purple-300 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Team Collaborators</h3>
                        <p className="text-gray-700">
                            Collaborate seamlessly with your team members. Our platform allows you to assign tasks, track progress, and ensure everyone is on the same page.
                        </p>
                    </div>

                    {/* Add more sections as needed */}

                </div>
            </div>
        </section>
    );
};

export default Benefit;