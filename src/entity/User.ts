import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity() 
export class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: number;
  
  @Column()
  accountNumber: number;
  
  @Column()
  accountDate: number;
  
  @Column()
  wallet: number;
  
  @Column()
  email: number;
  
  @Column()
  password: number;
  
}