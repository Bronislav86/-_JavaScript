const albums = [
	{
		title: "Showbiz",
		artist: "MUSE",
		year: "1994",
	},
	{
		title: "Origin of Symmetry",
		artist: "MUSE",
		year: "2001",
	},
	{
		title: "Absolution ",
		artist: "MUSE",
		year: "2003",
	},
	{
		title: "Black Holes and Revelations ",
		artist: "MUSE",
		year: "2006",
	},
	{
		title: "The Resistance ",
		artist: "MUSE",
		year: "2009",
	},
];

const musicCollection = {
	albums,
	[Symbol.iterator]() {
		this.current = albums[0];
		return this;
	},
	next() {
		return this.current <= this.albums.length ? { done: false, value: current++ } : { done: true };
	},
};

for (const album of albums) {
	console.log(`${album.title} - ${album.artist} (${album.year})`);
}
