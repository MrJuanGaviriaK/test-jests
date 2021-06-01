describe('Matchers', () => {
  const user = {
    name: 'Juan',
    lastname: 'Gaviria'
  }

  const user2 = {
    name: 'David',
    lastname: 'Agudelo'
  }

  test('Igualdad de elementos', () => {
    expect('JUAN').toEqual('JUAN')
  });

  test('Desigualdad de elementos', () => {
    expect(user).not.toEqual(user2)
  });

});