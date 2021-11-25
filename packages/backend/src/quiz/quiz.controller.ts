import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  findAll(): any {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `quiz ${id}`;
  }

  @Post()
  create(@Body('title') title: string, @Body('description') description: string) {
    return this.quizService.create(title, description);
  }
}
