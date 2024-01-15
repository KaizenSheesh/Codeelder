const Header1 = (props) => {
    const {children} = props
    return (
        <h1 className="font-custom tracking-wide font-semibold text-white text-5xl text-start">{children}</h1>
    )
}

export default Header1