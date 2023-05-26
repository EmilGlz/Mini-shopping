import "./App.css";
import React, { useState } from "react";
import FilterBox from "./Components/Filterbox/Filterbox";
import Cartbox from "./Components/CardBox/Cartbox";
import CartDatas from "./Mock/CartDatas";

const allSizes: readonly string[] = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
function App() {
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const [products, setProducts] = useState<ICartData[]>(CartDatas);
  const [addedProducts, setAddedProducts] = useState<ICartData[]>([]);
  console.log(addedProducts);
  function filterUpdated(clickedFilterName: string): void {
    setCurrentFilter((prev) => {
      let prevValue: string[] = [...prev];
      const index = prevValue.indexOf(clickedFilterName);
      if (index != -1) {
        prevValue.splice(index, 1);
      } else {
        prevValue.push(clickedFilterName);
      }
      return prevValue;
    });
  }

  function canShowItem(item: ICartData): boolean {
    if (currentFilter.length === 0) {
      return true;
    }
    for (let i = 0; i < item.sizes.length; i++) {
      if (currentFilter.includes(item.sizes[i])) {
        return true;
      }
    }
    return false;
  }

  function addToListItem(id: number) {
    const item = products.find((i) => i.id === id);
    if (item !== undefined) {
      setAddedProducts((prev) => {
        return [...prev, item];
      });
    }
  }

  return (
    <div className="App">
      <div className="Bucket-button"></div>
      <div className="container">
        <div className="Filters">
          {allSizes.map((item, index) => (
            <FilterBox
              key={index}
              isSelected={currentFilter.includes(item)}
              name={item}
              onClick={filterUpdated}
            />
          ))}
        </div>
        <div className="Items">
          {products.map(
            (item, index) =>
              canShowItem(item) && (
                <Cartbox
                  key={index}
                  cartData={item}
                  addToList={addToListItem}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
