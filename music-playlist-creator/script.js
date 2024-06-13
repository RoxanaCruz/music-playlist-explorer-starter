console.log(data.playlists);
let container = document.querySelector("#playlist-cards"); // Corrected selector

data.playlists.forEach((playlist) => {
	const tile = createPlaylistCard(playlist);
	console.log(tile);
	container.appendChild(tile);
});

function createPlaylistCard(playlist) {
	let playlistCard = document.createElement("div");
	playlistCard.className = "playlist-card";
	playlistCard.innerHTML = `
        <img src="${playlist.playlist_art}" alt="cover">
        <h3>${playlist.playlist_name}</h3>
        <p>Creator: ${playlist.playlist_creator}</p>
        <span class="like-count">${playlist.likeCount}</span>
        <i class="fas fa-heart like-icon"></i>
    `;

	playlistCard.addEventListener("click", () => openModal(playlist));
	playlistCard.querySelector(".like-icon").addEventListener("click", (e) => {
		e.stopPropagation();
		toggleLike(playlist, playlistCard);
	});
	return playlistCard;
}

function openModal(playlist) {
	console.log("in openModal");
	const modal = document.getElementById("playlist-modal");
	document.getElementById("modal-cover").src = playlist.playlist_art;
	document.getElementById("modal-name").textContent = playlist.playlist_name;
	document.getElementById(
		"modal-creator"
	).textContent = `Creator: ${playlist.playlist_creator}`;

	const modalSongs = document.getElementById("modal-songs");
	modalSongs.innerHTML = ""; // Clear previous list of songs

	playlist.songs.forEach((song) => {
		const li = document.createElement("li");
		li.textContent = `${song.title} - ${song.artist} (${song.duration})`;
		modalSongs.appendChild(li);
	});

	document.getElementById("shuffle-button").onclick = () =>
		shuffleSongs(playlist, modalSongs);

	modal.style.display = "flex";
}

// Close modal when clicking on the close button
document.querySelector(".modal-close").addEventListener("click", () => {
	document.getElementById("playlist-modal").style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
	const modal = document.getElementById("playlist-modal");
	if (event.target === modal) {
		modal.style.display = "none";
	}
});

function toggleLike(playlist, cardElement) {
	playlist.likeCount++;
	const likeCountElement = cardElement.querySelector(".like-count");
	likeCountElement.textContent = playlist.likeCount;
	const likeIcon = cardElement.querySelector(".like-icon");
	likeIcon.classList.toggle("liked");
}

function shuffleSongs(playlist, modalSongsElement) {
	for (let i = playlist.songs.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[playlist.songs[i], playlist.songs[j]] = [
			playlist.songs[j],
			playlist.songs[i],
		];
	}
	modalSongsElement.innerHTML = "";
	playlist.songs.forEach((song) => {
		const li = document.createElement("li");
		li.textContent = `${song.title} - ${song.artist} (${song.duration})`;
		modalSongsElement.appendChild(li);
	});
}

// createPlaylistCard();

// data.playlists.forEach(function (playlist) {
// 	let newPlaylistCard = document.createElement("div");
// 	newPlaylistCard.className = "playlist-card";

// 	let playlistImg = document.createElement("img");
// 	playlistImg.src = playlist.playlist_art;
// 	newPlaylistCard.appendChild(playlistImg);

// 	let playlistTitle = document.createElement("h3");
// 	playlistTitle.textContent = playlist.playlist_name;
// 	newPlaylistCard.appendChild(playlistTitle);

// 	console.log(playlist.playlist_name);

// 	let playlistCreator = document.createElement("p");
// 	playlistCreator.textContent = playlist.playlist_creator;
// 	newPlaylistCard.appendChild(playlistCreator);

// 	let likesContainer = document.createElement("div");

// 	let emoji = document.createElement("span");
// 	emoji.textContent = "❤️";
// 	likesContainer.appendChild(emoji);

// 	let likeCount = document.createElement("span");
// 	likeCount.textContent = playlist.likeCount;
// 	likesContainer.appendChild(likeCount);
// 	newPlaylistCard.appendChild(likesContainer);

// 	console.log("New playlist card data");
// 	console.log(newPlaylistCard);

// 	container.appendChild(newPlaylistCard);

// 	// Script to handle modal open/close
// 	const modalOverlay = document.querySelector(".modal-overlay");
// 	const modalClose = document.querySelector(".modal-close");

// 	// Open modal when playlist card is clicked
// 	newPlaylistCard.addEventListener("click", () => {
// 		modalOverlay.style.display = "flex";
// 	});

// 	// Close modal when close button is clicked
// 	modalClose.addEventListener("click", () => {
// 		modalOverlay.style.display = "none";
// 	});

// 	// Close modal when clicking outside the modal content
// 	modalOverlay.addEventListener("click", (e) => {
// 		if (e.target === modalOverlay) {
// 			modalOverlay.style.display = "none";
// 		}
// 	});
// });

// let likeButton = document.getElementsByClassName("emoji");
// let numLikes = ddocument.getElementsByClassName("numLikes");

// for (let j = 0; j < likeButton.length; j++) {
// 	likeButton[j].addEventListener("click", () => {
// 		let count = numLikes[j].textContent;
// 		count++;
// 		numLikes[j].textContent = count;
// 	});
// }
// JavaScript for Opening and Closing the Modal

// var cards = document.querySelectorAll(".playlist-card");
// console.log("Cards to open:");
// console.log(cards);
// cards.forEach((card) => {
// 	console.log("card clicked");
// });

// songs
