import { TaskServiceType } from '@/interfaces/Task.interface'
import prisma from '@/lib/prisma'

export class TaskService implements TaskServiceType {
    async getAllTasks() {
        return prisma.task.findMany({
            orderBy: { createdAt: 'desc' },
        })
    }
}
