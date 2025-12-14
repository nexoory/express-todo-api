import z from 'zod'

export const parse = <T extends z.ZodType>(
    data: z.input<T>,
    schema: T
): z.output<T> => {
    return schema.parse(data)
}
