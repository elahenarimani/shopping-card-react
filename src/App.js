import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Card from './components/card/Card';


function App() {
    const [dressList , setDressList] = useState([
                                                  {img:"./image/dress1.jpg"    ,
                                                  price:"10.9 $ " ,
                                                  title:"cami maxi dress in polka dot"  ,
                                                  id: 1      
                                                  },
                                                  {img:"./image/dress2.jpg"    ,
                                                  price:"14.9 $ " ,
                                                  title:"cami maxi dress in polka dot"  ,
                                                  id: 2      
                                                  },
                                                  {img:"./image/dress3.jpg"    ,
                                                  price:"18.9 $ " ,
                                                  title:"cami maxi dress in polka dot"  ,
                                                  id: 3      
                                                  },
                                                  {img:"./image/dress4.jpg"    ,
                                                  price:"25.9 $ " ,
                                                  title:"cami maxi dress in polka dot"  ,
                                                  id: 4     
                                                  },
                                                  {img:"./image/dress5.jpg"    ,
                                                  price:"29.9 $ " ,
                                                  title:"cami maxi dress in polka dot"  ,
                                                  id: 5      
                                                  },
                                                  {img:"./image/dress6.jpg"   ,
                                                  price:"49.9 $" ,
                                                  title:"cami maxi dress in polka dot"  ,
                                                  id: 6      
                                                  },                                    
                                                 ])
const [buyCart , setBuyCart] = useState([])
// 

function addDressToCardFunction(itemId){
     const indexFinder = buyCart.findIndex(item => item.itemId== itemId);
     console.log(indexFinder)
     if (indexFinder == -1){
        setBuyCart([...buyCart,{
            itemId : itemId ,
            count : 1
        }])
     } else{
        buyCart[indexFinder].count +=1
     }
     console.log(buyCart)
}
    

  return ( 
   <div className='w-full h-[100%]'>
           <header className='w-full h-[60px] bg-[#203040] flex items-center'>
               <p className='w-full text-white pl-[10px] text-[18px]'>React Shopping Cart</p>
           </header>
          <main className='w-full lg:max-w-[1000px] xl:max-w-[85%] flex justify-between items-center flex-col xl:flex-row xl:justify-between xl:items-center xl:flex-wrap  h-full pl-[15px] pr-[15px] '>
                    <div className='option-wrapper w-[100%] lg:max-w-[1000px] xl:max-w-[74%] h-[60px] border-b-[2px] flex   justify-between items-center  border-gray-200  gap-[20px] mr-[10px] '>
                              <div> 
                                   <p>6 Products</p>
                              </div>    
                              <div>
                                  <span className='mr-[8px]'>Order</span>
                                  <select name="price">
                                        <option value="Lowest">Lowest</option>
                                        <option value="Highest">Highest</option>
                                  </select>
                              </div>
                              <div> 
                                  <span className='mr-[8px]'>Filter</span>
                                  <select name="size">
                                        <option value="ALL">ALL</option>
                                        <option value="Xs">Xs</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                  </select>
                              </div>
                    </div>
                    <div className='hidden xl:block xl:max-w-[24%] w-full  h-[60px] xl:border-b-[2px] border-gray-200 xl:flex xl:justify-center xl:items-center  text-center'>
                              {/* <p className='w-full'>Cart Is Empty</p> */}
                              <p className='w-full'>You have {countBuyCart()} in the cart </p>
                    </div> 
                    <div className='card-wrapper w-full md:max-w-[768px] lg:max-w-[1280px] xl:max-w-[75%] xl:w-full h-full grid xl:justify-between xl:items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] pt-[25px] pb-[25px]'>
                        {dressList.map(item => {
                                            return( <Card price={item.price} title={item.title} img={item.img} id={item.id} addDressToCard={addDressToCardFunction}/>)
                        })}
                                      {/* <Card price={`10.9$`} title={"cami maxi dress in polka dot"} img={"./image/dress1.jpg"}/>
                                      <Card price={`14.9$`} title={"Midi dress in pink ditsy floral"}  img={"./image/dress2.jpg"}></Card>
                                      <Card price={`18.9$`} title={"Midi sundress with ruched front"} img={"./image/dress3.jpg"}></Card>
                                      <Card price={`25.9$`} title={"cami maxi dress in polka dot"} img={"./image/dress4.jpg"}></Card>
                                      <Card price={`29.9$`} title={"Midi sundress with shirring detail"} img={"./image/dress5.jpg"}></Card>
                                      <Card price={`49.9$`} title={"Midi tea dress in blue and red spot"} img={"./image/dress6.jpg"}></Card> */}
                    </div>  
                    <div className='hidden-cart xl:hidden max-w-[25%] w-full h-[60px] xl:border-b-[2px] border-gray-200 flex justify-center items-center '>
                              <p>Cart Is Empty</p>
                              
                    </div> 
          </main>      
           <footer className='w-full h-[60px] mt-[10px]'>
               <p className='w-full h-full bg-[#203040] flex justify-center items-center text-white text-[18px]'>All right is reserved</p>
               
          </footer>
</div>
   
  );
}
export default App;
