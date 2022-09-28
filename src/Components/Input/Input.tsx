import { ReactElement } from "react";

interface params {
    name: string,
    temperature: number,
    scale: string,
    onChange: Function
}

export default function Input ({name, temperature, scale, onChange}: params): ReactElement {
    return(
        <p className="boxTemperature" >
            <label htmlFor="">{name}</label>
            <input type="number" value={temperature} onChange={(event) => onChange(event.target.value)}/> {scale}
        </p>
    );
}