import FlowerLeft from "../SvgElement/FlowerLeft"
import FlowerRight from "../SvgElement/FlowerRIght"

const FlowerLayout = (props) => {
    return (
        <div className="flex">
            <FlowerLeft></FlowerLeft>
            <FlowerRight></FlowerRight>
        </div>
    )
}

export default FlowerLayout