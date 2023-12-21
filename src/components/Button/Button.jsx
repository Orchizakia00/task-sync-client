/* eslint-disable react/prop-types */

const Button = ({text}) => {
    return (
        <button className="btn bg-purple-600 text-white hover:bg-purple-400 hover:text-black">{text}</button>
    );
};

export default Button;