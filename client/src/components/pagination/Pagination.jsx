import React from 'react';
import './Pagination.css';

const Pagination = ({ page, setPage, max }) => {

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        setPage(page - 1)
    }

    return (
        <div className='pagination'>
            <button
                disabled={page === 1 || page < 1}
                onClick={prevPage}
                className='pagination__prevButton no-select'
            >
                Prev
            </button>
            <button
                disabled={page === max || page > max}
                onClick={nextPage}
                className='pagination__nextButton no-select'
            >
                Next
            </button>
        </div >
    )
}

export default Pagination