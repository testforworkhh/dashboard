export type DiagramSection = {
    name: string
    fill: string
    value: number
    label: string
    field: string
    sectionName: string
}
export type Statistic = {
    active: number
    completed: number
    inactive: number
}
export type DataQuery = {
    dialogs: Statistic
    lists: Statistic
    scenarios: Statistic
    __typename?: string
}