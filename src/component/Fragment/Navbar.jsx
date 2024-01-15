import Anchor from "../Element/Anchor";

const Navbar = (props) => {
    const { children } = props
    return (
        <div className="w-full flex justify-end gap-5 mr-10">
            <Anchor href="#">Home</Anchor>
            <Anchor href="#">About</Anchor>
            <Anchor href="#">Projects</Anchor>
        </div>
    )
}

export default Navbar;