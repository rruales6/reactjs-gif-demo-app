// rafc para hacer de una un functional component


export const GiftCard = ({title, img}) => {
  return (
    <div className="card"> 
        <img src={img.url} alt={title} />
        {/* <p>{url}</p> */}
        <p>{title}</p>
    </div>
  )
}
