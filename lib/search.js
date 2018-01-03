'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global fetch */

var search = exports.search = function search(query, type) {
  return fetch('https://api.spotify.com/v1/search?q=' + query + '&type=' + type).then(function (data) {
    return data.json();
  });
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  search(query, 'artist');
};
var searchAlbuns = exports.searchAlbuns = function searchAlbuns(query) {
  search(query, 'albuns');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  search(query, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};