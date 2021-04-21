import { Injectable } from '@nestjs/common';
import { Card } from 'src/card/entities/card.entity';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { Log } from './entities/log.entity';
import { LogRepository } from './log.repository';

@Injectable()
export class LogService {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async getUserLog(login: string): Promise<Log[]> {
    const userId = (
      await this.userRepository.findOne({
        where: { name: login },
      })
    ).getId();
    return await this.logRepository.find({ where: { userId: userId } });
  }

  async getCardLog(id: number): Promise<Log[]> {
    return await this.logRepository.find({ where: { cardId: id } });
  }

  async getAll(): Promise<Log[]> {
    return await this.logRepository.find();
  }

  async createLog(user: User, card: Card, type: string): Promise<void> {
    const log = new Log(user, card, type);
    await this.logRepository.save(log);
  }
}