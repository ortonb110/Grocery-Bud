import {FaEdit, FaTrash} from 'react-icons/fa';

const List = ({items}) => {
    return(
        <div>
            {
                items.map((item)=> {
                    const {id, title} = item;
                    return(
                        <div key={id} className='flex justify-between bg-gray-200 px-[1rem] rounded-md mb-[1rem] py-[0.5rem]'>
                            <p className=''>{title}</p>
                            <div className='flex gap-2'>
                                <button className='text-green-500'>{<FaEdit/>}</button>
                                <button className='text-red-500'>{<FaTrash/>}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default List