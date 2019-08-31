import {BaseService} from '../../src/dependencyInjection/baseService';
import {Service} from '../../src/dependencyInjection/service';
import {Observable} from '../../src/observer/observable';


@Service('Search')
export class Search extends BaseService {
  @Observable()
  index: number = 0;

  @Observable()
  name: string = 'aryan';

  preload = async () => {
    this.index = 454;
  };

  sayHello = () => {
    return this.index++;
  }
}
