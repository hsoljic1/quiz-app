import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/quiz/quiz.entity';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>
  ) {}

  async findAll(id: number): Promise<Question[]> {
    const questions = await this.questionRepository.find();
    return questions.filter((question) => question.id == id);
  }

  findOne(id: string): Promise<Question> {
    return this.questionRepository.findOne(id);
  }

  async create(quizId: number, text: string): Promise<Question> {
    const quiz = await this.quizRepository.findOne(quizId);
    const result = this.questionRepository.create({
      text,
      quiz,
    });
    await this.questionRepository.save(result);
    return result;
  }

  async remove(id: string): Promise<void> {
    await this.questionRepository.delete(id);
  }
}
