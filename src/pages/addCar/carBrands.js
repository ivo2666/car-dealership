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
if(!dataObj.hasOwnProperty(item.brand)) {
   dataObj[item.brand] = {};
}
if (!dataObj[item.brand].hasOwnProperty(item.model)) {
    dataObj[item.brand][item.model] = item.model;
}
    return dataObj[item.model];
})
return dataArr(dataObj);
}

export default myFormat(oldData)



