import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
	   const heroes = [
		  { id: 11, name: 'The Cloud' },
		  { id : 12, name: 'Mr. Green'},
		  { id: 13, name: 'The Light'},
		  { id: 14, name: 'The Dark'},
		  { id: 15, name: 'Dynamo'},
		  { id: 16, name: 'Dr. Thunder'},
		  { id: 17, name: 'The Squeeze'},
		  { id: 18, name: 'Transforma'},
		  { id: 19, name: 'The Boulder'},
		  { id: 20, name: 'Roger'}
	  ];
	   return {heroes};
  }
}

