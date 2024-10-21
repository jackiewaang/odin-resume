function NavButton({icon: IconComponent, children, onClick}){

    return(
        <button onClick={onClick} className={`flex-1 p-3 m-3 min-w-28 gap-2 flex flex-col items-center justify-center rounded-md border-2 border-black-400 shadow-lg bg-black-500 transition hover:scale-125 hover:bg-black-600`}>
            <IconComponent />
            <p>{children}</p>
        </button>
    )
}

export default NavButton