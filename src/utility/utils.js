export const statCalculator = (data) => {
    //calculate number of categories based on alcohol type
    const cat = Array.from(new Set(data.map((item) => item.Alcohol)));
    //calculate total of flavonoids and gamma in each category and 
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
    const flavSums = cat.map((item, index) => {
      return flavSets[index].reduce((partialSum, acc) => partialSum+acc, 0);
    });
    const flavNums = cat.map((item, index) => {
        return flavSets[index].length;
    });
    //function to calculate mode based on entered array
    const calculateMode = (input, output) => {
        for(let i=0;i<cat.length;i++) {
            let arr = input[i];
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
            output.push(max);
        }
    }
    let modes = [];
    let gammaModes = [];
    let median = [];
    let gammaMedian = [];
    //function to calculate median based on entered array
    const calculateMedian = (input, output) => {
      for(let i=0; i < cat.length; i++) {
        let arr = input[i];
        arr.sort((a,b) => a-b);
        const middleIndex = Math.floor(arr.length / 2);
        if (arr.length % 2 === 0) {
          output.push((arr[middleIndex - 1] + arr[middleIndex]) / 2);
        } else {
          output.push(arr[middleIndex]);
        }
      }
    }
    calculateMedian(flavSets, median);
    calculateMedian(gammaSets, gammaMedian);
    calculateMode(flavSets, modes);
    calculateMode(gammaSets, gammaModes);

    return ({cat, flavNums, flavSums, gammaNums, gammaSums, modes, gammaModes, gammaMedian, median})
}