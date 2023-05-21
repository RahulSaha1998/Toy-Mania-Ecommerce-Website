import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTableBody from './MyToysTableBody';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitile';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTitle('My Toys')


  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);

  useEffect(() => {
    fetchToys();
  }, [sortOrder]);

  const fetchToys = () => {
    const url = `https://toy-marketplace-server-side-jet.vercel.app/myToys?email=${user?.email}&sort=${sortOrder === 1 ? "asc" : "desc"}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
      })
      .catch(error => {
        console.error('Error retrieving toys:', error);
      });
  };

  const handelSortClick = () => {
    setSortOrder(sortOrder === 1 ? -1 : 1);
  };

  const handelDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure that you want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-side-jet.vercel.app/toys/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              );
              const remaining = myToys.filter(mt => mt._id !== _id);
              setMyToys(remaining);
            }
          })
          .catch(error => {
            console.error('Error deleting toy:', error);
          });
      }
    });
  };

  const handelEdit = (_id) => {
    console.log(_id);
  };

  return (
    <div className="overflow-x-auto shadow-xl">
      <div className='text-center text-3xl font-bold mb-5'>
        <h2>My Toys</h2>
      </div>
      <div className='text-center mb-5'>
        <button
          className={`btn ${sortOrder === 1 ? "btn-info" : "btn-success"} ${sortOrder === 1 ? "active" : ""}`}
          onClick={handelSortClick}
        >
          Sort by {sortOrder === 1 ? "Ascending" : "Descending"}
        </button>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th className='text-center'>Serial</th>
            <th className='text-center'>Toy photo</th>
            <th className='text-center'>Toy Name</th>
            <th className='text-center'>Seller Name</th>
            <th className='text-center'>Sub-Category</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Quantity</th>
            <th className='text-center'>Update</th>
            <th className='text-center'>Delete</th>
          </tr>
        </thead>
        <tbody>
                   {myToys.map((m_toy, index) => (
                        <MyToysTableBody
                            key={m_toy._id}
                            index={index}
                            m_toy={m_toy}
                            handelDelete={handelDelete}
                            handelEdit={handelEdit}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
