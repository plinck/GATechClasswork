USE music_db;

SELECT top100Songs.artist, topAlbums.albumYear, topAlbums.album, topAlbums.rank, top100Songs.song, top100Songs.rank 
FROM top100Songs, topAlbums 
WHERE top100Songs.artist = topAlbums.artist 
AND top100Songs.songYear = topAlbums.albumYear
ORDER BY topAlbums.rank;