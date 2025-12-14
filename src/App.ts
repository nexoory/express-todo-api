import express from 'express'

import { TaskRouter } from '@/routes/task.route'

import { TaskController } from '@/controllers/Task.controller'

import { TaskService } from '@/services/Task.service'

const app = express()

app.use(express.json())

app.use(
    '/api/tasks',
    TaskRouter(new TaskController({ service: new TaskService() }))
)

app.get('/health', (req, res) => {
    res.status(200).send('OK')
})

app.get('/', (req, res) => {
    res.status(404)
})

export { app }
