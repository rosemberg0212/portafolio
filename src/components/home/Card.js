import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Card = (props) => {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    var itemsPerPage

    if(window.screen.width <= 655 || window.screen.height <= 760){
        itemsPerPage = 4
    }else{
        itemsPerPage = 6
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='cards'>
                {currentItems.map((item) => (
                    <div key={item?.id}>
                        <div className='card'>
                            <div className='face front'>
                                <img src={item?.img} alt='fondo' />
                                <h3>{item?.nombre}</h3>
                            </div>
                            <div className='face back'>
                                <h3>{item?.nombre}</h3>
                                <p>{item?.descrip}</p>
                                <div className='link'>
                                    <a href={item?.link} target='_blank' rel="noopener noreferrer">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-numF'
                nextLinkClassName='page-numF'
                activeLinkClassName='active'
            />
        </>
    )
}

export default Card