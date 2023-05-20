// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
// import MyToysTableBody from './MyToysTableBody';
// import Swal from 'sweetalert2';

// const MyToys = () => {

//     const { user } = useContext(AuthContext);
//     const [myToys, setMyToys] = useState([])
//     const [activeTab, setActiveTab] = useState("car");


//     // const url = `http://localhost:5000/myToys?email=${user?.email}`
//     useEffect(() => {
//         // fetch(url)
//         //     .then(res => res.json())
//         //     .then(data => {
//         //         setMyToys(data);
//         //     })
//         fetch(`http://localhost:5000/myToys?email=${user?.email}&sort=desc`)
//             .then(res => res.json())
//             .then(data => {
//                 setMyToys(data);
//             });
//     }, [])
//     // const result = myToys?.filter(singleTab => singleTab.category == activeTab);
//     // console.log(result);

//     const handleTabClick = (tabName) => {
//         setActiveTab(tabName);
//     };


//     const handelDelete = (_id) => {
//         Swal.fire({
//             title: 'Are you sure that you want to delete?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/toys/${_id}`, {
//                     method: 'DELETE',

//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             Swal.fire(
//                                 'Deleted!',
//                                 'Your Toy has been deleted.',
//                                 'success'
//                             )
//                             const remaining = myToys.filter(mt => mt._id !== _id);
//                             setMyToys(remaining);
//                         }
//                     })
//             }
//         })
//     }

//     const handelEdit = (_id) => {
//         console.log(_id);
//     }


//     return (
//         <div className="overflow-x-auto shadow-xl">
//             <div className='text-center text-3xl font-bold mb-5'>
//                 <h2>My Toys</h2>
//             </div>
//             <div className='gap-2'>
//                 <button className='btn btn-primary'
//                     onClick={() => handleTabClick("car")}
//                 >
//                     Ascending
//                 </button>
//                 <button className='btn btn-primary'
//                     onClick={() => handleTabClick("bike")}
//                 >
//                     Descending
//                 </button>
//             </div>
//             <table className="table w-full">
//                 <thead>
//                     <tr>
//                         {/* <th className='text-center'>Serial</th> */}
//                         <th className='text-center'>Toy photo</th>
//                         <th className='text-center'>Toy Name</th>
//                         <th className='text-center'>Seller Name</th>
//                         <th className='text-center'>Sub-Category</th>
//                         <th className='text-center'>Price</th>
//                         <th className='text-center'>Quantity</th>
//                         <th className='text-center'>Edit</th>
//                         <th className='text-center'>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {myToys.map((m_toy, index) => (
//                         <MyToysTableBody
//                             key={m_toy._id}
//                             index={index}
//                             m_toy={m_toy}
//                             handelDelete={handelDelete}
//                             handelEdit={handelEdit}
//                         />
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default MyToys;

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTableBody from './MyToysTableBody';
import Swal from 'sweetalert2';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);

  useEffect(() => {
    fetchToys();
  }, [sortOrder]);

  const fetchToys = () => {
    const url = `http://localhost:5000/myToys?email=${user?.email}&sort=${sortOrder === 1 ? "asc" : "desc"}`;
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
        fetch(`http://localhost:5000/toys/${_id}`, {
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
          className={`btn btn-outline btn-primary ${sortOrder === 1 ? "active" : ""}`}
          onClick={handelSortClick}
        >
          Sort by {sortOrder === 1 ? "Ascending" : "Descending"}
        </button>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th className='text-center'>Toy photo</th>
            <th className='text-center'>Toy Name</th>
            <th className='text-center'>Seller Name</th>
            <th className='text-center'>Sub-Category</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Quantity</th>
            <th className='text-center'>Edit</th>
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
