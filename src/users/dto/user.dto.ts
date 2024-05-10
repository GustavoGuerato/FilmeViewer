// dto/user.dto.ts
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username?: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password?: string;

  @IsString()
  @IsEmail()
  email?: string;
}
