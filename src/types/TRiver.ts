import { z } from 'zod';

export const ZRiver = z.object({
    _id: z.number().optional(),
    name: z.string().nullable(),
    stationId: z.string().nullable(),
    report: z.string().nullable(),
    cfs: z.string().optional().nullable(),
    hatches: z.string().optional().nullable(),
    date: z.date().nullable().optional(),
    createdAt: z.number().nullable(),
    updatedAt: z.number().optional().nullable(),
});

export type TRiver = z.infer<typeof ZRiver>;
