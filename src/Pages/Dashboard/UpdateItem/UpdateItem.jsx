import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";

const UpdateItem = () => {
  const {name,category,receipe,price,_id} = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiospublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const imghostingkey = import.meta.env.VITE_img_hosting_key;
  const imghostingapi = `https://api.imgbb.com/1/upload?key=${imghostingkey}`;
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiospublic.post(imghostingapi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const manueItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        receipe: data.receipe,
        image: res.data.data.display_url,
      };

      const manueresponse = await axiosSecure.patch(`/menu/${_id}`, manueItem);
      console.log(manueresponse.data);
      if (manueresponse.data.modifiedCount>0) {
        // todo sucess pop up
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data has updated",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };

//   console.log(data);
  return (
    <div>
      <SectionTitle heading={"update item"} subHeading={"item"}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recepie Name *</span>
            </div>
            <input
            defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          {/*   */}
          <div className="flex gap-6 w-full">
            {/* categorie */}
            <div className="w-full">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Category *</span>
                </div>
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-info "
                >
                  <option disabled value={"default"}>
                    Select a Category
                  </option>
                  <option value="salad">salad</option>
                  <option value="pizza">pizza</option>
                  <option value="soup">soup</option>
                  <option value="drinks">drinks</option>
                  <option value="dessert">dessert</option>
                </select>
              </label>
            </div>
            {/* price */}
            <div className="w-full">
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Price *</span>
                </div>
                <input
                // defaultValue={price}
                // value={price}
                  {...register("price", { required: true})}
                  type="number"
                  placeholder={price}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recepe Details *</span>
              </div>
              <textarea
              defaultValue={receipe}
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered"
                placeholder="recepie details"
              ></textarea>
            </label>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn my-4">
            {" "}
            <FaUtensils></FaUtensils> Update Menue Items
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
