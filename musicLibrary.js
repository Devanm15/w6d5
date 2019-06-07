function library(name, creator) {
    this.name = name,
        this.creator = creator,
        this.playlists = [];
};

library.prototype.addPlaylist = function addPlaylist(playlist) {
    this.playlists.push(playlist);
};

function playlist(name) {
    this.name = name;
    this.tracks = [];
    this.playlistRating = 0;
    this.totalDuration = 0;
}


playlist.prototype.updatePlaylistRating = function() {
    this.playlistRating = 0;
    for (let track = 0; track < this.tracks.length; track++) {
        this.playlistRating += this.tracks[track].rating;
    }
    this.playlistRating = this.playlistRating / this.tracks.length;
};


playlist.prototype.updateTotalDuration = function() {
    this.totalDuration = 0;
    for (let track = 0; track < this.tracks.length; track++) {
        this.totalDuration += this.tracks[track].length;
    }
    this.totalDuration = this.totalDuration / this.tracks.length;
};

function track(title, rating, length) {
    this.title = title,
        this.rating = rating,
        this.length = length
}

playlist.prototype.addTrack = function addTrack(track) {
    this.tracks.push(track);
    this.updatePlaylistRating();
    this.updateTotalDuration();
};


let firstLibrary = new library('new', 'Devan');
let firstPlaylist = new playlist("awesomeness");
let firstTrack = new track('Cecilia', 5, 120);
let secondTrack = new track('Michelle', 4, 180);



console.log(firstLibrary);
console.log(firstPlaylist);
console.log(firstTrack);

firstLibrary.addPlaylist(firstPlaylist);

firstPlaylist.addTrack(firstTrack);
firstPlaylist.addTrack(secondTrack);


console.log(firstPlaylist);
console.log(firstPlaylist.playlistRating);
console.log(firstPlaylist.totalDuration);
console.log(firstLibrary)