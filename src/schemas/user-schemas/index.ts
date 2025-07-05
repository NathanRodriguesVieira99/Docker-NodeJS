import { z } from 'zod';

export const deleteByIDSchema = z.object({
  id: z.string().uuid(),
});

export const requestBodySchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(8, { message: 'A senha deve conter ao menos 8 caracteres' })
    .regex(/[A-Z]/, {
      message: 'A senha deve ter ao menos uma letra maiúscula',
    })
    .regex(/[0-9]/, { message: 'A senha deve ter ao menos um número' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: 'A senha deve ter ao menos um caractere especial',
    }),
});
