import Button from "../Element/Button"
import Navbar from "../Fragment/Navbar"
import Logo from "./Logo"

const NavbarLayout = (props) => {
    return (
        <div className="w-full h-24">
            <div className="flex w-full h-full justify-center items-end gap-4">
                <Logo></Logo>
                <div className="w-2/3 h-[64px] bg-blur bg-opacity-50 bg-rgba-217-217-217-04 rounded-3xl text-white pl-4 pr-4 flex justify-end items-center">
                    <Navbar></Navbar>
                    <Button width='w-32'></Button>
                </div>
            </div>
        </div>
    )
}

export default NavbarLayout