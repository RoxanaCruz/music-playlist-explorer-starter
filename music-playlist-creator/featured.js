document.addEventListener("DOMContentLoaded", () => {
	displayRandomPlaylist(data);
});

function displayRandomPlaylist(data) {
	const playlists = data.playlists;
	const randomIndex = Math.floor(Math.random() * playlists.length);
	const playlist = playlists[randomIndex];

	document.getElementById("featured-cover").src = playlist.playlist_art;
	document.getElementById("featured-name").textContent = playlist.playlist_name;

	const songList = document.getElementById("featured-songs");
	songList.innerHTML = "";

	playlist.songs.forEach((song) => {
		const li = document.createElement("li");
		li.textContent = `${song.title} - ${song.artist} (${song.duration})`;
		songList.appendChild(li);
	});
}
