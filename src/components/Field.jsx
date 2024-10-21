function Field({ label, defaultVal, span, inputType}){

    return(
        <div className={`${span === 2 ? 'col-span-2' : 'col-span-1'} flex flex-col`}>
            <label className="text-lg font-medium">{label}</label>
            {inputType === 'textarea' ? (
                <textarea className={`rounded-lg p-1 px-3 bg-black-500 text-white transition`} placeholder={defaultVal}></textarea>
            ) : (
            <input className={`rounded-lg p-1 px-3 bg-black-500 text-white transition`} placeholder={defaultVal}></input>
            )}
        </div>
    )
}


export default Field