const menuItems = [{name: "Porky", description: "Pork Pot Pie", price: "15.45"}, {name: "Beefy", description: "Beef Pot Pie", price: "19.99"},
                                            {name: "Cluck Cluck", description: "Chicken Pot Pie", price: "16.75"}, {name: "Glizzy", description: "Hot Dog With Bun", price:"3.75"},
                                            {name: "Triple Stacks", description: "Three Pancakes With Toppings", price: "8.99"}];

document.querySelector("#prev").addEventListener("click", getPrev);
document.querySelector("#next").addEventListener("click", getNext);

let menuIndex = 0;

getNext();

function getPrev() {
    menuIndex--;

    if (menuIndex < 0)
        menuIndex = menuItems.length - 1;

    buildMenuItem(menuItems[menuIndex])
    document.querySelector("#menu_pic").src = `./assets/${menuItems[menuIndex].name}.jpg`
    document.querySelector("#menu_pic").alt = menuItems[menuIndex].description;
}

function getNext() {
    menuIndex++;

    if (menuIndex > menuItems.length - 1)
        menuIndex = 0;

    buildMenuItem(menuItems[menuIndex])
    document.querySelector("#menu_pic").src = `./assets/${menuItems[menuIndex].name}.jpg`
    document.querySelector("#menu_pic").alt = menuItems[menuIndex].description;
}

function buildMenuItem(item)
{
    let name = document.querySelector("#menu_name");
    let desc = document.querySelector("#menu_description")
    let price = document.querySelector("#menu_price")

    name.textContent = item.name;
    desc.textContent = "Description: " + item.description;

    const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})

    price.textContent = "Price: " + currencyFormatter.format(item.price);
}