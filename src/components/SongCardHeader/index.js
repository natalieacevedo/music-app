

function SongCardHeader({image,title,artist}) {




  
  console.log(title);









  return (
    
    <div>
      <img src={image} alt='band coolpic'></img>
      <h3>{title}</h3>
      <h3>{artist}</h3>
  </div>);
}
export default SongCardHeader;
