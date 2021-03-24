import React, {useState} from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';
import {Button} from '@material-ui/core'

function Header({ onChange, searchVal, onFindUser }) {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search onChange={onChange} searchVal={searchVal} />
      <Button variant="contained" color="primary" onClick={onFindUser} >
        Search 
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header
