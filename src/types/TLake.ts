import { z } from 'zod';

export const ZLake = z.object({
    _id: z.number().optional(),
    name: z.string().nullable(),
    stationId: z.string().min(8).max(9).nullable(),
    report: z.string().nullable(),
    date: z.string().datetime().nullable().optional(),
    height: z.string().optional().nullable(),
    hatches: z.string().optional().nullable(),
    createdAt: z.number().optional().nullable(),
    updatedAt: z.number().optional().nullable(),
});

export type TLake = z.infer<typeof ZLake>;
