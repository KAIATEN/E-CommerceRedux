import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategoryProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import ProductComp from "./ProductComp";
import ReactPaginate from "react-paginate";
const Product = ({ category,sort }) => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);
  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  const sortedProducts = [...products].sort((a, b) =>
      sort === "inc"
        ? a.price - b.price
        : sort === "dec"
        ? b.price - a.price
        : 0
  );
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = sortedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {productStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap ">
            {currentItems?.map((product, index) => (
              <div key={index}>
                <ProductComp key={index} product={product} />
              </div>
            ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Product;
