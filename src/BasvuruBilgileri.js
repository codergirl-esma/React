import React from 'react'
import { Guncelle } from './Functions';

function BasvuruBilgileri(props) {
  return (
    <form>
        <div className="row " style ={{backgroundColor : 'red',color: 'white', border : '10px'}}>
            <div className='col-8'>
            <div class="row" >
                    <div class="col-12">
                        <h1 class="text-center">Kullanıcı Başvuru Bilgileri</h1>
                    </div>
            </div> 
            
            <div className= "row">
                <div className='col-6'>
                    <label for="inputName" className="col-form-label">İsim- Soyisim  :</label>
                    <p id="ad">{props.ad}</p>
                </div>
                <div className='col-6'>
                    <label for="inputEmail" className="col-form-label">E - mail  : </label>
                    <p id="email">{props.email}</p>
                    
                </div>
            </div>

            <div className='row'>
                <div className='col-6'>
                <label for="inputEgitim" className="col-form-label" >Eğitim Durumu  :</label>
                <p id="egitim">{props.egitim}</p>
                </div>
                <div className='col-6'>
                <label for="inputd_tarihi" className="col-form-label">Doğum Tarihi  :</label>
                <p id="d_tarihi">{props.d_tarihi}</p>
                 </div>
            </div>
         
            </div>
        </div>
    </form>
  );
}

export default BasvuruBilgileri;