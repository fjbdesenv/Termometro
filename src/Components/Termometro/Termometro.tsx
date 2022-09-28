import {Fragment, ReactElement, useState} from 'react';
import Input from '../Input/Input';


export default function Termometro (): ReactElement {
    const [temperature, setTemperature] = useState(0);

    const alterTemp = (nemTemp:number):void => setTemperature(nemTemp);

    const celsioForFahrenheit = (celsios:number):number =>(((celsios * 9) / 5) + 32); 
    const fahrenheitForCelsio = (fahrenheit:number):number =>(((fahrenheit - 32) * 5) / 9);
    const celsioForKelvin = (celsios:number):number =>(celsios +  273.15); 
    const KelvinForcelsio = (celsios:number):number =>(celsios - 273.15); 

    return(
        <Fragment>
            <h2>Termometro</h2>
            <div>
                <Input
                    name='Celsios'
                    temperature={temperature}
                    scale={'ºC'}
                    onChange={alterTemp}
                />
                <Input
                    name='Fahrenheit'
                    temperature={celsioForFahrenheit(temperature)}
                    scale={'ºF'}
                    onChange={(num:number) => {
                        const temperature = num;
                        alterTemp(fahrenheitForCelsio(temperature));
                    }
                }/>
                <Input
                    name='Kelvis'
                    temperature={celsioForKelvin(temperature)}
                    scale={'ºK'}
                    onChange={(num:number) =>{
                        const temperature = num;
                        alterTemp(KelvinForcelsio(temperature));
                    }
                }
                />
            </div>
        </Fragment>
    );
}