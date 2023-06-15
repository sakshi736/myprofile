import { ExperiencePointsProps } from "./ExperiencePoints"

export interface ExperienceListProps{
    title:string
    companyName:String
    Workexperience:ExperiencePointsProps[]
}

const ExperienceList = (props:ExperienceListProps) =>{
    return(
        <div className="mt-8 mx-4 md:mx-10 ">
            <div className="text-lg">
                <ul>    
                    <li className="mt-8">
                        <div className="flex items-center mb-1">
                            <div className="bg-violet-500 rounded-half h-5 w-5"></div>
                            <div className="flex-1 ml-4 font-medium">{props.title}</div>
                        </div>

                        <div className="ml-12">
                            <div className="font-sans text-gray-500">{props.companyName}</div>
                            <div className="mt-1 text-sm text-gray-600">
                                <ul>
                                    {props.Workexperience.map((point,index)=>(
                                        <li key={index}>
                                            <div className="flex items-center mb-1">
                                                <div className="bg-violet-500 rounded-full h-3 w-3"></div>
                                                <div className="flex-1 ml-4 font-medium">{point.details}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ExperienceList