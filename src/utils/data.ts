import { DiagramSection } from "../types/types";

export const dataMock: DiagramSection[][] = [
    [
        {
            name: "Сценарии",
            value: 0,
            fill: "rgba(0,0,0, 0.5",
            label: "Активных",
            field: "active",
            sectionName: "scenarios"
        },
        {
            name: "Сценарии",
            value: 0,
            fill: "rgba(0,0,0, 0.4",
            label: "Неактивных",
            field: "inactive",
            sectionName: "scenarios"
        },
        {
            name: "Сценарии",
            value: 0,
            fill: "rgba(0,0,0, 0.3",
            label: "Завершенных",
            field: "completed",
            sectionName: "scenarios"
        }
    ],
    [
        {name: "Списки", value: 0, fill: "rgba(0,0,0, 0.5", label: "Активных", field: "active", sectionName: "lists"},
        {
            name: "Списки",
            value: 0,
            fill: "rgba(0,0,0, 0.4",
            label: "Неактивных",
            field: "inactive",
            sectionName: "lists"
        },
        {
            name: "Списки",
            value: 0,
            fill: "rgba(0,0,0, 0.3",
            label: "Завершенных",
            field: "completed",
            sectionName: "lists"
        }
    ],
    [
        {
            name: "Диалоги",
            value: 0,
            fill: "rgba(0,0,0, 0.5",
            label: "Активных",
            field: "active",
            sectionName: "dialogs"
        },
        {
            name: "Диалоги",
            value: 0,
            fill: "rgba(0,0,0, 0.4",
            label: "Неактивных",
            field: "inactive",
            sectionName: "dialogs"
        },
        {
            name: "Диалоги",
            value: 0,
            fill: "rgba(0,0,0, 0.3",
            label: "Завершенных",
            field: "completed",
            sectionName: "dialogs"
        }
    ]
];