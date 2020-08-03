var playlist = { "Da Baby": Ha };

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj,{ artistName: songTitle})
};