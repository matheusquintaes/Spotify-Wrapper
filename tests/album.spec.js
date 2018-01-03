//getAlbum
//getAlbuns
//getAlbumTrakcs

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = require('node-fetch');

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album'

describe('Album', () => {

  let stubedFetch;
  let promise;

  beforeEach( () =>{
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach( () => {
    stubedFetch.restore();
  });

  describe('smoke tests', () =>{
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    })

    it('should have getAlbums method', () => {
      expect(getAlbums).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with corret URL', () => {
      const album = getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

      const album2 = getAlbum('0sNOF9WDwhWunNAHPD3Bak');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bak');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album : 'name' });
      const album = getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(album.resolveValue).to.be.eql({ album : 'name' });
    });

  });

  describe('getAlbums', () => {
    it('shoud call fetch method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.calledOnce;
    });

    it('should call fetch method with correct URL', () => {
      const albums = getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37');
    });

    it('shoud return the correct data from Promise', () => {
      promise.resolves({ albums: ['name', 'name'] });
      const albums = getAlbums(['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4']);
      expect(albums.resolveValue).to.be.eql({ albums: ['name', 'name'] });
    });

  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const tracks = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with correct URL', () => {
      const tracks = getAlbumTracks('6akEvsycLGftJxYudPjmqK');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name'});
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(tracks.resolveValue).to.be.eql({ album: 'name'});
    });

  });

});
