const Anchor = (props) => {
    const { children, href, className } = props
    return (
        <a href={href} className={`${className} font-custom`}>{children}</a>
    )
}

export default Anchor;