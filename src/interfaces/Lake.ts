export default interface River {
    id?: number;
    lakeName: string;
    stationId: number;
    cfs?: string;
    hatches: string | undefined;
    flies: string | undefined;
    lakeReport: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined; 
}