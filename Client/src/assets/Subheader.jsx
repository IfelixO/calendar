import {React , useState} from 'react';

import './css/Subheader.css'

const Subheader = () => {
    const [monDate, setMonDate] = useState('22/08')
    const [tueDate, setTueDate] = useState('23/08')
    const [wedDate, setWedDate] = useState('24/08')
    const [thuDate, setThuDate] = useState('25/08')
    const [friDate, setFriDate] = useState('26/08')
    const [satDate, setSatDate] = useState('27/08')
    const [sunDate, setSunDate] = useState('21/08')


    return ( 
        <section className="subheader-all">
            <div className="subheader-firstBlock"></div>
            <div className="subheader-block">
                <p>Dom</p>
                <h3>{sunDate}</h3>
            </div>
            <div className="subheader-block">
                <p>Seg</p>
                <h3>{monDate }</h3>
            </div>
            <div className="subheader-block">
                <p>Ter</p>
                <h3>{tueDate }</h3>
            </div>
            <div className="subheader-block">
                <p>Qua</p>
                <h3>{wedDate }</h3>
            </div>
            <div className="subheader-block">
                <p>Qui</p>
                <h3>{thuDate }</h3>
            </div>
            <div className="subheader-block">
                <p>Sex</p>
                <h3>{friDate }</h3>
            </div>
            <div className="subheader-block">
                <p>Sab</p>
                <h3>{satDate }</h3>
            </div>
            
        </section>
     );
}
 
export default Subheader;