import { Body, Controller, Post } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Controller('openai')
export class OpenAIController {
  constructor(
    private readonly openAIService: OpenAIService,
  ) {}

  @Post('chat')
  async chat(@Body('message') message: string) {
    const result = await this.openAIService.chat(message);
    return {
      message: result,
    };
  }

}