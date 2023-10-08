import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { dataMock } from "../../utils/data";
import { DiagramSection } from "../../types/types";
import Diagram from "./Diagram/Diagram";
import { FETCH_DASHBOARD } from "../../query/fetchDashboard";
import { message } from "antd";

import "./Dashboard.scss";

const Dashboard = () => {
    const {refetch, error} = useQuery(FETCH_DASHBOARD);
    const [displayData, setDisplayData] = useState<DiagramSection[][]>([]);

    const convertDisplayFormat = (dataQuery: any): DiagramSection[][] => {
        const copyDataQuery = {...dataQuery};
        const copyDataMock = [...dataMock];
        delete copyDataQuery.__typename;
        const keys = Object.keys(copyDataQuery);

        const findIndxSection = (key: string) => {
            for (let i = 0; i < copyDataMock.length; i++) {
                const findIndx = copyDataMock[i].find(elem => elem.sectionName === key);
                if (findIndx && Object.keys(findIndx)?.length > 0)
                    return i;
            }
        };

        for (let i = 0; i < keys.length; i++) {
            const currentIndx = findIndxSection(keys[i]);

            if (typeof currentIndx !== "undefined") {
                let newSection = copyDataMock[currentIndx];
                newSection = newSection.map((elem) => {
                    if (elem.sectionName === keys[i]) {
                        if (elem.field === "active")
                            elem.value = copyDataQuery[keys[i]].active;
                        if (elem.field === "inactive")
                            elem.value = copyDataQuery[keys[i]].inactive;
                        if (elem.field === "completed")
                            elem.value = copyDataQuery[keys[i]].completed;
                    }
                    return elem;
                });
            }
        }
        return copyDataMock;
    };

    useEffect(() => {
        refetch()
            .then(({data}) => {
                if (typeof data !== "undefined" && Object.keys(data)?.length > 0)
                    setDisplayData(convertDisplayFormat(data.dashboard));
            })
            .catch(() => message.error("Error fetch"));
    }, []);
    useEffect(() => {
        if (error?.message)
            message.error(error.message);
    }, [error]);
    return (
        <div className={"dashboard"}>
            {displayData.map((section, indx) =>
                <Diagram data={section} key={indx}/>
            )}
        </div>
    );
};

export default Dashboard;