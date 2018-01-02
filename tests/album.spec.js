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

import { getAlbum, getAlbumTracks } from '../src/album'

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

    it('shoud have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () =>{
    //verifica se o fetch ocorre
    it('shoud call fetch method', ()=>{
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    //verifica se o getch ocorre com a url desejada
    it('shoud call fetch method with corret url', () => {
      const album = getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

      const album2 = getAlbum('0sNOF9WDwhWunNAHPD3Bak');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bak');
    });

    //verifica se o dado é recebido pela Promise
    it('shoud return the correct data from promisse', () => {
      promise.resolves({ album : 'name' });
      const album = getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(album.resolveValue).to.be.eql({ album : 'name' });
    });

  });

});
