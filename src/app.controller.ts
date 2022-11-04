import { Controller, Post, Body } from '@nestjs/common';
import { ApiPropertyEnum } from './decorators/api-property-enum.decorator';

enum MyEnum {
  FOO = 1,
  BAR = 2,
  BAZ = 3,
}

class MyDto {
  @ApiPropertyEnum({
    enum: MyEnum,
    enumName: 'MyEnum',
  })
  value: MyEnum;
}

@Controller()
export class AppController {
  @Post()
  getBody(
    @Body()
    body: MyDto,
  ) {
    return body;
  }
}
