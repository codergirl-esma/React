import ReactDOM from 'react-dom/client';
import Sol from './Sol';
import Giris_form from './Giris_form';
import Kayit_form from './Kayit_form';
import Sss from './Sss';
import Sag from './Sag';
import Basvur from './Basvur';
import BasvuruBilgileri from './BasvuruBilgileri';
import Bilgi from './Bilgi';


import {basliklar, icerikler, sorular, cevaplar ,bilgi_baslik} from './Icerik';
import BasvuruIcerigi from './BasvuruIcerigi';
import Anasayfa from './Anasayfa';

 //GİRİŞ KONTROL
export const girisKontrol = () => {


    var kullanici = sessionStorage.getItem("user");
 
    if(kullanici == null){
        sessionStorage.setItem("user","");
    }

    var isLogin = false;
        
    kullanici = sessionStorage.getItem("user");
    const kullanici_ayrik = kullanici.split(",");


    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("sifre").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici_ayrik[0] && sifre == kullanici_ayrik[1]) {

       const sag = ReactDOM.createRoot(document.getElementById("sag"));
       const sol = ReactDOM.createRoot(document.getElementById("sol"));

        yazi.innerHTML = "Giriş bilgileri doğru!"; 
        yazi.style.color = "green";

        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici_ayrik[0];

        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

        setTimeout(function(){
          sag.render(

            )

        },1500);
        
        sol.render(
          <Anasayfa /> //Giriş yapılır yapılmaz sol tarafa bu compo gözüksün..
        )


        document.getElementById("logout_Btn").style.display = "block";

        
    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }


}

//ÇIKIŞ KONTROL
export const logout = () => {

    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    
    const sag = ReactDOM.createRoot(document.getElementById("sag"));

    var isLogin = sessionStorage.getItem("isLogin");
  
    isLogin = false;
  
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("btn_div").style.display = "block";
    document.getElementById("header_sag").innerHTML = "";

    sol.render(

    )
    sag.render(

      ) 
  }

  //GOSTER - RENDER
export const goster = (eleman, eleman_index) => {

 

    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    const sag = ReactDOM.createRoot(document.getElementById("sag"));
  
    if(eleman == "Eğitimler"){
      sol.render(
        <Sol 
          baslik = {basliklar[eleman_index]} 
          icerik = {icerikler[eleman_index]} 
        /> 
      )
  
    }
    else if(eleman == "Hemen Başvur"){

     var isLogin = sessionStorage.getItem("isLogin");

      if(isLogin == "true"){
        sol.render(
          <Basvur />
        )
      }
     else{
      sol.render(
        <BasvuruIcerigi />
      );
     }
    }
    else if(eleman == "S.S.S."){
      sol.render(
        <>
        <h1>{basliklar[eleman_index]}</h1>
  
        {sorular.map((Q, soru_index) =>   
          (<Sss
              soru={Q} 
              cevap={cevaplar[soru_index]}
          />)
          )}
        </>
      )
    }
    else if(eleman == "giris"){
      sag.render(
        <Giris_form />
      )
    }
    else if(eleman == "kayit"){
      sag.render(
        <Kayit_form />
      )
    }

    else if(eleman == "gonder"){
      sag.render(
        <Giris_form />
      )
    }
        
    
  }

  //Basvuru Bilgiler
  export const basvuru_bilgi = () => {

    const sag = ReactDOM.createRoot(document.getElementById("sag"));
   
    var user_info = sessionStorage.getItem("user_info");
    var kullanici_bilgiler = user_info.split(",");

    sag.render(
     <BasvuruBilgileri 
      ad= {kullanici_bilgiler[0]}
      email={kullanici_bilgiler[1]} 
      egitim = {kullanici_bilgiler[2]}
      d_tarihi ={kullanici_bilgiler[3]}
      />
    )
 
  }

  //FORM GÖNDER
  export const gonder = () => {

    var name = document.getElementById("inputName").value;
    var mail = document.getElementById("inputMail").value;
    var egitim = document.getElementById("egitim").value;
    var dogumTarihi = document.getElementById("dogum_tarihi").value;

    var user_info = [name, mail, egitim, dogumTarihi];

    sessionStorage.setItem("user_info", user_info);
    //değerler session storage array olarak göderilir

    
    basvuru_bilgi();
 
  }


 export const BasvuruyaGit = () =>{

  const sol = ReactDOM.createRoot(document.getElementById("sol"));

  sol.render(
    <Basvur />
  )
   
 }

 export const Guncelle = () =>{

 


 }

 export const bilgi_goruntule = ()=>{  //başvuru formuna görüntüle butonuda koyulabilir.2.YÖNTEM

  var user_info = sessionStorage.getItem("user_info"); //Bilgileri alıyor

  var kullanici = user_info.split(","); //splitle ayırıp kullanıcı değişkenine atıyor

  const sag = ReactDOM.createRoot(document.getElementById("sag"));

  sag.render(
    <>
    <div className='bg-light p-5 border border-3' style={{color: "red"}}>
      <h1>Başvuru Bilgileri</h1>
     {kullanici.map((bilgi,bilgi_index) =>(
      <Bilgi
    bilgi_ismi = {bilgi_baslik[bilgi_index]}
    deger = {bilgi}
 
    />)

    )
  }
  </div>
  </>

  )

 }
