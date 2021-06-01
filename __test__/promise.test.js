import { getDataFromApi } from '../promise';

describe('Probando promesas', () => {
  test('Realizando peticion a un API', done => {
    const api = 'https://rickandmortyapi.com/api/character/';
    getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  test('Resuelve in Hola!', () => {
    return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
  });

  test('Rechaza con un error', () => {
    return expect(Promise.reject('Errror')).rejects.toBe('Errror');
  });
});