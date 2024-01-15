import NextJs from "../Svg/NextJs"
import ReactJs from "../Svg/ReactJs"
import NestJs from "../Svg/NestJs"
import Tailwindcss from "../Svg/Tailwindcss"
import Header5 from "../Element/Header5"
const PartTechnology = () => {
    return (
        <div className="w-52 h-full flex flex-col justify-center items-center relative">
            <div className="h-[48%] text-white">
                <Header5>Technology</Header5>
            </div>
            <NextJs></NextJs>
            <ReactJs></ReactJs>
            <NestJs></NestJs>
            <Tailwindcss></Tailwindcss>
        </div>
    )
}
export default PartTechnology