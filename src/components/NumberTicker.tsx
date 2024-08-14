import NumberTickerUI from "../../@/components/ui/number-ticker";

interface NumberTickerPropType {
    value: number
}

export const NumberTicker = ({ value = 100 }: NumberTickerPropType) => {
    return (
        <NumberTickerUI value={value} />
    );
};

