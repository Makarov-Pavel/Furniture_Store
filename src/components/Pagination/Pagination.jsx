import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'



function Pagination({onChangePage}) {
  return (
    <ReactPaginate
      className={styles.paginationContainer}
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination