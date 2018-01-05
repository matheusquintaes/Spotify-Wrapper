/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQCD8bpXmfatd3Fb27b-dU-oEJQEF7kuYGOH2r0e-jF2ZRMi7cXq7MgBPZ_XdFGJALbj4f-EwG-cfFNrmkTLWc_N10f40zS_omAKH92HGl3wAKTKtC9NovhAzWAFU_3Mh1VSqFMoZL2RtMc',
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
