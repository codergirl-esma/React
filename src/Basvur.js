import { useState } from 'react';
import {gonder} from './Functions';

function Basvur() {

    const [show, setShow] = useState(true);
    
    return (
    <>
        <form>
        <div class="row justify-content-center">
            <div class="col-6" style={{backgroundColor:"antiquewhite"}}>
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">100KY Başvuru Formu</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputName" class="col-form-label">İsim/Soyisim: </label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputName" class="form-control"/>
                            </div>
                            <div class="col-auto">
                                <span id="nameHelpInline" class="form-text">
                                    İletişim mail adresinizi giriniz.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="inputMail" class="col-form-label">E-mail:</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputMail" class="form-control"/>
                            </div>
                            <div class="col-auto">
                                <span id="mailHelpInline" class="form-text">
                                    İletişim mail adresinizi giriniz.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <hr />
                        <span class="col-form-label">Eğitim Durumu:</span>
                        <select class="form-select form-select-m mb-3" id="egitim">
                            <option selected> </option>
                            <option value="Lise">Lise</option>
                            <option value="Lisans">Lisans</option>
                            <option value="Lisanustü">Lisansüstü</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <hr />
                        <span class="col-form-label">Doğum Tarihi:</span>
                        <input type="date" class="form-control" id="dogum_tarihi"/>
                    </div>
                </div>
            {
                show === true ? 
            
                <div class="row justify-content-center ">
                    <div class="col-6 my-2 bg-light">
                        <div class="d-flex justify-content-center">

                            <input class="btn btn-primary mx-3" value="Kaydet" onClick={()=> {gonder(); setShow(false);}} />
                            <input type="reset" class="btn btn-outline-secondary mx-3" />

                        </div>
                    </div>
                </div>
                :
                <div class="row justify-content-center ">
                    <div class="col-6 my-2 bg-light">
                        <div class="d-flex justify-content-center">

                            <input class="btn btn-primary mx-3" value="Güncelle" onClick={()=> {gonder(); setShow(false);}} />
                            <input type="reset" class="btn btn-outline-secondary mx-3" />
                            {/* <button class="btn btn-primary mx-3" onClick={() => {bilgi_goruntule()}}>Bilgiyi Görüntüle</button> */}

                        </div>
                    </div>
                </div>
             }
            </div>
        </div>
    </form>
   
    </>
    );
}
export default Basvur;