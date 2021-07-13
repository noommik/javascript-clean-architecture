import BaseUseCase from '@/usecases/BaseUseCase';
import ErrorService from '@/services/ErrorService';
import CatRepository from '@/repositories/CatRepository';
import { CatPayload } from '@/entities/Cat';

export interface ILoadContainerUseCase {
  catRepository: CatRepository;

  request: CatPayload;

  errorService: ErrorService;
}

export default class LoadContainerUseCase implements BaseUseCase {
  catRepository: CatRepository;

  request: CatPayload;

  errorService: ErrorService;

  constructor({ catRepository, request, errorService }: ILoadContainerUseCase) {
    this.catRepository = catRepository;
    this.request = request;
    this.errorService = errorService;
  }

  async execute(): Promise<void> {
    try {
      const data = await this.catRepository.fetchItem(this.request);
      this.catRepository.saveItem(data);
    } catch (e) {
      await this.errorService.handle(e);
    }
  }
}
