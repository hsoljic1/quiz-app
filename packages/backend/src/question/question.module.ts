import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { Quiz } from 'src/quiz/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), TypeOrmModule.forFeature([Quiz])],
  providers: [QuestionService],
  controllers: [QuestionController],
})

export class QuestionModule {}