import axios, { AxiosResponse } from 'axios';
import { API_ENDPOINT, MODULE_API } from '../config';

export const fetchExample = async () => {
  let url = `${API_ENDPOINT}/${MODULE_API}`;
  const axiosResponse: AxiosResponse = await axios.get(url);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};
