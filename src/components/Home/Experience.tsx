import ExperienceList, { ExperienceListProps } from "./Experience/ExperienceList"

export interface ExperienceProps {
    Experiencelists: ExperienceListProps[]
}

const Experience = (props: ExperienceProps) => {
    return (

        <section className="mt-16" id="experience">
            <h1 className="text-4xl font-bold text-center">Work Experience</h1>
            <div className="my-12">
                <div className="text-lg">
                    <ul className="mt-8 mx-4 md:mx-10 ">
                        {props.Experiencelists.map((experienceList, index) => (
                            <ExperienceList key={index} title={experienceList.title} companyName={experienceList.companyName} Workexperience={experienceList.Workexperience} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience

   