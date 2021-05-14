import axios from 'axios';

const URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: `${URL}`
});

export const fetchItems = async () => {
  console.log(URL)
  try {
    const resp = await api.get('/browse')
    console.log(resp.data.items)
    return resp.data.items;
  } catch (e) {
    console.log(e)
  }
}
