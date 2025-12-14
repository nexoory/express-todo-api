import { TaskEntityType } from '@/interfaces/Task.interface'
import { parse } from '@/lib/parse'
import { TaskEntitySchema } from '@/schemas/Task.schema'

import { Task } from '@/generated/client'

export const TaskMapper = {
    toDomain(task: Task): TaskEntityType {
        const raw: TaskEntityType = {
            id: task?.id,
            title: task?.title,
            description: task?.description,
            isCompleted: task?.isCompleted,
            createdAt: task?.createdAt,
            updatedAt: task?.updatedAt,
            dueDate: task?.dueDate,
        }

        return parse(raw, TaskEntitySchema)
    },

    toPersistence(task: TaskEntityType): Task {
        return {
            id: task?.id,
            title: task?.title,
            description: task?.description,
            isCompleted: task?.isCompleted,
            createdAt: task?.createdAt,
            updatedAt: task?.updatedAt,
            dueDate: task?.dueDate,
        }
    },
}
