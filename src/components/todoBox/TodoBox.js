// import { MdDone } from 'react-icons/md';
// import { FaTrashAlt } from "react-icons/fa";
// import { MdEdit } from "react-icons/md";
// function TodoBox({text,removeToDo,id,isCompleteFN,isComplete,changeToEditMode}){
//   return(
//     <div className='w-[600px] h-[50px] bg-[#DACED0] mt-[8px] rounded-[10px] text-black border-none pl-[20px] flex justify-between items-center pl-[15px]'>
//           <p className={`pl-[15px] ${isComplete ? "line-through"  : ""}`}>{text}</p>
//                 {!isComplete ?
//                 <div className=' flex flex-wo justify-between items-center gap-[15px] pr-[15px]'>
//                     <MdDone onClick={() => (isCompleteFN(id))}/>
//                     <FaTrashAlt onClick={() => (removeToDo(id))}/>
//                     <MdEdit onClick={() => changeToEditMode(id)}/> 
//                 </div>:
//                 <></>                        
//                 }      
//     </div>
//   )
// }
// export default TodoBox;