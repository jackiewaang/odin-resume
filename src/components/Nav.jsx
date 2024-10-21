import InformationIcon from '../assets/information.svg?react';
import EducationIcon from '../assets/education.svg?react';
import ProjectsIcon from '../assets/projects.svg?react';
import SkillsIcon from '../assets/skills.svg?react';
import WorkIcon from '../assets/work.svg?react';
import NavButton from './NavButton';

function Nav({ activeSection, onBtnClick }){

    const icons = [
        {id: 0, name: 'Information', component: InformationIcon},
        {id: 1, name: 'Education', component: EducationIcon},
        {id: 2, name: 'Experience', component: WorkIcon},
        {id: 3, name: 'Skills', component: SkillsIcon},
        {id: 4, name: 'Projects', component: ProjectsIcon},
    ]

    return(
        <div className="flex flex-col p-3 items-center justify-center">
            {icons.map((icon) => {
                return <NavButton key={icon.name} icon={icon.component} isActive={activeSection === icon.id} onClick={() => onBtnClick(icon.id)}>
                    {icon.name}
                </NavButton>
            })}
        </div>
    )
}

export default Nav