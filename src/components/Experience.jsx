import Field from './Field.jsx';

function Experience(){

    const fields = [
        { label: 'Position', span: 2, defaultVal: 'Enter position'},
        { label: 'Company', span: 2, defaultVal: 'Enter company\'s name'},
        { label: 'Start Date', span: 1, defaultVal: 'Enter start date'},
        { label: 'End Date', span: 1, defaultVal: 'Enter end date'},
        { label: 'Location', span: 2, defaultVal: 'Enter location'},
        { label: 'Description', span: 2, defaultVal: 'Enter more information about your experience', type: 'textarea'}
    ]

    return(
        <div className="p-3 m-3 flex flex-col gap-5">
            <h1 className="font-bold text-4xl">Experience</h1>
            <form className='pl-3 grid grid-cols-2 gap-5'>
                {fields.map((field) => {
                    return <Field key={field.label} label={field.label} span={field.span} defaultVal={field.defaultVal} inputType={field.type}/>
                })}
            </form>
        </div>
    )

}

export default Experience