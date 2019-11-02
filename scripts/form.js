
var a=document.getElementsByTagName("input");
var mas=[];

function save(){
    for(i=0;i<=1;i++){
        mas[i]=a[i].value; // Из инпутов в массив
    }
   // console.log(mas, 'here');


   let userData = {
    name: mas[0],
    desc: "Телефон: " + mas[1],

   };

	    fetch("https://api.trello.com/1/cards?pos=top&idList=5d025cfe519abb4add10a16b&idLabels=5d02586f91d0c2ddc5c1a3ba&keepFromSource=all&key=0c13c12cc9834e97681967df8df0b308&token=88b8232a62d9735efae5684a520894a832106a168b90274c74ae872c284dfa23", {
	      method: "POST",
	      body: JSON.stringify(userData),
        mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',

            }

	    }).then(response => {
        // console.log(response, 'response')
	    });
}
