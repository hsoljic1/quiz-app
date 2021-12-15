import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { Answer } from './answer.entity';
import { Question } from 'src/question/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Answer]), TypeOrmModule.forFeature([Question])],
  providers: [AnswerService],
  controllers: [AnswerController],
})

export class AnswerModule {}