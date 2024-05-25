import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSucure = UseAxiosSecure();
  const { data: users,refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSucure.get("/users");
      return res.data;
    },
  });


  const handleDeletUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSucure.delete(`/user/${id._id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };



  const makeAdmin=(user)=>{
   console.log(user);
   axiosSucure.patch(`/users/admin/${user?._id}`)
   .then(res=>{
    console.log(res.data);
    if (res.data.modifiedCount>0) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `user ${user.name} is admin now`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
    }
   })
  }


  return (
    <div>
      <div className="flex justify-evenly p-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users?.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                 {
                    item.role==='admin'?"Admin": <button
                    onClick={() => makeAdmin(item)}
                    className="btn btn-ghost btn-lg text-white bg-orange-400"
                  >
                    <FaUser></FaUser>
                  </button>
                 }
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeletUser(item)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
