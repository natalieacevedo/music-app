function Album({ albumId }) {
  return (
    <iframe
      src={`https://widget.deezer.com/widget/dark/album/${albumId}?autoplay=false&radius=true&tracklist=true`}
      width="100%"
      height="300"
      allowtransparency="true"
      allowfullscreen="true"
      allow="encrypted-media"
    ></iframe>
  );
}
export default Album;
