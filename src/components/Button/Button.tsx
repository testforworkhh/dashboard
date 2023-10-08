import "./Button.scss";
import cn from "classnames";
import React, { FC } from "react";

type Props = {
    text: string
    click: () => void
    padding: string
    disabled?: boolean
    width?: string
    margin?: string
}
const Button: FC<Props> = ({text, click, disabled, padding, width,margin}) => {
    return (
        <button
            className={cn("button", {
                disabled
            })}
            style={{
                ...(padding ? {padding} : ""),
                ...(margin ? {margin} : ""),
                ...(width ? {width} : "")
            }}
            disabled={disabled}
            onClick={click}
        >
            <span>{text}</span>
        </button>
    );
};

export default Button;