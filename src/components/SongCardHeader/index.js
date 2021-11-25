

function SongCardHeader({image,title,artist}) {




  
  console.log(title);









  return (
    
    <div>
      <img src={image} alt='band coolpic'></img>
      <title style={{float:'right'}}>{title}</title>
      <artist>{artist}</artist>
  </div>);
}
export default SongCardHeader;
