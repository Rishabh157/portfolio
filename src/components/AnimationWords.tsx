import { FlipWords } from "../../@/components/ui/flip-words";

interface AnimationWordsPropType {
    words: string[]
}

export function AnimationWords({ words = ["better", "cute", "beautiful", "modern"] }: AnimationWordsPropType) {

    return (
        <span className="text-[30px] mx-auto font-normal text-white">
            <FlipWords words={words} />
        </span>
    );
}
