import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  findAll(): any {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `question ${id}`;
  }

  @Post()
  create(@Body('quizId') quizId: number, @Body('text') text: string) {
    return this.questionService.create(quizId, text);
  }
}
