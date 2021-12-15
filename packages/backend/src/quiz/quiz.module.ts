import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuestionService } from 'src/question/question.service';
import { Question } from 'src/question/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz]), TypeOrmModule.forFeature([Question])],
  providers: [QuizService, QuestionService],
  controllers: [QuizController],
})
export class QuizModule {}