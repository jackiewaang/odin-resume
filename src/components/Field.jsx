function Field({ label, defaultVal}){

    return(
        <>
            <label className="text-lg font-medium">{label}</label>
            <input className="rounded-lg p-1 bg-black-500 text-white transition" placeholder={defaultVal}></input>
        </>
    )
}

export default Field