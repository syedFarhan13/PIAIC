"use strict";
function make_album(artist_name, album_title, num_tracks = null) {
    let album = { artist: artist_name, title: album_title };
    if (num_tracks) {
        album['tracks'] = num_tracks;
    }
    return album;
}
// Example usage
let album1 = make_album('Taylor Swift', 'Folklore');
console.log(album1);
let album2 = make_album('Kendrick Lamar', 'DAMN.', 14);
console.log(album2);
let album3 = make_album('The Beatles', 'Abbey Road', 17);
console.log(album3);
