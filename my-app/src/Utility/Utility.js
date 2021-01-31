export const TagComponent = (element,index)=>{
    return <div key={index} className="card2">
        {element}
    </div>
}


let chk = (char) =>{
    return ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'));
}

 export const textTostring = (text) => {
    let arr = [];
    let temp = '';
    for(let i = 0; i < text.length; i++){
        if(chk(text[i]) === false){
            if(temp === '') continue;
            arr = [...arr,temp];
            temp = '';
        }
        else {
            temp += text[i];
        }
    }
    if(temp !== '')
    arr = [...arr,temp];
    return arr;
}

export const makeUnique = (arr)=>{
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let flag = false;
        for(let j = 0; j < newArr.length; j++){
            if(arr[i] === newArr[j]){
                flag = true;
                break;
            }
        }
        if(flag === false){
            newArr = [...newArr,arr[i]];
        }
    }
    return newArr;
}

export const findCommon = (arr1, arr2)=>{
    let newArr = [];
    for(let i = 0; i < arr2.length; i++){
        const uniq = textTostring(arr2[i]);
        for(let j = 0; j <= arr1.length - uniq.length; j++){
            let flag = false;
            for(let k = 0; k < uniq.length;k++){
                if(uniq[k].toLowerCase() !== arr1[j+k].toLowerCase()){
                    flag = true;
                    break;
                }
            }
            if(flag === false){
                newArr = [...newArr,arr2[i]];
                break;
            }
        }
    }
    return newArr;
}

export const findTags = (text,newArr2) => {
    const myArr = textTostring(text);
    const newArr = findCommon(myArr,newArr2);
    const final = makeUnique(newArr);
    return final;
}

export const mkarray = (objArr) => {
    let myArr = [];
    for(let i = 0; i < objArr.length; i++){
        myArr = [...myArr,objArr[i].name];
    }
    return myArr;
}

export const withoutTag = (arr1, arr2) => {
    let myArr = [];
    for(let i = 0; i < arr2.length; i++){
        let flag = true;
        for(let j = 0; j < arr1.length; j++){
            // eslint-disable-next-line
            if(arr1[j] == arr2[i]){
                flag = false;
                break;
            }
        }
        if(flag === true){
            myArr = [...myArr,arr2[i]];
        }
    }
    return myArr;
}