import store from '../store'
import axios from 'axios'

export default () => axios.create({
    baseURL: store.state.api_url,
});
