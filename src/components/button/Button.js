function Button({onclickHandler,children}){
    return(
        <button onClick={onclickHandler} className='w-[100px] h-[40px] bg-[#F0C041] '>{children}</button> 
    )
}
export default Button