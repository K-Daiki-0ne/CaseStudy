import axios from 'axios';

const END_POINT = 'localhost:4000/';

export default {
  postStudy() {
    return {
      fetchAll: () => axios.get(END_POINT),
      fetchbyId: id => axios.get(`${END_POINT}${id}`),
      create: newStudy => axios.post(`${END_POINT}`, newStudy),
      update: (id, updStudy) => axios.put(`${END_POINT}${id}`, updStudy),
      delete: id => axios.delete(`${END_POINT}${id}`)
    }
  }
}