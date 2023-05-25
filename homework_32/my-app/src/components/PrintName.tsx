import getDiff from "./GetDiff";

type PrintNameProps = {
    name: string;
    priority?: boolean,
    stringFirst: string,
    stringSecond: string,       
};

const PrintName = ({ name, priority = false, stringFirst, stringSecond }: PrintNameProps) => {  
    return (
        <div>
            <h3>{name}</h3>           
            <h4>{getDiff(stringFirst, stringSecond)}</h4>
        </div>
    )   
};

export default PrintName;
