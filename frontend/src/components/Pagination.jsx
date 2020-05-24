import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const Paginate = ({
  productPerPage,
  totalProducts,
  setCurrentPage,
  currentPage,
}) => {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const pageNumber = Math.ceil(totalProducts / productPerPage);

  return (
    <div>
      <Pagination
        count={pageNumber}
        style={{ marginTop: "1vh" }}
        size="small"
        color="primary"
        onChange={handleChange}
        page={currentPage}
      />
    </div>
  );
};

export default Paginate;
