export interface ExperiencePointsProps{
    details:string
}

const ExperiencePoint = (props:ExperiencePointsProps)=>
{
    return( 
        <div className="flex items-center mb-1">
            <div className="bg-violet-500 rounded-full h-3 w-3"></div>
            <div className="flex-1 ml-4 font-medium">{props.details}</div> 
        </div>
    )

}
export default ExperiencePoint