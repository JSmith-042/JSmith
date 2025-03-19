const ageInput = document.getElementById("age");
ageInput.setCustomValidity("Age must be between 21 and 99");

ageInput.addEventListener("input", () =>{
    if (ageInput.value.length===0)
        return;

    if (ageInput.value.length > 2)
        ageInput.value = ageInput.value.substring(0, 2);

    let age = parseInt(ageInput.value);

    if (age < 21 || age > 99) {
        ageInput.setCustomValidity("Age must be between 21 and 99");
        ageInput.reportValidity();
    }
    else
        ageInput.setCustomValidity("");

});

const phoneInput = document.getElementById("phone");
phoneInput.setCustomValidity("Phone number must be in format ###-###-####");
phoneInput.placeholder = "###-###-####"

phoneInput.addEventListener("input", () =>{
    let phoneNum = phoneInput.value;

    if (phoneNum.length===0)
        return;

    if (phoneNum.length > 12) {
        phoneInput.value = phoneNum.substring(0, 12);
    }

    //Only allow numbers and -
    if (isNaN(phoneNum.charAt(phoneInput.value.length-1)) && phoneNum.charAt(phoneInput.value.length-1) !== "-")
    {
        phoneInput.value = phoneNum.substring(0, phoneNum.length -1);
        phoneInput.setCustomValidity("Phone number must be in format ###-###-####");
        phoneInput.reportValidity();
    }
    else if ((phoneNum.charAt(3) !== "-" && phoneNum.length >= 4) || (phoneNum.charAt(7) !== "-" && phoneNum.length >= 8))
    {
        phoneInput.value = phoneNum.substring(0, phoneNum.length -1) + "-" + phoneInput.value.substring(phoneNum.length -1);
    }
    else
        phoneInput.setCustomValidity("");
});

const infoInput = document.getElementById("info");

infoInput.addEventListener("input", () =>{

    let info = infoInput.value;
    const text_max = 30

    if (info.length > text_max) {
       infoInput.value = info.substring(0, text_max);
    }

    let charCount = document.getElementById("count_message");
    charCount.textContent = infoInput.value.length + "/" + text_max;
});


// overwrite the form submission
let myForm = document.getElementById("hiring-form");

myForm.addEventListener("submit", (event)=>{event.preventDefault(); onSubmit()})

function onSubmit()
{
    //Collate form info
    const formData = new FormData(myForm);

    //Revalidate the three js validation inputs

    if (ageInput.value.length === 0) //No age entered
    {
        ageInput.setCustomValidity("Age must be between 21 and 99");
        ageInput.reportValidity();
        return;
    }

    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (!phonePattern.test(phoneInput.value))
    {
        phoneInput.setCustomValidity("Phone number must be in format ###-###-####");
        phoneInput.reportValidity();
        return;
    }

    if (infoInput.value.length > 30)
    {
        return;
    }

    for (const [key, value] of formData.entries()) {

        if (value !== "")
            console.log(key, value);
    }

    //Reset form
    document.getElementById("hiring-reset").click();
}