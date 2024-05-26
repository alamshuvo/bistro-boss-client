import { FaEdit } from "react-icons/fa";
import UseMenu from "../../../../Hooks/UseMenu";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu,,refetch] = UseMenu();
  const axiosSecure=UseAxiosSecure()




  const  handleDelete= (item)=>{
    console.log(item);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
            const res= await axiosSecure.delete(`/menu/${item._id}`);
            console.log(res.data);
            if (res.data.deletedCount>0) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `item ${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                
                 
            }
        
      
        }
      });
  }




  return (
    <div>
      <SectionTitle heading={"Manage all items"} subHeading={"Hurry Up"}>
        {" "}
      </SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  SL
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
                menu?.map((item,index)=> <tr key={item._id}>
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                 {item.name}
                 
                </td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/dashboard/updateitem/${item._id}`}>
                  <button  className="btn btn-ghost bg-orange-500 text-white"><FaEdit className="text-3xl"></FaEdit></button></Link>
                </td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-500 text-white"><FaDeleteLeft className="text-3xl "></FaDeleteLeft> </button>
                </td>
              </tr>)
             }
             
            
             
            </tbody>
          
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
