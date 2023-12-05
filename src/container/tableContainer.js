import React, { useEffect, useState } from 'react'
import data from '../data/Wine-Data.json'
import { MeanTable } from '../components/meanTables'
import { GammaTable } from '../components/gammaTables'
import { statCalculator } from '../utility/utils'

export const TableContainer = () => {
  const [categories, setCategories] = useState([]);
  const [mean, setMean] = useState([]);
  const [median, setMedian] = useState([]);
  const [mode, setMode] = useState([]);
  const [gammaMean, setGammaMean] = useState([]);
  const [gammaMedian, setGammaMedian] = useState([]);
  const [gammaMode, setGammaMode] = useState([]);
  //this will calculate all the values once the page is loading for the first time
  useEffect(() => {
    const { 
      cat, 
      flavNums, 
      flavSums, 
      gammaNums, 
      gammaSums, 
      modes, 
      gammaModes,
      gammaMedian,
      median,
    } = statCalculator(data);
    console.log(median, 'des');
    setCategories(cat);
    setGammaMean(cat.map((item, index) => {
        return gammaSums[index]/gammaNums[index];
    }));
    setGammaMode(cat.map((item, index) => gammaModes[index]));
    setGammaMedian(cat.map((item, index) => {
        return gammaMedian[index];
    }));
    setMean(cat.map((item,index) => {
        return flavSums[index]/flavNums[index];
    }));
    setMedian(cat.map((item, index) => {
        return median[index];
    }));
    setMode(cat.map((item,index) => modes[index]));
  }, []);
  return (
    <div>
        <MeanTable categories={categories} mean={mean} median={median} mode={mode}/>
        <br />
        <GammaTable categories={categories} gammaMean={gammaMean} gammaMedian={gammaMedian} gammaMode={gammaMode}/>
    </div>
  )
}
