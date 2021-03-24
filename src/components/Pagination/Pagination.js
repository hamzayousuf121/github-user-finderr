
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import MaterialPagination from '@material-ui/lab/Pagination';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));



const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    // const classes = useStyles();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        // <MaterialPagination count />
        <nav>
            <ul className='pagination' style={paginationStyle.parent}>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='!#' style={paginationStyle.pageLink}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


const paginationStyle = {
    parent: {
    display: 'flex',
    paddingLeft: '0',
    listStyle: 'none',
    borderRadus: '.25rem',
    justifyContent: 'center',
    AlignItems: 'center'
    },
    list:{

    },
    pageLink: {
    position: 'relative',
    display: 'block',
    padding: '.5rem .75rem',
    marginLeft: '-1px',
    lineHeight: '1.25',
    color: '#007bff',
    backgroundColor: '#fff',
    border: '1px solid #dee2e6',
    textDecoration: 'none'
    }
   
}

export default Pagination;