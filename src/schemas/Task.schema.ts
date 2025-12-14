import z from 'zod'

export const TaskEntityPayloadSchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    isCompleted: z.boolean().default(false),
})

export const TaskEntitySchema = TaskEntityPayloadSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    dueDate: z.date().nullable(),
})
