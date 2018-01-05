function searcher(type, query) {
  return this.request(`${this.apiURL}/search?q=${query}&type=${type}`);
}

export default function search() {
  return {
    artists: searcher.bind(this, 'artist'),
    albums: searcher.bind(this, 'album'),
    tracks: searcher.bind(this, 'track'),
    playlists: searcher.bind(this, 'playlist'),
  };
}

// import { API_URL, HEADERS } from './config';
// import toJSON from './utils';

// export const search = (query, type) =>
//   fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then(toJSON);

// export const searchArtists = query => search(query, 'artist');

// export const searchAlbums = query => search(query, 'album');

// export const searchTracks = query => search(query, 'track');

// export const searchPlaylists = query => search(query, 'playlist');

