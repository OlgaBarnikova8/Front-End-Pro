// type Diff = { 
//     amount: number; 
//     array: string[];    
// }

// const getDiff = (strFirst: string, strSecond: string): Diff => {
//     let splitFirst = strFirst.split('');
//     let splitSecond = strSecond.split('');
    
//     const second = splitSecond.filter((elem: any) => splitFirst.indexOf(elem) < 0);
//     const first = splitFirst.filter((elem: any) => splitSecond.indexOf(elem) < 0);
//     const diff = first.concat(second);
//     //console.log({ amount: diff.length, array: diff });
//     //return { amount: diff.length, array: diff }
//     console.log(diff)
   
//     return { amount: diff.length, array: diff }
// };

const getDiff = (stringFirst:string, stringSecond:string) : string => {
    let splitFirst = stringFirst.split('');
    let splitSecond = stringSecond.split('');
    const second = splitSecond.filter((elem: any) => splitFirst.indexOf(elem) < 0);
    const first = splitFirst.filter((elem: any) => splitSecond.indexOf(elem) < 0);
    const diff = first.concat(second);

    return `String: ${stringFirst}; String: ${stringSecond}; Diff: ${diff} - ${diff.length}`;
};

export default getDiff;
