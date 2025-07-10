import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from 'src/shared/constants/repository';
import { UpdateUserDto } from '../../app/dto/update-user.dto';
import { ExceptionFactory } from 'src/shared/exception/exception-factory';
import { Op } from 'sequelize';

@Injectable()
export class UpdateUserService {
  @Inject(USER_REPOSITORY)
  private readonly repository: typeof User;

  async execute(id: number, updateUserDto: UpdateUserDto) {
    // 检查用户是否存在
    const user = await this.repository.findByPk(id);
    if (!user) {
      throw ExceptionFactory.bizException({
        code: '404001',
        message: 'User not found',
        httpStatus: 404,
      });
    }

    // 检查唯一字段是否重复（排除当前用户）
    if (updateUserDto.username) {
      const existingUsername = await this.repository.findOne({
        where: {
          username: updateUserDto.username,
          id: { [Op.ne]: id },
        },
      });
      if (existingUsername) {
        throw ExceptionFactory.bizException({
          code: '400001',
          message: 'Username already exists',
          httpStatus: 400,
        });
      }
    }

    if (updateUserDto.email) {
      const existingEmail = await this.repository.findOne({
        where: {
          email: updateUserDto.email,
          id: { [Op.ne]: id },
        },
      });
      if (existingEmail) {
        throw ExceptionFactory.bizException({
          code: '400002',
          message: 'Email already exists',
          httpStatus: 400,
        });
      }
    }

    if (updateUserDto.phone) {
      const existingPhone = await this.repository.findOne({
        where: {
          phone: updateUserDto.phone,
          id: { [Op.ne]: id },
        },
      });
      if (existingPhone) {
        throw ExceptionFactory.bizException({
          code: '400003',
          message: 'Phone number already exists',
          httpStatus: 400,
        });
      }
    }

    // 更新用户
    const updateData: any = {};
    if (updateUserDto.username) updateData.username = updateUserDto.username;
    if (updateUserDto.email) updateData.email = updateUserDto.email;
    if (updateUserDto.password) updateData.password = updateUserDto.password;
    if (updateUserDto.firstName) updateData.firstName = updateUserDto.firstName;
    if (updateUserDto.lastName) updateData.lastName = updateUserDto.lastName;
    if (updateUserDto.phone) updateData.phone = updateUserDto.phone;
    if (updateUserDto.avatar) updateData.avatar = updateUserDto.avatar;
    if (updateUserDto.dateOfBirth)
      updateData.dateOfBirth = updateUserDto.dateOfBirth;
    if (updateUserDto.gender) updateData.gender = updateUserDto.gender;
    if (updateUserDto.isActive !== undefined)
      updateData.isActive = updateUserDto.isActive;

    await user.update(updateData);
    return user;
  }
}
