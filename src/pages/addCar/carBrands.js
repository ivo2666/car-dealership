import oldData from './modelData';

function dataArr(data) {
    let result = [];
    
    for (const [key, value] of Object.entries(data)) {
        let unModels = [];
        for (const v of Object.values(value)) {
            unModels.push(v)
        }
        result.push({brand: key, models: unModels.sort()})
    }
    return result
}

function myFormat(data) {
    let dataObj = {};
data.map(item => {
if(!dataObj.hasOwnProperty(item.Make)) {
   dataObj[item.Make] = {};
}
if (!dataObj[item.Make].hasOwnProperty(item.Model)) {
    dataObj[item.Make][item.Model] = item.Model;
}
    return dataObj[item.Model];
})
return dataArr(dataObj);
}

export default myFormat(oldData.results)



