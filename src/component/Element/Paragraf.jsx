const Paragraf = (props) => {
    const {children} = props
    return (
        <p className="text-start font-custom font-normal text-white text-2xl">
            {children}
        </p>
    )
}

export default Paragraf