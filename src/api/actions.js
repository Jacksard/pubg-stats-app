export const urlSeasons = 'https://api.pubg.com/shards/steam/seasons';

export const url = {
  /* player: 'http://localhost:5000/api/pubg/player/',
  match: 'https://api.pubg.com/shards/steam/matches/',
  lifetime: 'http://localhost:5000/api/pubg/lifetime/' */
  player: 'https://shielded-beyond-95672.herokuapp.com/api/pubg/player/',
  match: 'https://api.pubg.com/shards/steam/matches/',
  lifetime: 'https://shielded-beyond-95672.herokuapp.com/api/pubg/lifetime/'
};

export const examplePlayerId = 'account.ae70c0ffc0db479ab5b464c25f702f48';
export const exampleMatchId = 'e32b519e-0b43-438e-9f24-46aae784c51b';

export const urlLifeTime = `//api.pubg.com/shards/steam/players/+${examplePlayerId}+/seasons/lifetime`;

export const urlMatches =
  'https://api.pubg.com/shards/steam/matches/' + exampleMatchId;
