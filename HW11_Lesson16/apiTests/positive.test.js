const axios = require('axios');

async function getRandomAuthor(baseUrl) {
  const responseAll = await axios.get(`${baseUrl}/Authors`);
  const randomAuthor = responseAll.data[Math.floor(Math.random() * responseAll.data.length)];
  return randomAuthor;
}

describe('Authors positive API Tests', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

  test('Get all authors', async () => {
    const response = await axios.get(`${baseUrl}/Authors`);
    expect(response.status).toEqual(200);
    expect(response.data).toBeInstanceOf(Array);
  });

  test('Get one author by ID', async () => {
    const randomAuthor = await getRandomAuthor(baseUrl);
    const responseOne = await axios.get(`${baseUrl}/Authors/${randomAuthor.id}`);
    expect(responseOne.status).toEqual(200);
    expect(responseOne.data.id).toEqual(randomAuthor.id);
    expect(responseOne.data.firstName).toEqual(randomAuthor.firstName);
    expect(responseOne.data.lastName).toEqual(randomAuthor.lastName);
  });

  test('Create new author', async () => {
    const newAuthor = {
      id: 4,
      idBook: 4,
      firstName: 'apiTestFirstName',
      lastName: 'apiTestLastName',
    };
    const response = await axios.post(`${baseUrl}/Authors`, newAuthor);
    expect(response.status).toEqual(200);
    expect(response.data.id).toEqual(newAuthor.id);
    expect(response.data.idBook).toEqual(newAuthor.idBook);
    expect(response.data.firstName).toEqual(newAuthor.firstName);
    expect(response.data.lastName).toEqual(newAuthor.lastName);
  });

  test('Update existing author', async () => {
    const randomAuthor = await getRandomAuthor(baseUrl);
    const updatedAuthor = {
      idBook: 15,
      firstName: 'apiTestFirstName',
      lastName: 'apiTestLastName',
    };
    const response = await axios.put(`${baseUrl}/Authors/${randomAuthor.id}`, updatedAuthor);
    expect(response.status).toEqual(200);
    expect(response.data.idBook).toEqual(updatedAuthor.idBook);
    expect(response.data.firstName).toEqual(updatedAuthor.firstName);
    expect(response.data.lastName).toEqual(updatedAuthor.lastName);
  });

  test('Delete author', async () => {
    const randomAuthor = await getRandomAuthor(baseUrl);
    const responseDelete = await axios.delete(`${baseUrl}/Authors/${randomAuthor.id}`);
    expect(responseDelete.status).toEqual(200);
  });
});
