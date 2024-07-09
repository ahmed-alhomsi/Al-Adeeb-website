const imgs= document.getElementsByClassName('img-notebook')
const viewer=document.getElementById("viewNotebook");

imgs[0].style.borderColor='#00ADBC'

function setView(index){

    for(let i=1;i<=imgs.length;i++){
        if(i==index)
        imgs[(i-1)].style.borderColor='#00ADBC'
        else{
            imgs[(i-1)].style.borderColor='transparent'
        }
    
    }
   
viewer.style.animation = 'none';
		setTimeout(() => {
			viewer.style.animation = '';
  viewer.src='../assets/images/2d-plastic/view/'+index+".png";

		}, 0);
}