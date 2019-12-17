import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../Context';
import Loading from './Loading';

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading></Loading>;
    }
    return(
    <>
    <RoomsFilter rooms={rooms}></RoomsFilter>
    <RoomList rooms={sortedRooms}></RoomList>
    </>
    );
}

export default withRoomConsumer(RoomContainer);


// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) =>{
//                     const {loading, sortedRooms, rooms} = value;
//                     if(loading){
//                         return <Loading></Loading>;
//                     }
//                     return(
//                         <div>
//                         Hello from rooms container
//                         <RoomsFilter rooms={rooms}></RoomsFilter>
//                         <RoomList rooms={sortedRooms}></RoomList>
//                     </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
//     );
// }
