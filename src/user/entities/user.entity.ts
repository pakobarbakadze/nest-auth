import { Entity, Column } from 'typeorm';
import * as bcrypt from 'bcrypt';
import Model from 'src/entities/model.entity';

@Entity('users')
export class User extends Model {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
