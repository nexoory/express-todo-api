import {
    TaskControllerType,
    TaskServiceType,
} from '@/interfaces/Task.interface'
import { Request, Response } from 'express'

export class TaskController implements TaskControllerType {
    private service: TaskServiceType

    constructor({ service }: { service: TaskServiceType }) {
        this.service = service
    }

    getAllTasks = async (req: Request, res: Response) => {
        const tasks = await this.service.getAllTasks()
        res.json(tasks)
    }
}
