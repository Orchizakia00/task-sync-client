
const Support = () => {

    return (
        <div className="container mx-auto py-10 bg-purple-200 min-h-screen">
            <h2 className="text-4xl font-bold mb-6 text-center">Feedback and Support</h2>

            <form className="max-w-md mx-auto mt-10">
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback or Issue Description
                </label>
                <textarea className="textarea textarea-primary w-full h-40" placeholder="Your feedback"></textarea>
                <button className="btn btn-block bg-purple-600 text-white hover:bg-purple-400 hover:text-black">Submit</button>
            </form>
        </div>
    );
};

export default Support;
