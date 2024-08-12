interface SectionHeadingPropTypes {
    heading: string
}

const SectionHeading = ({ heading }: SectionHeadingPropTypes) => {
    return (
        <h2 className="text-light-dark font-extralight desktop:text-[70px] laptop:text-[70px] tablet:text-[50px] mobile:text-[24px]">
            {heading}
        </h2>
    )
}

export default SectionHeading