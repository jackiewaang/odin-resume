import Field from './Field.jsx';

function Education(){

    const fields = [
        { label: 'School', span: 2, defaultVal: 'Enter school / university'},
        { label: 'Degree', span: 2, defaultVal: 'Enter degree and field of study'},
        { label: 'Start Date', span: 1, defaultVal: 'Enter start Date'},
        { label: 'End Date', span: 1, defaultVal: 'Enter end Date'},
        { label: 'Location', span: 2, defaultVal: 'Enter location'},
        { label: 'Description', span: 2, defaultVal: 'Enter GPA, relevant modules, etc.', type: 'textarea'},
    ]

    return(
        <div className="p-3 m-3 flex flex-col gap-5">
            <h1 className="font-bold text-4xl">Education</h1>
            <form className='pl-3 grid grid-cols-2 gap-5'>
                {fields.map((field) => {
                    return <Field key={field.label} label={field.label} span={field.span} defaultVal={field.defaultVal} inputType={field.type}/>
                })}
            </form>
        </div>
    )

}

export default Education