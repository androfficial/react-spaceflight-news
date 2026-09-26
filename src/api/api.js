import axios from 'axios';
import textTransform from '@services/textTransform';

const instance = axios.create({
  method: 'get',
  baseURL: 'https://api.spaceflightnewsapi.net/v4/',
});

const mainAPI = {
  async getPosts() {
    try {
      const { data } = await instance('articles/?limit=6');

      return data.results.map((obj) => ({
        id: obj.id,
        imageUrl: obj.image_url,
        title: textTransform(obj.title),
        summary: textTransform(obj.summary),
        publishedAt: obj.published_at.slice(0, 10),
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
      const { data } = await instance(`articles/${id}/`);

      return {
        id: data.id,
        imageUrl: data.image_url,
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
