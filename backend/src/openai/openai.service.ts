import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private readonly openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
        baseURL: "https://ai.psu.blue/v1",
      apiKey: process.env.PSU_AI_API_KEY,
    });
  }

  async chat(message: string) {
    const response = await this.openai.responses.create({
      model: 'openai/gpt-5.6-luna',
      input: message,
    });

    return response.output_text;
  }
}