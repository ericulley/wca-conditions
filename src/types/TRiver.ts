import { z } from 'zod';

export const ZRiver = z.object({
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

export type TRiver = z.infer<typeof ZRiver>;
