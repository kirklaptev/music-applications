import {
  IsString,
  MaxLength,
  MinLength,
  Matches,
} from 'class-validator';

export class UserCredentialsSignInDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password is too weak. Password at least must include: 1 upper case letter, 1 lower case letter, 1 digit or special character.',
  })
  password: string;
}
