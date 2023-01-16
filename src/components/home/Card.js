import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    var itemsPerPage

    if (window.screen.width <= 655 || window.screen.height <= 760) {
        itemsPerPage = 4
    } else {
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
            <div className={styles.cards}>
                {currentItems.map((item) => (
                    <div key={item.id} className={styles.card} >
                        <div className={styles.infoCard}>
                            <p className={styles.title}>{item.nombre}</p>
                            <p className={styles.des}>
                                {item.descrip}
                            </p>
                            <div className={styles.items}>
                                <img className={styles.icon} src={item.icon} alt='img' />
                                <img className={styles.icon} src={item.icon2} alt='img' />
                            </div>
                            <a href={item.link} target='_blank'>
                                <button>Ver trabajo</button>
                            </a>

                        </div>
                        <div className={styles.contenImg}>
                            <div className={styles.img}>
                                <img src={item.img} alt='img' />
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