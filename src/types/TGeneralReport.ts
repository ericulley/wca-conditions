import { z } from 'zod';

export const ZGeneralReport = z.object({
    _id: z.number().optional(),
    date: z.string().nullable(),
    report: z.string().nullable(),
});

export type TGeneralReport = z.infer<typeof ZGeneralReport>;
