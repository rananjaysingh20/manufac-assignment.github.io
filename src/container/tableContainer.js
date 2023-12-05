import React, { useEffect, useState } from 'react'
import data from '../data/Wine-Data.json'
import { MeanTable } from '../components/meanTables'
import { GammaTable } from '../components/gammaTables'

export const TableContainer = () => {
    const [categories, setCategories] = useState([]);
    const [mean, setMean] = useState([]);
    const [median, setMedian] = useState([]);
    const [mode, setMode] = useState([]);
    const [gammaMean, setGammaMean] = useState([]);
    const [gammaMedian, setGammaMedian] = useState([]);
    const [gammaMode, setGammaMode] = useState([]);
    useEffect(() => {
        const cat = Array.from(new Set(data.map((item) => item.Alcohol)));
        setCategories(cat);
        let flav = [];
        let flavTotal = [];
        let sum = 0;
        let j = 1;
        let k = 1;
        for(let i=0; i<data.length;i++) {
            if(data[i].Alcohol === j) {
                sum = sum + data[i].Flavanoids*1;
                flav[j-1] = sum;
                k++;
                flavTotal[j-1] = k;
            } else {
                j++;
                sum = 0;
                k = 1;
            }
        }
        let flavSet = [];
        let flavSets = [];
        let gammaSet = [];
        let gammaSets = [];
        let a = 0;
        let b = 0;
        for(let i=0; i<data.length;i++) {
            if(data[i].Alcohol===cat[a]) {
                flavSet[b] = data[i].Flavanoids*1;
                gammaSet[b] = (data[i].Ash*1*data[i].Hue*1)/data[i].Magnesium*1;
                b++;
            } 
            else {
                a++;
                b = 0;
                flavSets.push(flavSet);
                gammaSets.push(gammaSet);
                flavSet = [];
                gammaSet = [];
            }
        };
        flavSets.push(flavSet);
        gammaSets.push(gammaSet);
        const gammaSums = cat.map((item, index) => {
            return gammaSets[index].reduce((partialSum, acc) => partialSum+acc, 0);
        });
        const gammaNums = cat.map((item, index) => {
            return gammaSets[index].length;
        });
        let modes = [];
        const calculateMode = () => {
            for(let i=0;i<cat.length;i++) {
                let arr = flavSets[i];
                let mode = {};
                let max = 0;
                let count = 0
                arr.forEach(function(e) {
                  if(mode[e] == null) {
                    mode[e] = 1;
                  } else {
                    mode[e]++;
                  }
                  if(count< mode[e]) {
                    max = e;
                    count = mode[e];
                  }
                });
                modes.push(max);
            }
        }
        calculateMode();
        let gammaModes = [];
        const calculateGammaMode = () => {
            for(let i=0;i<cat.length;i++) {
                let arr = gammaSets[i];
                let mode = {};
                let max = 0;
                let count = 0
                arr.forEach(function(e) {
                  if(mode[e] == null) {
                    mode[e] = 1;
                  } else {
                    mode[e]++;
                  }
                  if(count< mode[e]) {
                    max = e;
                    count = mode[e];
                  }
                });
                gammaModes.push(max);
            }
        }
        calculateGammaMode();
        setGammaMean(cat.map((item, index) => {
            return gammaSums[index]/gammaNums[index];
        }));
        setGammaMode(cat.map((item, index) => gammaModes[index]));
        setGammaMedian(cat.map((item, index) => {
            return (gammaNums[index]/2) + (gammaNums[index]/2 + 1)/2;
        }));
        setMean(cat.map((item,index) => {
            return flav[index]/flavTotal[index];
        }));
        
        setMedian(cat.map((item, index) => {
            return (flavTotal[index]/2) + (flavTotal[index]/2 + 1)/2;
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
