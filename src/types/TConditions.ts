import { z } from 'zod';
import { ZGeneralReport } from './TGeneralReport';
import { ZLake } from './TLake';
import { ZRiver } from './TRiver';

export const ZConditions = z.object({
    generalReport: ZGeneralReport.nullable(),
    river: ZRiver.nullable(),
    lake: ZLake.nullable(),
});

export type TConditions = z.infer<typeof ZConditions>;
