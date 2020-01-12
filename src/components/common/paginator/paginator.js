import React, {useState} from 'react';
import s from './paginator.module.css';
import cn from 'classnames';
import Button from '@material-ui/core/Button';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i=0; i<=pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        { portionNumber > 1 && 
            <Button variant="contained" color="primary" onClick={ () => { setPortionNumber(portionNumber - 1) }}>prev</Button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
            .map((p) => {
                return <span className={ cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber)}
                    key = {p}
                    onClick={(e)=>{
                        onPageChanged(p);
                    }}>{p}</span>
            })
        }

        {portionCount > portionNumber &&
            <Button variant="contained" color="primary" onClick={() => { setPortionNumber(portionNumber + 1) }} >next</Button>}
    </div>
    
}

export default Paginator;
