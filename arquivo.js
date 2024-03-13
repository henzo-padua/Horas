function carregar (){
const msg = document.getElementById ('msg')
const foto = document.getElementById('imagem')
const data = new Date()
const hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`


if(hora >= 0 && hora < 12){
    foto.src = "./img/fotomanha.jpg"
    document.body.style.background = '#e2cd9f'

} else if (hora >= 13 && hora < 18){
    foto.src = "./img/fototarde.jpg"
    document.body.style.background = '#b9846f'
}else{
    foto.src = "./img/fotonoite.jpgs"
    document.body.style.background = '#515154'
}
}