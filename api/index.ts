import axios from 'axios';
import { PostType } from '../types';

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

export const getPostsList = () => API.get<PostType[]>('posts');

export const showPost = (id: number) =>
  API.get<PostType>(`posts/${id}`);
