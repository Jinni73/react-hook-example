import axios from 'axios';

async function getResource(url) {
  const data = await axios.get(url);
  console.log('+++++++++run', data.data)
  return data.data;
}

function postResrouce(url) {

}

export default {
  read: getResource,
  post: postResrouce,
}