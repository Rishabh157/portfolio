import { FlipWords } from "../../@/components/ui/flip-words";

interface AnimationWordsPropType {
    words: string[]
}

export function AnimationWords({ words = ["better", "cute", "beautiful", "modern"] }: AnimationWordsPropType) {
    return (
        <span className="desktop:font-medium laptop:font-medium tablet:font-medium mobile:font-bold desktop:text-[30px] laptop:text-[30px] tablet:text-[28px] mobile:text-[22px]">
            <FlipWords words={words} />
        </span>
    );
}
