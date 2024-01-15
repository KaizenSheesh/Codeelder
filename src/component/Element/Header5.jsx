const Header5 = (props) => {
    const { children, className } = props
    return (
        <h5 className={`${className} font-custom`}>{children}</h5>
    )
}

export default Header5