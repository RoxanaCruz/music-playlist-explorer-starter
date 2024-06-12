// JavaScript for Opening and Closing the Modal
console.log(data.playlists);
//easier acess to data
for (let i = 0; i < data.playlists.length; i++) {
	console.log(data.playlists[i]);
}

data.playlists.forEach(function (playlist) {
	let newPlaylistCard = document.createElement("div");
	newPlaylistCard.className = "playlist-card";

	let playlistImg = document.createElement("img");
	playlistImg.src = playlist.playlist_art;
	newPlaylistCard.appendChild(playlistImg);

	let playlistTitle = document.createElement("h3");
	playlistTitle.textContent = playlist.playlist_name;
	newPlaylistCard.appendChild(playlistTitle);

	console.log(playlist.playlist_name);

	let playlistCreator = document.createElement("p");
	playlistCreator.textContent = playlist.playlist_creator;
	newPlaylistCard.appendChild(playlistCreator);

	let likesContainer = document.createElement("div");

	let emoji = document.createElement("span");
	emoji.textContent = "❤️";
	likesContainer.appendChild(emoji);

	let likeCount = document.createElement("span");
	likeCount.textContent = playlist.likeCount;
	likesContainer.appendChild(likeCount);
	newPlaylistCard.appendChild(likesContainer);

	let container = document.querySelector(".playlist-cards");
	container.appendChild(newPlaylistCard);
});

// Script to handle modal open/close
const playlistCard = document.querySelector(".playlist-card");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");

// Open modal when playlist card is clicked
playlistCard.addEventListener("click", () => {
	modalOverlay.style.display = "flex";
});

// Close modal when close button is clicked
modalClose.addEventListener("click", () => {
	modalOverlay.style.display = "none";
});

// Close modal when clicking outside the modal content
modalOverlay.addEventListener("click", (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.style.display = "none";
	}
});

let likeButton = document.getElementsByClassName("emoji");
let numLikes = ddocument.getElementsByClassName("numLikes");

for (let j = 0; j < likeButton.length; j++) {
	likeButton[j].addEventListener("click", () => {
		let count = numLikes[j].textContent;
		count++;
		numLikes[j].textContent = count;
	});
}
