const filterTable = () => {

    try {
        let input1 = document.getElementById("searchField1");
        let input2 = document.getElementById("searchField2");
        let input3 = document.getElementById("searchField3");
        let input4 = document.getElementById("searchField4");
        let input5 = document.getElementById("searchField5");
        let input6 = document.getElementById("searchField6");
        let input7 = document.getElementById("searchField7");
        let input8 = document.getElementById("searchField8");
        let input9 = document.getElementById("searchField9");



    let fil1 = input1.value.toUpperCase();
    let fil2 = input2.value.toUpperCase();
    let fil3 = input3.value.toUpperCase();
    let fil4 = input4.value.toUpperCase();
    let fil5 = input5.value.toUpperCase();
    let fil6 = input6.value.toUpperCase();
    let fil7 = input7.value.toUpperCase();
    let fil8 = input8.value.toUpperCase();
    let fil9 = input9.value.toUpperCase();


    let co2tab = document.getElementById("co2tab");
    let tr = co2tab.getElementsByTagName("tr");


        for (let i = 0; i < tr.length; i++) {
            let td1 = tr[i].getElementsByTagName("td")[0];
            let td2 = tr[i].getElementsByTagName("td")[1];
            let td3 = tr[i].getElementsByTagName("td")[2];
            let td4 = tr[i].getElementsByTagName("td")[3];
            let td5 = tr[i].getElementsByTagName("td")[4];
            let td6 = tr[i].getElementsByTagName("td")[5];
            let td7 = tr[i].getElementsByTagName("td")[6];
            let td8 = tr[i].getElementsByTagName("td")[7];
            let td9 = tr[i].getElementsByTagName("td")[8];

            if (td1 && td2 && td3 && td4 && td5 && td6 && td7 && td8 && td9) {
                let val1 = td1.textContent || td1.innerText;
                let val2 = td2.textContent || td2.innerText;
                let val3 = td3.textContent || td3.innerText;
                let val4 = td4.textContent || td4.innerText;
                let val5 = td5.textContent || td5.innerText;
                let val6 = td6.textContent || td6.innerText;
                let val7 = td7.textContent || td7.innerText;
                let val8 = td8.textContent || td8.innerText;
                let val9 = td9.textContent || td9.innerText;

                if ((val1.toUpperCase().indexOf(fil1) > -1)
                    && (val2.toUpperCase().indexOf(fil2) > -1)
                    && (val3.toUpperCase().indexOf(fil3) > -1)
                    && (val4.toUpperCase().indexOf(fil4) > -1)
                    && (val5.toUpperCase().indexOf(fil5) > -1)
                    && (val6.toUpperCase().indexOf(fil6) > -1)
                    && (val7.toUpperCase().indexOf(fil7) > -1)
                    && (val8.toUpperCase().indexOf(fil8) > -1)
                    && (val9.toUpperCase().indexOf(fil9) > -1)) {

                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

    }catch(error){
        console.error('Es ist ein Fehler aufgetreten '+error);
    }

    finally {
        console.log('Funktion erfolgreich ausgeführt');
    }
}


const changeMenuPosition = () => {
    let lang = navigator.language;
    //let langSub = lang.substring(0,2);
    let navPos = document.getElementById('NavLeft');

    if (lang.length === 5 || lang.length <= 2) {
        let langSub = lang.substring(0,2);

        switch (langSub) {
            case 'ar' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'dv' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'fa' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'ha' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'he' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'ks' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'ku' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'ps' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'ur' :
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'yi' :
                navPos.setAttribute('id', 'NavRight');
                break;
            default   :
                navPos.setAttribute('id', 'NavLeft');
                break;
        }
    } else if (lang.length >= 6 || lang.length === 3) {
        let langSub = lang.substring(0,3);
        switch (langSub) {

            case 'arc':
                navPos.setAttribute('id', 'NavRight');
                break;
            case 'khw':
                navPos.setAttribute('id', 'NavRight');
                break;
            default   :
                navPos.setAttribute('id', 'NavLeft');
                break;
        }

        /*switch(langSub){
            case 'ar' : navPos.setAttribute('id','NavRight');break;
            case 'arc': navPos.setAttribute('id','NavRight');break;
            case 'dv' : navPos.setAttribute('id','NavRight');break;
            case 'fa' : navPos.setAttribute('id','NavRight');break;
            case 'ha' : navPos.setAttribute('id','NavRight');break;
            case 'he' : navPos.setAttribute('id','NavRight');break;
            case 'khw': navPos.setAttribute('id','NavRight');break;
            case 'ks' : navPos.setAttribute('id','NavRight');break;
            case 'ku' : navPos.setAttribute('id','NavRight');break;
            case 'ps' : navPos.setAttribute('id','NavRight');break;
            case 'ur' : navPos.setAttribute('id','NavRight');break;
            case 'yi' : navPos.setAttribute('id','NavRight');break;
            default   : navPos.setAttribute('id','NavLeft');break;
        }*/

        //lang.startsWith('ar') === true ? navPos.setAttribute('id','NavRight') : navPos.setAttribute('id','NavLeft');
        //let textelement = document.getElementById('text');
        //textelement.innerText = lang;
        //element.setAttribute('id','NavRight');
        //let loc = navigator.geolocation.getCurrentPosition();
    }
}
window.addEventListener('load', changeMenuPosition);