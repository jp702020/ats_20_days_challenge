// import React from "react";
// import "./ManagePost.css";
// import influencer from "../assets/influencer.jpg";
// const ManagePost = () => {
//   return (
//     <>
//       <div className="mp">
//         <div className="mp-child" />
//         <img className="mp-item" alt="" src="/ellipse-21@2x.png" />
//         <b className="hello-register-to">Manage Posts</b>
//         <div className="back">
//           <div className="back-child" />
//           <img className="back-arrow-icon" alt="" src="/back-arrow@2x.png" />
//         </div>
//         <div className="status-bar">
//           <div className="right-side">
//             <img className="battery-icon" alt="" src="/battery@2x.png" />
//             <img className="wifi-icon" alt="" src="/wifi@2x.png" />
//             <img
//               className="mobile-signal-icon"
//               alt=""
//               src="/mobile-signal@2x.png"
//             />
//             <img
//               className="recording-indicator-icon"
//               alt=""
//               src="/recording-indicator@2x.png"
//             />
//           </div>
//           <img className="left-side-icon" alt="" src="/left-side@2x.png" />
//         </div>
//         <img className="image-1-icon" alt="" src="/image-1@2x.png" />
//         <div className="component-1">
//           <div className="component-1-child" />
//           <div className="hello-register-to-get-started-parent">
//             <div className="hello-register-to1">Profile Details</div>
//             <img className="vector-icon" alt="" src="/vector@2x.png" />
//           </div>
//           <div className="rectangle-parent">
//             <div className="frame-child" />
//             <img className="plus-math-icon" alt="" src="/plus-math@2x.png" />
//             <div className="hello-register-to2">Add New Post</div>
//           </div>
//           <div className="table-1">
//             <div className="table">
//               <div className="row">
//                 <div className="cell">
//                   <div className="content">
//                     <div className="hello-register-to3">SR No.</div>
//                   </div>
//                 </div>
//                 <div className="cell1">
//                   <div className="content">
//                     <div className="hello-register-to3">Post Name</div>
//                   </div>
//                 </div>
//                 <div className="cell">
//                   <div className="content">
//                     <div className="hello-register-to3">View</div>
//                   </div>
//                 </div>
//                 <div className="cell">
//                   <div className="content">
//                     <div className="hello-register-to3">Edit</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row1">
//                 <div className="cell4">
//                   <div className="content">
//                     <div className="text">1</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content">
//                     <div className="text1">Pink Dress</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content6">
//                     <div className="text">{`8,980 `}</div>
//                   </div>
//                 </div>
//                 <div className="cell7">
//                   <div className="content7">
//                     <div className="rectangle-group">
//                       <div className="group-child" />
//                       <div className="edit-post">Edit Post</div>
//                     </div>
//                     <div className="text3" />
//                   </div>
//                 </div>
//               </div>
//               <div className="row1">
//                 <div className="cell4">
//                   <div className="content">
//                     <div className="text">2</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content9">
//                     <div className="text">Floral Dress</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content6">
//                     <div className="text">9,019</div>
//                   </div>
//                 </div>
//                 <div className="cell7">
//                   <div className="content">
//                     <div className="rectangle-group">
//                       <div className="group-child" />
//                       <div className="edit-post">Edit Post</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row1">
//                 <div className="cell4">
//                   <div className="content">
//                     <div className="text">3</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content9">
//                     <div className="text">Green Dress</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content6">
//                     <div className="text">9,990</div>
//                   </div>
//                 </div>
//                 <div className="cell7">
//                   <div className="content">
//                     <div className="rectangle-group">
//                       <div className="group-child" />
//                       <div className="edit-post">Edit Post</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row1">
//                 <div className="cell4">
//                   <div className="content">
//                     <div className="text">4</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content17">
//                     <div className="text">One-Shoulder</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content6">
//                     <div className="text1">8,759</div>
//                   </div>
//                 </div>
//                 <div className="cell7">
//                   <div className="content">
//                     <div className="rectangle-group">
//                       <div className="group-child" />
//                       <div className="edit-post">Edit Post</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row1">
//                 <div className="cell4">
//                   <div className="content">
//                     <div className="text">5</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content9">
//                     <div className="text">Night Dress</div>
//                   </div>
//                 </div>
//                 <div className="cell22">
//                   <div className="content9">
//                     <div className="text1">8,697</div>
//                   </div>
//                 </div>
//                 <div className="cell7">
//                   <div className="content">
//                     <div className="rectangle-group">
//                       <div className="group-child" />
//                       <div className="edit-post">Edit Post</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row1">
//                 <div className="cell4">
//                   <div className="content">
//                     <div className="text">6</div>
//                   </div>
//                 </div>
//                 <div className="cell4">
//                   <div className="content25">
//                     <div className="text">Casual Dress</div>
//                   </div>
//                 </div>
//                 <div className="cell26">
//                   <div className="content9">
//                     <div className="text1">8,990</div>
//                   </div>
//                 </div>
//                 <div className="cell7">
//                   <div className="content">
//                     <div className="rectangle-group">
//                       <div className="group-child" />
//                       <div className="edit-post">Edit Post</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ManagePost;
