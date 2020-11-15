import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    // @Get()
    // getAllTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
    //     if(Object.keys(filterDto).length){
    //         return this.taskService.getTasksWithFilters(filterDto);
    //     } else {
    //         return this.taskService.getAllTasks();
    //     }
    // }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(createTaskDto);
    }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     return this.taskService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body('status') status: TaskStatus
    // ){
    //     return this.taskService.updateTaskStatus(id, status);
    // }
}
