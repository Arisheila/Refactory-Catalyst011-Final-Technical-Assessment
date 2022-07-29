const Validation=()=>{
    let Sur=document.registration.surname;
    let check1 = document.querySelector('.one');
    let Given=document.registration.given;
    let check2 = document.querySelector('.two');
    let ddate = document.registration.date;
    let check3 = document.querySelector('.three');
    let Residence=document.registration.placeofresidence;
    let check4 = document.querySelector('.four');
    let Occupation=document.registration.occupation;
    let check5 = document.querySelector('.five');
    let Nation=document.registration.nationality;
    let check6 = document.querySelector('.six');
    let cat = document.registration.category;
    let check7 = document.querySelector('.seven');
    
        const surname = /^[a-zA-Z0-9]+$/;
        if(Sur.value.length <1 || !Sur.value.match(surname)){
            Sur.style.border ='2px solid red';
            check1.textContent = 'This field is required'
            return false;
    }
    else{
        Sur.style.border ='2px solid green '
        check1.textContent = ''
        // return true
    }
    
    // givename
    
        const givename = /^[a-zA-Z0-9]+$/;
        if(Given.value.length <1 || !Given.value.match(givename)){
            Given.style.border ='2px solid red';
            check2.textContent = 'This field is required'
            return false;
    }
    else{
        Given.style.border ='2px solid green '
        check2.textContent = ''
        // return true
    }
    
    
    if(
        ddate.value == ''    
    ){check3.textContent = 'This field is required'
        ddate.style.border ='2px Solid red'
        return false;
    }
    else {
        ddate.style.border ='2px solid green'
        check3.textContent = ''
        // return true;
    }
    
    
    const place = /^[a-zA-Z0-9]+$/;
    if(Residence.value.length <1 || !Residence.value.match(place) || Residence.value.length >20){
        Residence.style.border ='2px solid red';
        check4.textContent = 'This field is required'
        return false;
    }
    else{
    Residence.style.border ='2px solid green '
    check4.textContent = ''
    // return true
    }
    
    const Occupants= /^[a-zA-Z0-9]+$/;
    if(Occupation.value.length <1 || !Occupation.value.match(Occupants)){
        Occupation.style.border ='2px solid red';
        check5.textContent = 'This field is required'
        return false;
    }
    else{
    Occupation.style.border ='2px solid green '
    check5.textContent = ''
    // return true
    };
    
    
    const Uganda = /^[a-zA-Z0-9]+$/;
    if(Nation.value.length <1 || !Nation.value.match(Uganda)){
        Nation.style.border ='2px solid red';
        check6.textContent = 'This field is required'
        return false;
    }
    else{
    Nation.style.border ='2px solid green '
    check6.textContent = ''
    // return true
    }
    
    
    if(  cat.value == ''
    
    ){check7.textContent = 'This field is required'
        cat.style.border ='2px Solid red'
        return false;
    }
    else {
        cat.style.border ='2px solid green'
        check7.textContent = ''
        // return true;
    }
    
    
    
    
    return true;
    }
    
    
    
   