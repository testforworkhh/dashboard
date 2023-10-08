import React, { FC, memo } from "react";
import cn from "classnames";

type Props = {
    label: string
    value: number
    index: number
    activeIndex: number | null
    onHover: (indx: number) => void
}
const ElemRow: FC<Props> = ({label, value, onHover, index, activeIndex}) => {
    return (
        <div
            className={cn("row", {
                active:  (index === activeIndex)
            })}
            onMouseEnter={() => onHover(index)}
        >
            <div className="label">{label}:</div>
            <div className="value">{value}</div>
        </div>
    );
};

export default memo(ElemRow);