import { z } from "zod";

export const todoSchema = z.object({
   id: z.number().positive(),
   title: z.string().min(1),
   content: z.string().min(1),
   createdAt: z.date(),
   updatedAt: z.date().optional(),
});

//Disponibiliza a possibilidade de extrairmos tipagens de schemas 


export const todoCreateBodySchema = todoSchema.pick({
   title: true,
   content: true,
});



export const todoUpdateBodySchema = todoSchema
   .pick({
      title: true,
      content: true,
   })
   .partial();
 

/*
export const todoCreateBodySchema = z.object({
   title: z.string().min(1),
   content: z.string().min(1),
});

export const todoUpdateBodySchema = z.object({
    title: z.string().optional(),
    content: z.string().optional()
});
*/
