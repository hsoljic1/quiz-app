import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}