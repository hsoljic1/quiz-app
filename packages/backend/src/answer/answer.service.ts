import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/question/question.entity';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>
  ) {}

  async findAll(id: number): Promise<Answer[]> {
    const answers = await this.answerRepository.find();
    return answers.filter((answer) => answer.id == id);
  }

  findOne(id: string): Promise<Answer> {
    return this.answerRepository.findOne(id);
  }

  async create(questionId: number, text: string, isCorrect: boolean): Promise<Answer> {
    const question = await this.questionRepository.findOne(questionId);
    const result = this.answerRepository.create({
      text,
      question,
      isCorrect
    });
    await this.answerRepository.save(result);
    return result;
  }

  async remove(id: string): Promise<void> {
    await this.answerRepository.delete(id);
  }
}
