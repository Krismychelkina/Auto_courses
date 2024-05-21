const axios = require('axios');

async function getRandomAuthor(baseUrl) {
  const responseAll = await axios.get(`${baseUrl}/Authors`);
  const randomAuthor = responseAll.data[Math.floor(Math.random() * responseAll.data.length)];
  return randomAuthor;
}

describe('Authors negative API Tests', () => {
  const baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

  test('Create new author with invalid id - server error', async () => {
    const newAuthor = {
      id: 'apiTestId',
    };
    try {
      await axios.post(`${baseUrl}/Authors`, newAuthor);
    } catch (error) {
      expect(error.response.status).toEqual(400);
    }
  });

  test('Create new author with invalid idBook - server error', async () => {
    const newAuthor = {
      idBook: 'apiTestFirstNameIdBook',
    };
    try {
      await axios.post(`${baseUrl}/Authors`, newAuthor);
    } catch (error) {
      expect(error.response.status).toEqual(400);
    }
  });

  test('Create new author with invalid firstName - server error', async () => {
    const newAuthor = {
      firstName: 1,
    };
    try {
      await axios.post(`${baseUrl}/Authors`, newAuthor);
    } catch (error) {
      expect(error.response.status).toEqual(400);
    }
  });

  test('Create new author with invalid lastName - server error', async () => {
    const newAuthor = {
      lastName: 2,
    };
    try {
      await axios.post(`${baseUrl}/Authors`, newAuthor);
    } catch (error) {
      expect(error.response.status).toEqual(400);
    }
  });

  test('Update new author with invalid idBook - server error', async () => {
    try {
      const randomAuthor = await getRandomAuthor(baseUrl);
      const updatedAuthor =  {
        idBook: 'apiTestIdBook',
      };
      await axios.put(`${baseUrl}/Authors/${randomAuthor.id}`, updatedAuthor);
    } catch (error) {
      expect(error.response.status).toEqual(400);
    }
  });

  test('Update new author with invalid firstName - server error', async () => {
    try {
      const randomAuthor = await getRandomAuthor(baseUrl);
      const updatedAuthor =  {
        firstName: 3,
      };
      await axios.put(`${baseUrl}/Authors/${randomAuthor.id}`, updatedAuthor);
    } catch (error) {
      expect(error.response.status).toEqual(400);
    }
  });

  test('Update new author with invalid lastName - server error', async () => {
    try {
      const randomAuthor = await getRandomAuthor(baseUrl);
      const updatedAuthor =  {
        lastName: 4,
      };
      await axios.put(`${baseUrl}/Authors/${randomAuthor.id}`, updatedAuthor);
    } catch (error) {
      expect(error.response.status).toEqual(400);
    }
  });
});
