import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants/repository';
import { CreateUserDto } from '../../app/dto/create-user.dto';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { ErrorCode } from '@/shared/constants/error-code';

@Injectable()
export class CreateUserService {
  @Inject(USER_REPOSITORY)
  private readonly repository: typeof User;

  async execute(createUserDto: CreateUserDto) {
    // 检查用户名是否已存在
    const existingUsername = await this.repository.findOne({
      where: { username: createUserDto.username },
    });
    if (existingUsername) {
      throw ExceptionFactory.bizException(ErrorCode.USERNAME_ALREADY_EXISTS);
    }

    // 检查邮箱是否已存在
    const existingEmail = await this.repository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingEmail) {
      throw ExceptionFactory.bizException(ErrorCode.EMAIL_ALREADY_EXISTS);
    }

    // 检查手机号是否已存在（如果提供）
    if (createUserDto.phone) {
      const existingPhone = await this.repository.findOne({
        where: { phone: createUserDto.phone },
      });
      if (existingPhone) {
        throw ExceptionFactory.bizException(ErrorCode.PHONE_ALREADY_EXISTS);
      }
    }

    // 创建用户
    return this.repository.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      phone: createUserDto.phone,
      avatar: createUserDto.avatar,
      dateOfBirth: createUserDto.dateOfBirth,
      gender: createUserDto.gender,
      isActive: createUserDto.isActive ?? true,
    });
  }
}
