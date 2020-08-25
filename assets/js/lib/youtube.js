import fetch from 'axios';
import youtubeMock from '../../mock/youtube.json';

const key = process.env.YTKEY;
const playlist = process.env.PLAYLIST;
const maxResults = 8;

const apiURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&type=video&order=date&maxResults=${maxResults}&playlistId=${playlist}&key=${key}`;

export const getVideos = async () => {
  // const result = await fetch(apiURL);
  // return result.data;
  return youtubeMock;
};
