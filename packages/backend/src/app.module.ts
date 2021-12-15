import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './answer/answer.entity';
import { AnswerModule } from './answer/answer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Question } from './question/question.entity';
import { QuestionModule } from './question/question.module';
import { Quiz } from './quiz/quiz.entity';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    QuizModule,
    TypeOrmModule.forFeature([Quiz]),
    QuestionModule,
    TypeOrmModule.forFeature([Question]),
    AnswerModule,
    TypeOrmModule.forFeature([Answer]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [Quiz, Question],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
