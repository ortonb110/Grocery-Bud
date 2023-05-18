import {FaEdit, FaTrash} from 'react-icons/fa';

const List = ({items, deleteHandler, editItem, editing}) => {
    return(
        <div>
            {
                items.map((item)=> {
                    const {id, title} = item;
                    return(
                        <div key={id} className='flex justify-between hover:bg-gray-200 px-[1rem] rounded-md mb-[1rem] py-[0.5rem] transition-all ease-in-out duration-300'>
                            <p className=''>{title}</p>
                            <div className='flex gap-4'>
                                {
                                    editing?  '': (<button className='text-green-500' onClick={()=> {editItem(id)}}>{<FaEdit/>}</button>)
                                }
                                <button className='text-red-500' onClick={() => {deleteHandler(id)}}>{<FaTrash/>}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default List