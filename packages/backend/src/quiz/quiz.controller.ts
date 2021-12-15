import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from 'src/question/question.service';
import { QuizModule } from './quiz.module';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService, private questionService: QuestionService) {}

  @Get()
  async findAll(): Promise<QuizModule[]> {
    return this.quizService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<QuizModule> {
    const quiz = await this.quizService.findOne(id);
    quiz.questions = await this.questionService.findAll(id);
    return quiz;
  }

  @Post()
  create(@Body('title') title: string, @Body('description') description: string) {
    return this.quizService.create(title, description);
  }
}
