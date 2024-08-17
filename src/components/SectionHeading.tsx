import { twMerge } from "tailwind-merge"

interface SectionHeadingPropTypes {
    heading: string
    className?: string
}

const SectionHeading = ({ heading, className }: SectionHeadingPropTypes) => {
    return (
        <h2 className={twMerge("text-light-dark font-extralight desktop:text-[70px] laptop:text-[70px] tablet:text-[50px] mobile:text-[24px]", className)}>
            {heading}
        </h2>
    )
}

export default SectionHeading