
interface PropTypes {
    title: string
    value: string
}

const Statistics = ({ title, value }: PropTypes) => {
    return (
        <div className="">
            <h5 className="text-secondary text-[2.5rem]  mt-[0.2rem] mb-[0.5rem] font-normal text-center">{value}</h5>
            <span className="text-[#3a3a3a] text-[0.2px] text-xl font-normal text-center leading-none cursor-default">{title}</span>
        </div>
    )
}

export default Statistics
