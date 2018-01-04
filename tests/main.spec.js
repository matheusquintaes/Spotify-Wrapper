import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists} from '../src/search'


describe('Spotify Wrapper', () => {

  let fetchStub;
  let promise;

  beforeEach( () => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });

  afterEach( () =>{
    fetchStub.restore();
  });

  describe('Smoke Tesks', () => {

    it('shoud exist the search method', () => {
      expect(search).to.exist;
    });

    it('shoud exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('shoud exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('shoud exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('shoud exist the search method', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Generic Search', () => {

    it('should call fetch function', () => {
      const artists = search();
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('shoud receive the correct URL', () => {

      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
        expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albuns = search('Incubus', 'album');
        expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      })

      context('passing more than one type',() => {
        const artistsAndAlbuns = search('Incubus', ['artist', 'album']);
        expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });

    it('shoud return the JSON Data from the promise', () => {
      promise.resolves({ body : 'json' });
      const artists = search('Incubus', 'artist');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });

  });

  describe('Search artists', () => {
    it('shoud call fetch function', () =>{
      const artist = searchArtists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('shoud call fetch with the correct URL', () => {
      const artist = searchArtists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');;
    });
  });

  describe('Search albuns', () => {
    it('shoud call fetch function', () =>{
      const albuns = searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('shoud call fetch with the correct URL', () => {
      const albuns = searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albuns');;
    });
  });

  describe('Search albuns', () => {
    it('shoud call fetch function', () =>{
      const albuns = searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('shoud call fetch with the correct URL', () => {
      const albuns = searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albuns');;
    });
  });

  describe('Search tracks', () => {
    it('shoud call fetch function', () =>{
      const tracks = searchTracks('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('shoud call fetch with the correct URL', () => {
      const tracks = searchTracks('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');;
    });
  });

  describe('Search playlist', () => {
    it('shoud call fetch function', () =>{
      const tracks = searchPlaylists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('shoud call fetch with the correct URL', () => {
      const tracks = searchPlaylists('Incubus');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');;
    });
  });

});
