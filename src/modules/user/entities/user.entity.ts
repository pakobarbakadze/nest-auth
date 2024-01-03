import { Entity, Column, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import Model from 'src/entities/model.entity';
import { Post } from 'src/modules/posts/entities/post.entity';

@Entity('users')
export class User extends Model {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
