export default interface River {
    id?: number;
    riverName: string;
    stationId?: number;
    cfs?: string;
    hatches: string | undefined;
    flies: string | undefined;
    riverReport: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
}
