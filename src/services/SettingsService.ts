import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }) {
    //select * from settings where username = "username" limit 1;
    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    })

    // o throw ele repassa o erro, e quando da o erro, para a camada de cima
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = this.settingsRepository.create({
      chat,
      username
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService }