import React, { FC } from "react";
import "./Input.scss";

type Props = {
    type: string
    value: string
    setValue: (value: string) => void
    placeholder: string
}
const Input: FC<Props> = ({type, value, setValue, placeholder}) => {
    return (
        <div className={"custom_input"}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
};

export default Input;