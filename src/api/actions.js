export const urlSeasons = 'https://api.pubg.com/shards/steam/seasons';

export const url = {
  player: 'https://localhost:5000/api/pubg/player/',
  match: 'https://api.pubg.com/shards/steam/matches/',
  lifetime: function(accountId) {
    return (
      'https://api.pubg.com/shards/steam/players/' +
      accountId +
      '/seasons/lifetime'
    );
  }
};
export const Jacob = 'J4cksard';
export const Danny = 'Twisted_OO';
export const Igor = 'Valhalla';
export const Rodin = 'chicken';

export const examplePlayerId = 'account.ae70c0ffc0db479ab5b464c25f702f48';
export const exampleMatchId = 'e32b519e-0b43-438e-9f24-46aae784c51b';

export const urlLifeTime = `//api.pubg.com/shards/steam/players/+${examplePlayerId}+/seasons/lifetime`;

export const urlMatches =
  'https://api.pubg.com/shards/steam/matches/' + exampleMatchId;
