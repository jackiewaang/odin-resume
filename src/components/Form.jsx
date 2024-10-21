import Information from './Information.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';

function Form({ sectionID }){


    const renderActive = () => {
        console.log(sectionID);
        switch(sectionID){
            case 0:
                console.log(0);
                return <Information />;
            case 1:
                return <Education />;
            case 2:
                return <Experience />;
            case 3:
                return <Skills />;
            case 4:
                return <Projects />;
            default:
                return "error";
        }
    }    

    return(renderActive())
}

export default Form