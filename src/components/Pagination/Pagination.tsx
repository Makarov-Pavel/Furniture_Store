import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'

interface IPaginationProps{
  onChangePage: (num:number) => void
}

const Pagination:React.FC<IPaginationProps> =({onChangePage}) => {
  return (
    <ReactPaginate
      className={styles.paginationContainer}
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      previousLabel="<"
    />
  );
}

export default Pagination