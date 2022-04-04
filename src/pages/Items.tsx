import React, { useEffect } from "react";

// redux mapping
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, itemsSelector } from "../features/items/itemSlide";

export const ItemsPage = () => {
  
  // set up dispatch
  const dispatch = useDispatch();
  
  // fetch data from our store
  const { loading, error, items } = useSelector(itemsSelector);

  // hook to fetch items
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // render the items
  const renderItems = () => {
    
    // loading state
    if (loading) return <strong>Loading please wait...</strong>;
    
    // error state
    if (error) return <strong>Items not available at this time</strong>;
    
    // regular data workflow
    return items.map((i: any) => <li key={i.name}>{i.id} - {i.name} </li>);
  };

  // template
  return (
    <div>
      hi items be here
      <ul>{renderItems()}</ul>
    </div>
  );
};