import { z } from 'zod';

export const ZLake = z.object({
    _id: z.number().optional(),
    name: z.string(),
    stationdId: z.number().optional(),
    cfs: z.string().optional(),
    hatches: z.string().optional(),
    flies: z.string().optional(),
    report: z.string().optional(),
    createdAt: z.number().optional().nullable(),
    updatedAt: z.number().optional().nullable(),
});

export type TLake = z.infer<typeof ZLake>;
