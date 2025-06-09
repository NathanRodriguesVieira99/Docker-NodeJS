import { z } from 'zod';

export const deleteByIDSchema = z.object({
  id: z.string().uuid(),
});
