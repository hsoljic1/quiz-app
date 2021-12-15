import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>
  ) {}

  findAll(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  findOne(id: number): Promise<Quiz> {
    return this.quizRepository.findOne(id);
  }

  async create(title: string, description: string): Promise<Quiz> {
    const result = await this.quizRepository.create({
      title,
      description
    });
    await this.quizRepository.save(result);
    return result;
  }

  async remove(id: string): Promise<void> {
    await this.quizRepository.delete(id);
  }
}
