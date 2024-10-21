import Field from './Field.jsx';

function Information(){

    const fields = [
        { label: 'Full Name', defaultVal: 'John Doe'},
        { label: 'Phone Number', defaultVal: '+44 20 1234 5678'},
        { label: 'Email', defaultVal: 'johndoe@gmail.com'},
        { label: 'Linkedin', defaultVal: 'www.linkedin.com/johndoe'},
        { label: 'GitHub/Personal Website', defaultVal: 'www.github.com/johndoe'}
    ]

    return (
        <div className="p-3 m-3 flex flex-col gap-5">
            <h1 className="font-bold text-4xl">Personal Details</h1>
            <form className="pl-3 flex flex-col gap-2">
                {fields.map((field) => {
                    return <Field key={field.label} label={field.label} defaultVal={field.defaultVal}/>
                })}
            </form>
        </div>
    )
}

export default Information;