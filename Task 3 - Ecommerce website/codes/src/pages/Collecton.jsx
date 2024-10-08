import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'

const Collecton = () => {
  const {products,search,showSearch} = useContext(ShopContext)
  const [ShowFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory]=useState([])
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType]=useState('relevant')

  const toggleCategory =(e)=>{
    if (category.includes(e.target.value )) {
      setCategory(prev=>prev.filter(item =>item !== e.target.value ))
      
    }
    else{
      setCategory(prev =>[...prev,e.target.value])
    }
  }
  const toggelSubCategory = (e)=>{
    if (subCategory.includes(e.target.value )) {
      setSubCategory(prev=>prev.filter(item =>item !== e.target.value ))
      
    }
    else{
      setSubCategory(prev =>[...prev,e.target.value])
    }
  }
  const applyFilter =()=>{
    let productscopy = products.slice();
    if (showSearch && search){
      productscopy = productscopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length >0) {
      productscopy = productscopy.filter(item=> category.includes(item.category));
      
    }
    if (subCategory.length>0) {
      productscopy = productscopy.filter(item=>subCategory.includes(item.subCategory))
      
    }
    setFilterProducts(productscopy)

  }
  const sortProduct =() =>{

    let fpcopy = filterProducts.slice();
    switch (sortType)
    {
      case 'low-high':
        setFilterProducts(fpcopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpcopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }

  }
  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])
  useEffect (()=>{
    sortProduct();

  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${ShowFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'> CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
            </p>

          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter? ' ':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggelSubCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggelSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggelSubCategory}/> Winterwear
            </p>

          </div>
        </div>


      </div>
      <div className='flex-1'>
        <div className=' flex justify-between text-base sm:text-2xl mb-4'> 
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* sorting */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 '>
            <option value="relevant">Sort by:Relevance</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low </option>
          </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
            <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image} />))
          }

        </div>
      </div>
      
    </div>
  )
}

export default Collecton
