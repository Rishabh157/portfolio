
import { NumberTicker } from "./NumberTicker"
interface PropTypes {
    title: string
    value: number
    isPlus: boolean
}

const Statistics = ({ title, value, isPlus = false }: PropTypes) => {
    return (
        <div className="">
            <h5 className="text-secondary text-[2.5rem] mt-[0.2rem] mb-[0.5rem] font-normal text-center">
                <NumberTicker value={value} />{isPlus ? '+' : null}
            </h5>
            <span className="text-[#3a3a3a] text-[0.2px] text-xl font-normal text-center leading-none cursor-default">{title}</span>
        </div>
    )
}

export default Statistics
