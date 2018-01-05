import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index'

describe('Album', () => {
  let spotify;
  let stubedFetch;
  let promise;

  beforeEach( () =>{
    spotify = new SpotifyWrapper({
      apiUrl: 'https://api.spotify.com/v1',
      token: 'foo'
    });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach( () => {
    stubedFetch.restore();
  });
  describe('smoke tests', () =>{
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    })

    it('should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });


  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const albums = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(albums.resolveValue).to.be.eql({ album: 'name'});
    });
  });

  describe('getAlbums', () => {
    it('shoud call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.calledOnce;
    });

    it('should call fetch method with correct URL', () => {
      const albums = spotify.album.getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37');
    });

    it('shoud return the correct data from Promise', () => {
      promise.resolves({ albums: ['name', 'name'] });
      const albums = spotify.album.getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4']);
      expect(albums.resolveValue).to.be.eql({ albums: ['name', 'name'] });
    });

  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const tracks = spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with correct URL', () => {
      const tracks = spotify.album.getTracks('6akEvsycLGftJxYudPjmqK');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const tracks = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(tracks.resolveValue).to.be.eql({ album: 'name'});
    });

  });

});
