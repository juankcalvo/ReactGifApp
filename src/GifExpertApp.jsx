import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory)
    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Finder</h1>

      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />

      {categories.map((category) => (
        <GifGrid 
        key={category}
        category={category}
        />
      ))}
    </>
  );
};
