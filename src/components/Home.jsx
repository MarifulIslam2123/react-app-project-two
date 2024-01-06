function Home({ allinfo }) {
  const { name, price, des, imgUrl } = allinfo;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={imgUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p>{des}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home