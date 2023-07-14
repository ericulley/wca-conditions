import { z } from 'zod';

export const ZRiver = z.object({
    _id: z.string().optional(),
    name: z.string().nullable(),
    stationId: z.number().min(10000000).nullable(),
    report: z.string().nullable(),
    date: z.coerce.date().nullable().optional(),
    cfs: z.string().optional().nullable(),
    hatches: z.string().optional().nullable(),
    createdAt: z.number().nullable(),
    updatedAt: z.number().optional().nullable(),
});

export type TRiver = z.infer<typeof ZRiver>;
