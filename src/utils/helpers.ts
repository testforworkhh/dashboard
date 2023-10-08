import { DiagramSection } from "../types/types";

export const helpers = {
    calcAllValues(arr: DiagramSection[]) {
        if (Array.isArray(arr) && arr.length > 0)
            return arr.reduce((acc, elem) => acc + elem.value, 0);
        return 0;
    }
};