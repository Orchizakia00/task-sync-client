

const Faq = () => {
    return (
        <section className="bg-purple-200 py-10 min-h-screen">
            <div className="container mx-auto px-10 mb-14">
                <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                <div className="w-[65%] mx-auto">
                    <div className="collapse collapse-arrow bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I create a new task?
                        </div>
                        <div className="collapse-content">
                            <p>To create a new task, navigate to the Dashboard page and click on the Add Task button. Fill in the required information, such as title, description, priority, and deadline, then save the task.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I mark a task as completed?
                        </div>
                        <div className="collapse-content">
                            <p>To mark a task as completed, open the Dashboard and use drag-and-drop functionality to move tasks to the Completed section.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between To Do, Ongoing, and Completed tasks?
                        </div>
                        <div className="collapse-content">
                            <p>To Do tasks are pending tasks, Ongoing tasks are currently in progress, and Completed tasks are finished tasks. You can move tasks between these statuses based on their progress.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I set reminders for task deadlines?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can set reminders for task deadlines. When creating or editing a task.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Is there a way to set task priorities?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, you can set task priorities when creating or editing a task. Choose from priority levels such as low, medium, or high to indicate the importance of a task.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;