import Header5 from "../Element/Header5"

const Logo = (props) => {
    return (
        <div className="w-44 h-[64px] z-10 bg-[#1F1F1F] rounded-3xl font-custom font-bold text-white p-4 flex">
            <img src="/public/image/logo codeelder.png" alt="" />
            <div className="w-full flex items-center justify-center">
                <Header5>Codeelder</Header5>
            </div>
        </div>
    )
}

export default Logo