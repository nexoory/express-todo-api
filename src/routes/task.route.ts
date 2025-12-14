import { Router } from 'express'
import { TaskControllerType } from '@/interfaces/Task.interface'

export const TaskRouter = (controller: TaskControllerType) => {
    const router = Router()

    router.get('/', controller.getAllTasks)

    return router
}
