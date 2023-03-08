import { z } from 'zod';

export const ZGeneralReport = z.object({
    _id: z.number().optional(),
    report: z.string().nullable(),
    date: z.string().nullable(),
    createdAt: z.number().optional().nullable(),
    updatedAt: z.number().optional().nullable(),
});

export type TGeneralReport = z.infer<typeof ZGeneralReport>;
