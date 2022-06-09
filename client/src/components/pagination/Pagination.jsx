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
                className='pagination__prevButton'
            >
                Prev
            </button>

            {/* <div className='no-select'>
                <span
                    className='pagination__firstNumber'
                    onClick={() => setPage(1)}
                >
                </span>

                {page - 1 !== 0 && (
                    <span
                        onClick={() => setPage(page - 1)}
                    >
                        {page - 1}
                    </span>
                )}

                <span className='pagination__activePage'>{page}</span>

                {page + 1 !== max + 1 && (
                    <span
                        onClick={() => setPage(page + 1)}
                    >
                        {page + 1}
                    </span>
                )}
                <span
                    className='pagination__lastNumber'
                    onClick={() => setPage(max)}
                >
                </span>
            </div> */}

            <button
                disabled={page === max || page > max}
                onClick={nextPage}
                className='pagination__nextButton'
            >
                Next
            </button>
        </div >
    )
}

export default Pagination