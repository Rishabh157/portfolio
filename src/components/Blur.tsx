import BlurIn from "../../@/components/ui/blur-in"

interface BlurPropTypes {
    title: string
}

export const Blur = ({ title }: BlurPropTypes) => {
    return (
        <BlurIn
            word={title}
            className="font-bold dark:text-white"
        />
    );
};
