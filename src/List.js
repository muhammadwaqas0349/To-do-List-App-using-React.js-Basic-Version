import "./List.css";


const List = ({itemList, setItemList}) => {

  const deleteItem = (key) => {
    const newList = itemList.filter( (itemObj) => {
      return itemObj.key !== key;  
    });
    setItemList(newList); 

  };
  



  return ( <div>
    {itemList.map( (itemObj) => {
      
       return( <div className="list-div">

        <p>{itemObj.item}</p>
        <button onClick={ () => deleteItem(itemObj.key)}> X </button>

       </div>
       ); 
       

       })}
    
    </div>
  

  

  );
}

export default List;