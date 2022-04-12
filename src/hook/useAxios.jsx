import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {

  const page = 1
  const [beerData,setBeerData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [url,setUrl]=useState(`https://api.punkapi.com/v2/beers?page=${page}&per_page=12`);
  const [beerType, setBeerType]=useState("");

  const beerFun=async()=>{
      setLoading(true)
      const res = await axios.get(url);
      getbeer(res.data);
      setLoading(false);
  }

  const getbeer=async(res)=>{
      res?.map(async(item)=>{
          setBeerData(state=>{
              state=[...state,item]
              return state;
          })
      })
  }

  useEffect(()=>{
      beerFun();
  },[url])

  const searchBeers = (beerType) => {
    if (beerType !== "") {
      return fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerType}`)
      .then(response => response.json())
      .then(result => {
        const beers = result.map(beers=>beers);
        setBeerData(beers);
      })
    } else {
      beerFun();
    }
  }

  return { beerData, loading, searchBeers, setBeerType};
};
export default useAxios;