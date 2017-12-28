import { expect } from 'chai';
import { search, searchAlbuns, searchArtists, searchTracks, searchPlaylists} from '../src/main'
describe('Spotify Wrapper', () => {

  describe('Smoke Tesks', () => {

    it('shoud exist the search method', () => {
      expect(search).to.exist;
    });

    it('shoud exist the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
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

});
