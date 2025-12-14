import z from 'zod'
import { Request, Response } from 'express'
import {
    TaskEntityPayloadSchema,
    TaskEntitySchema,
} from '@/schemas/Task.schema'

export type TaskEntityPayloadType = z.infer<typeof TaskEntityPayloadSchema>
export type TaskEntityType = z.infer<typeof TaskEntitySchema>

export interface TaskServiceType {
    getAllTasks(): Promise<TaskEntityType[]>
    // getTaskById(id: TaskEntityType['id']): Promise<TaskEntityType>
    // createTask(task: TaskEntityPayloadType): Promise<TaskEntityType>
    // updateTask(
    //     id: TaskEntityType['id'],
    //     task: TaskEntityPayloadType
    // ): Promise<TaskEntityType>
    // deleteTask(id: TaskEntityType['id']): Promise<void>
}

export interface TaskControllerType {
    getAllTasks(req: Request, res: Response): Promise<void>
}
