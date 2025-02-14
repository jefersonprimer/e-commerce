import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  price: z.number().positive("Preço deve ser maior que zero"),
  stock: z.number().int().nonnegative("Estoque não pode ser negativo"),
});
