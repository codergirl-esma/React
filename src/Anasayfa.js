import React from 'react'
import { BasvuruyaGit } from './Functions'
import {goster} from './Functions'


function Anasayfa() {
  return (
    <>
    <div className='container'>
        <div className='row' style={{backgroundColor : 'Red', color: 'white'}}>
            <h2>Başvurun Son Tarihi</h2>
            <p>30 Nisan 2023</p>

            <h5>Gerekli Olan Belgeler</h5>
            <ul>
                <li>İngilizce Yeterlilik Belgesi</li>
                <li>CV</li>
                <li>Dilek Mektubu</li>
            </ul>
            <div className='row'>
              <div className='col-6'>
            {/* <button onClick={()=> goster("Hemen Başvur")}>Başvuru Yap</button> */}
            </div>
            <div className='col-6'>
            <button style={{width : '80px', height : '80px'}} onClick={() => BasvuruyaGit()}>Başvuruya Git</button>
            </div>
            </div>
        </div>
       
    </div> 
    
    </>
  )
}

export default Anasayfa