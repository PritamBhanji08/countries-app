import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search'
import CountryList from './components/CountryList'
import Pagination from './components/Pagination'

function App() {
  const PAGE_SIZE = 50;
  const [searchVal, setSearchVal] = useState('')
  const [countriesList, setCountriesList] = useState([])
  const [searchedCountries, setSearchedCountries] = useState([])
  const [totalCountries, setTotalCountries] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  
  useEffect(()=> {
    const searchedCountries = countriesList.filter((item, index) => {
      if (searchVal==='') {
        return index<PAGE_SIZE
      } else {
        return item.name.toLowerCase().includes(searchVal.toLowerCase())
      }
    })
    setSearchedCountries(searchedCountries)
    if(searchVal==='') {
      setTotalCountries(countriesList.length)
    } else {
      setTotalCountries(searchedCountries.length)
    }
    setPageNumber(1)
  }, [searchVal, countriesList])

  useEffect(()=> {
    const searchedCoutries = countriesList.filter((item, index) => {
      return index>PAGE_SIZE*(pageNumber-1) && index<pageNumber*PAGE_SIZE
    })
    setSearchedCountries(searchedCoutries)
  }, [countriesList, pageNumber])

  useEffect(()=> {
    fetch("https://restcountries-v1.p.rapidapi.com/all", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "9abe434ad1msh05711d579e57f84p1b0b51jsna528e7612517"
      }
    })
    .then(response => {
      response.json()
      .then(data => {
        setCountriesList(data)
        setTotalCountries(data.length)
      })
    })
    .catch(err => {
      console.log(err);
    });
  }, [])
  function onInputChange(val) {
    setSearchVal(val)
  }
  function paginationClicked(index) {
    setPageNumber(index)
  }
  return (
    <div className="container">
      <center><h1>Country Filter</h1></center>
      <Search onInputChange={onInputChange}></Search>
      <CountryList search={searchVal} countries={searchedCountries} page={pageNumber}></CountryList>
      <Pagination totalCountries={totalCountries} paginationClicked={paginationClicked} page={pageNumber} pageSize={PAGE_SIZE}/>
    </div>
  );
}

export default App;
