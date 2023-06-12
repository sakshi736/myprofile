export interface ExperienceListProps{
    title:string
    companyName:String
    Workexperience:string
}

const ExperienceList = (props:ExperienceListProps) =>{
    return(
        <div className="mt-8 mx-4 md:mx-10 ">
            <div className="text-lg">
                <ul>    
                    <li className="mt-8">
                        <div className="flex items-center mb-1">
                            <div className="bg-gray-500 rounded-full h-8 w-8"></div>
                            <div className="flex-1 ml-4 font-medium">{props.title}</div>
                        </div>

                        <div className="ml-12">
                            <div className="text-sm text-gray-500">{props.companyName}</div>
                            <div className="mt-1 text-sm text-gray-600">{props.Workexperience}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ExperienceList