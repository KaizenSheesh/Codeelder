const Button = (props) => {
    const { width = 'w-full', rounded = 'rounded-full' } = props
    return (
        <button type='submit' className={`font-custom h-[45px] ${width} ${rounded} bg-transparent text-white border border-white hover:bg-white hover:text-black`}>Contact</button>
    )
}

export default Button;