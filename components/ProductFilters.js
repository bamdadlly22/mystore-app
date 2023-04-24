import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useRouter } from "next/router";

const ProductFilters = ({handleFilter, categories}) => {

    const router = useRouter();
    const [prices, setPrices] = useState(router.query.price_min ? [router.query.price_min, router.query.price_max] : [0,1000]);
    const [checkedRadio, setCheckedRadio] = useState(router.query.categoryId);
    return(
        <aside className="rounded p-4 p-md-1 p-xl-4">
        <h3>Filter products</h3>
        <input
          className="form-control mt-4"
          onChange={(e) => handleFilter(e, {title: e.target.value})}
          defaultValue={router.query.title}
          type="search"
          placeholder="search for products..."
          aria-label="Search"
        />
        <h5 className="mt-5">Choose Category</h5>
        {categories && categories.map(category => (
          <div key={category.id} className="form-check mt-3">
          <input className="form-check-input" type="radio" checked={checkedRadio == category.id} name="flexRadioDefault" id={`categoryFilter${category.id}`} onChange={e => {handleFilter(e, {categoryId: category.id}), setCheckedRadio(category.id)}} />
          <label className="form-check-label" htmlFor={`categoryFilter${category.id}`}>
           {category.name}
          </label>
          </div>
        ))}

        <h5 className="mt-5">Price Range</h5>
        <Box sx={{ width: 215 }}>
        <Slider
          value={prices}
           onChange={(e, value) => {setPrices(value)}}
           min={0}
            max={1000}
          valueLabelDisplay="auto"
           />
        <button className="btn btn-secondary mt-2" onClick={e =>  handleFilter(e, {price_min: prices[0], price_max: prices[1]})}>sumbit Range</button>
        </Box>
      </aside>
    )
}

export default ProductFilters;