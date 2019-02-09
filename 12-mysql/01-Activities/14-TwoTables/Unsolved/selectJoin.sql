USE music_db;

SELECT topSongs.artist, topAlbums.albumYear, topAlbums.album, topAlbums.album_rank, topSongs.song_rank 
FROM topSongs, topAlbums 
WHERE topSongs.artist = topAlbums.artist 
AND topSongs.songYear = topAlbums.albumYear
ORDER BY topAlbums.album_rank;