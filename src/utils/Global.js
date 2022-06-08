//const API_LINK = "https://jaysworld-cb39f.uc.r.appspot.com/";
const API_LINK = "http://localhost:8081/";

module.exports = {
  Login: API_LINK + "auth/login",
  Logout: API_LINK + "auth/logout",
  GetRefreshToken: API_LINK + "auth/refresh_token",
  PublishSong: API_LINK + "songs/upload-song",
  UploadSongAudio: API_LINK + "songAudio/upload-audio",
  DeleteSong: API_LINK + "songs/delete-song",
  GetSongList: API_LINK + "songs/get-songlist",

  PublishBeat: API_LINK + "beats/upload-beat",
  UploadBeatAudio: API_LINK + "beatAudio/upload-audio",
  DeleteBeat: API_LINK + "beats/delete-beat",
  GetBeatList: API_LINK + "beats/get-all",
};
