function enviar(){
     let em = document.getElementById(ema.value)
     let men = document.getElementById(mens.value)

    
          alert("Mensagem enviada ✔️")
} 
function compr(){
     let pi = document.getElementById(pix).value
     let cd = document.getElementById(cartd).value
     let cc = document.getElementById(cartc).value
     let b = document.getElementById(bol).value
     

     if (!validarCNPJ(valCNPJ)) {
          document.getElementById('cnpj_erro').setAttribute('style', 'visibility:visible');
      }
      else {
          document.getElementById('cnpj_erro').setAttribute('style', 'visibility:hidden');
      }
}

            