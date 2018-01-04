import { expect } from 'chai';

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper library' , function(){
  it('should create an intance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive apiUrl as an option', () => {
    let spotify = new SpotifyWrapper({
      apiUrl: 'https://test.com'
    })
    expect(spotify.apiUrl).to.be.equal('https://test.com');
  });

  it('should use the default apiUrl if not provide', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiUrl).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    let spotify = new SpotifyWrapper({
      token: 'https://test.com'
    })
    expect(spotify.token).to.be.equal('https://test.com');
  });

});
