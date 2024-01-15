import PartYear from "../Fragment/PartYear"
import PartProjects from "../Fragment/PartProjects"
import PartVisitor from "../Fragment/PartVisitor"
import PartTechnology from "../Fragment/PartTechnology"
const InformationBar = () => {
    return (
        <div className="w-full h-52 mt-3 flex justify-center z-[2] relative">
            <div className="w-4/5 h-full backdrop-blur-sm flex justify-around bg-opacity-50 bg-rgba-217-217-217-04 rounded-3xl">
                <PartYear></PartYear>
                <PartProjects></PartProjects>
                <PartVisitor></PartVisitor>
                <PartTechnology></PartTechnology>
            </div>
        </div>
    )
}

export default InformationBar