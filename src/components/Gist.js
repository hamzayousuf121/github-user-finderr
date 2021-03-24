import React, { useEffect, useState } from 'react'
import { getPublicGists } from '../services/gistService'
import './GistList.css'
import Loading from './Spinner/Spinner'
import Pagination from './Pagination/Pagination'
import GistList from './GistList'

const Gist = ({ fiteredGist }) => {
    const [dataArray, setDataArray] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const [currentPage, setCurrentPage] = useState(1)
    const [gistPerPage, setGistPerPage] = useState(10)

    useEffect(() => {

        const listHandler = async () => {
            const { data } = await getPublicGists()
            setDataArray(data)
            if (data) {
                setIsLoading(false)
            }
        }
        listHandler()
    }, [])


    // remove duplicate entries
    const seen = new Set();

    const filteredArr = dataArray?.filter(el => {
        const duplicate = seen.has(el.owner.login);
        seen.add(el.owner.login);
        return !duplicate;
    });

    // pagination
    const indexOfTheLastGist = currentPage * gistPerPage;
    const indexOfFirstGist = indexOfTheLastGist - gistPerPage;
    const currentArrayGist = filteredArr?.slice(indexOfFirstGist, indexOfTheLastGist)

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return <div className="wrapper">
        {isLoading ? <Loading /> : <>
            <GistList currentArrayGist={currentArrayGist} fiteredGist={fiteredGist} />
            <Pagination
                postsPerPage={gistPerPage}
                totalPosts={dataArray?.length}
                paginate={paginate}
            />
        </>
        }

    </div>
}

export default Gist
