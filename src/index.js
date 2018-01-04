import {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumsTracks,
} from './album';

import { API_URL } from './config';

// module.exports = {
//   search,
//   searchArtists,
//   searchAlbums,
//   searchPlaylists,
//   getAlbum,
//   getAlbums,
//   getAlbumsTracks,
// };

export default class SpotifyWrapper {
  constructor(options) {
    this.apiUrl = options.apiUrl || API_URL;
    this.token = options.token;
  }
}
