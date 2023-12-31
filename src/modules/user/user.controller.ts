import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  async findOne(@Param('username') username: string) {
    const user = await this.userService.findByUsername(username);
    delete user.password;

    return user;
  }
}
