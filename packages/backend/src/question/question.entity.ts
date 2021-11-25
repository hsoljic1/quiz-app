import { Quiz } from 'src/quiz/quiz.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'Question' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Quiz, quiz => quiz.questions)
  quiz: Quiz;

}