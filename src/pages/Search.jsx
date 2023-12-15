import { useDispatch, useSelector } from "react-redux";
import Product from "../components/home/Product";
import ProductComp from "../components/home/ProductComp";

const Search = () => {
  const {products} = useSelector(state=>state.search)
  console.log(products);
  return (
    <div className="flex items-center gap-10 flex-wrap">
      {products.map((product, i) => (
        <ProductComp key={i} product={product} />
      ))}
    </div>
  );
};

export default Search;
