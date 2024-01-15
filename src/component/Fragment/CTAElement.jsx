import { MoveRight } from 'lucide-react';
const CTAElement = (props) => {
    const {children} = props
    return (
        <div className="flex gap-3 mt-5">
            <a className='text-white text-2xl' href="#">{children}</a>
            <div className="hover:translate-x-2">
                <MoveRight color='white' size={36} />
            </div>
        </div>
    )
}

export default CTAElement