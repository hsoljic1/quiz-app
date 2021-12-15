import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private answerService: AnswerService) {}
  
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `answer ${id}`;
  }

  @Post()
  create(@Body('quizId') quizId: number, @Body('text') text: string, @Body('isCorrect') isCorrect: boolean) {
    return this.answerService.create(quizId, text, isCorrect);
  }
}
