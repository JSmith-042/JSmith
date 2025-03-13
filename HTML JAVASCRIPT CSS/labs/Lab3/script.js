let dogs = [];
let picLimit = 10;

function getCollectionFromBreed(breed)
{
    dogs = [];
    console.log("getting breed: ", breed)
    document.querySelectorAll('*').forEach(function(node) {
        node.style.cursor = 'wait';
    });

    document.getElementById("dog").style.visibility = "visible";

    const BASEURL = "https://dog.ceo/api/breed/"
    let route = `${breed}/images`;
    fetch(BASEURL + route)
        .then(data => {
            if (data.ok)
                return data.json()
            throw Error("Bad Data")
        })
        .then(parsedData => {
            let imgs = shuffle(parsedData.message); //randomize the dogs

            for (let i = 0; i < imgs.length; i++)
            {
                if (dogs.length === picLimit)
                    break;

                let dog = imgs[i].includes("border") || imgs[i].includes("tibetan") || imgs[i].includes("eskimo") ? imgs[i] :  "";

                if (dog) {
                    dogs.push(dog);
                }
            }

            document.querySelectorAll('*').forEach(function(node) {
                node.style.cursor = '';
            });

            getNext()
        })
        .catch(error => {document.querySelectorAll('*').forEach(function(node) {
            node.style.cursor = '';
        }); console.log(error)});

        let el = document.querySelector("#alertClose");

        if (el)
            el.click();
}

const alertPlaceholder = document.getElementById('alertPlaceholder')
const sendAlert = (message, type) => {
    alertPlaceholder.innerHTML=[
        `<div class="alert alert-${type} alert-dismissible text-center" role="alert">`,
        `   <div style="color:darkred">${message}</div>`,
        '   <button id="alertClose" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
}

function getPrev()
{
    if (dogs.length === 0) {
        sendAlert('No breed selected', 'warning');
        return;
    }

    let img = document.getElementById("dog");
    if (dogs.indexOf(img.src) === 0)
        img.src = dogs[9];
    else
        img.src = dogs[dogs.indexOf(img.src) - 1];
}

function getNext()
{
    if (dogs.length === 0) {
        sendAlert('No breed selected', 'warning')
        return;
    }

    let img = document.getElementById("dog");
    if (dogs.indexOf(img.src) === 9)
        img.src = dogs[0];
    else
        img.src = dogs[dogs.indexOf(img.src) + 1];
}

function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

