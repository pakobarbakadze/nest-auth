import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const { username, hashedPassword } = createUserDto;

    const user = new User();
    user.username = username;
    user.password = hashedPassword;

    return this.userRepository.save(user);
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }
}
