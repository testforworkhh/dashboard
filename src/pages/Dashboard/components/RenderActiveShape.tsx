import { memo } from "react";
import { Sector } from "recharts";
import { helpers } from "../../../utils/helpers";

const RenderActiveShape = (prop: any) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        value,
        activeIndx,
        data
    } = prop;
    return (
        <g>
            <text
                x={cx}
                y={cy - 10}
                dy={8}
                textAnchor="middle"
                fill={fill}
                className={"text_label"}
            >
                {payload.name}
            </text>
            <text
                x={cx}
                y={cy + 30}
                dy={8}
                textAnchor="middle"
                fill={fill}
                className={"text_value"}
            >
                {activeIndx === 5
                    ? helpers.calcAllValues(data)
                    : value
                }
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius - 1}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={"rgb(249, 167, 83)"}
            />
        </g>
    );
};
export default memo(RenderActiveShape);