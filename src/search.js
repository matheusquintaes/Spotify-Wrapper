/* global fetch */

export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`).then(data => data.json());

export const searchArtists = (query) => {
  search(query, 'artist');
};
export const searchAlbuns = (query) => {
  search(query, 'albuns');
};
export const searchTracks = (query) => {
  search(query, 'track');
};
export const searchPlaylists = (query) => {
  search(query, 'playlist');
};