import { Question } from 'src/question/question.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'Answer' })
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Question, question => question.answers)
  question: Question;

}