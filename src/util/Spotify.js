const clientId = '70deb30ef57c4908984d811167922d46';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      let accessUrl = `https://accounts.spotify.com/authorize`; 
      accessUrl += `?response_type=token`;
      accessUrl += `&client_id=${clientId}`;
      accessUrl += `&scope=playlist-modify-public`;
      accessUrl += `&redirect_uri=${redirectUri}`;
      window.location.href = accessUrl;
    }
  },

  
  async search(term) {
    const accessToken = Spotify.getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      });
      const jsonResponse = await response.json();
      if (!jsonResponse.tracks) {
          return [];
      }
      return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
      }));
  },

  async savePlaylist(name, trackUris) {
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};

export default Spotify;
