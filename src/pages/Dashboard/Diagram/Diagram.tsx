import React, { FC, memo, ReactElement, useCallback, useState } from "react";
import { PieChart, Pie } from "recharts";
import { DiagramSection } from "../../../types/types";
import { helpers } from "../../../utils/helpers";

import ElemRow from "../components/ElemRow";
import RenderActiveShape from "../components/RenderActiveShape";
import "./Diagram.scss";

type Props = {
    data: DiagramSection[]
}
const Diagram: FC<Props> = ({data}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const onPieEnter = useCallback(
        (_: unknown, index: number) => setActiveIndex(index), [setActiveIndex]
    );
    return (
        <div className={"diagram"}>
            <PieChart className={"pie_chart"} width={400} height={400}>
                <Pie
                    activeIndex={activeIndex === 5 ? [0,1,2,3] : activeIndex }
                    activeShape={
                        (props: (ReactElement)) =>
                            <RenderActiveShape
                                {...props}
                                activeIndx={activeIndex}
                                data={data}
                            />
                    }
                    data={data}
                    cx={200}
                    cy={200}
                    innerRadius={70}
                    outerRadius={80}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
            <div className="list">
                <ElemRow
                    label={"Всего"}
                    value={helpers.calcAllValues(data)}
                    onHover={(indx) => {
                        setActiveIndex(indx);
                    }}
                    activeIndex={activeIndex}
                    index={5}
                />
                {data.map((elem, index) =>
                    <ElemRow
                        label={elem.label}
                        value={elem.value}
                        key={elem.label}
                        onHover={(indx) => setActiveIndex(indx)}
                        activeIndex={activeIndex}
                        index={index}
                    />
                )}
            </div>
        </div>
    );
};

export default memo(Diagram);