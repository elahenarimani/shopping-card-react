import Button from "../button/Button"
function addDressToCard(itemID){   
}
function Card({img,title,price,itemID,addDressToCard}){
    return(
        <div className='w-full h-full flex flex-col justify-start items-center gap=0'>
                             <div className="w-[300px] h-[470px]">
                                   <img className='w-[100%] h-[100%] ' src={img} />
                             </div>
                             <a className='cursor-pointer'>{title}</a>
                             <div className='w-full h-full flex justify-around  items-center '>
                                    <p className="h-[40px]">{price}</p> 
                                    <Button onclickHandler={() => addDressToCard(itemID)}>Add To Card</Button>
                             </div>
                         </div>
    )
}
export default Card