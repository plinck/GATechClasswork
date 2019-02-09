SELECT artist, COUNT(artist)
FROM topSongs
GROUP BY artist
HAVING COUNT(artist) > 1
ORDER BY COUNT(artist) DESC;