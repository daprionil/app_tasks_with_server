function ErrorMessage({message}) {
    return (
        <p className='px-1 text-red-600 font-raleway font-bold text-sm drop-shadow-md'>
            {message}
        </p>
    )
}

export default ErrorMessage;