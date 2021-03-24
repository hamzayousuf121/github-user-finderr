import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import Gist from './components/Gist'
import { getGistForUser } from './services/gistService'
import {getPublicGists} from './services/gistService'


const App = () => {

  const [fiteredGist, setFilteredGist] = useState('')
  const [searchVal, setSearchVal] = useState('')

  // useEffect(() => {
  //   // seacrh function
  //   const filterUsername = () => {
  //     if (searchVal)
  //       getGistForUser(searchVal)
  //         .then(details => {
  //           setFilteredGist(details.data)
  //           console.log(details.data)
  //         })
  //         .catch(err => console.log(err, 'er'))
  //   }
  //   filterUsername()
  // }, [searchVal])

  const filterUsername = () => {

    if(searchVal === ''){
      getPublicGists()
      return
    }
    if (searchVal)
      getGistForUser(searchVal)
        .then(details => {
          setFilteredGist(details.data)
          setSearchVal('')
          console.log(details.data)
        })
        .catch(err => console.log(err, 'er'))
  }

  return (
    <Wrapper className="App" data-testid="app">
      <Header onChange={(e) => setSearchVal(e.target.value)} searchVal={searchVal} onFindUser={filterUsername}/>
      <GlobalStyles />
      <Gist fiteredGist={fiteredGist} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
