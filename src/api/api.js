import axios from 'axios';

const instance = axios.create({
  method: 'get',
  baseURL: 'https://api.spaceflightnewsapi.net/v3/',
});

const mainAPI = {
  async getPosts() {
    try {
      const { data } = await instance('articles?_limit=6');

      return data.map((obj) => ({
        id: obj.id,
        imageUrl: obj.imageUrl,
        summary: obj.summary,
        title: obj.title,
      }));
    } catch (error) {
      if (error.response) {
        console.error(
          `Could not fetch: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
  async getArticle(id) {
    try {
      const { data } = await instance(`articles/${id}`);

      return {
        id: data.id,
        imageUrl: data.imageUrl,
        summary: data.summary,
        title: data.title,
      };
    } catch (error) {
      if (error.response) {
        console.error(
          `Could not fetch: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }

      console.error('Error:', error.message);
      return false;
    }
  },
};

export default mainAPI;
