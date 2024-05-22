const FoodCard = ({item}) => {
  console.log(item);
    const {name,image,price,recipe}=item;

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
        <p className="bg-slate-900 text-white absolute right-0 mr-4 px-4 mt-4">price: {price}</p>
      </figure>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <button className="text-red border-0 border-b-8 border-orange-400 bg-slate-100 rounded-lg mt-3 p-2 hover:bg-slate-300 hover:text-white">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
