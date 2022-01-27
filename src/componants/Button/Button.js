const Button = ({name, text}) => {
    
    return (
        <div>
            <button className='bg-red-400 text-white px-5 hover:bg-red-700 rounded-full'>{name} {text}</button>
        </div>
    );
}

export default Button;