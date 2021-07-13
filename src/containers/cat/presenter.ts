import { ICat } from '@/entities/Cat';
import CatRepository from '@/repositories/CatRepository';

export interface IPresenter {
  catRepository: CatRepository;
}

export interface IPresenterState {
  item: ICat;
}

export default ({ catRepository }: IPresenter): IPresenterState => ({
  item: catRepository.getItem(),
});
