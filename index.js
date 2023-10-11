let arr = [
{
    img_src:
    "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" ,
    title: "Grocery" ,
    href: "" ,
},
{
img_src:
"https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" ,
title: "Mobiles" ,
href: "" ,
},
{
    img_src:
    "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
    title: "Fashion" ,
    href: "" ,
    },
    {
        img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
        title: "Fashion" ,
        href: "" ,
        },
        {
            img_src:
            "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
            title: "Fashion" ,
            href: "" ,
            },
            {
                img_src:
                "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
                title: "Fashion" ,
                href: "" ,
                },
                {
                    img_src:
                    "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
                    title: "Fashion" ,
                    href: "" ,
                    },
                    {
                        img_src:
                        "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
                        title: "Fashion" ,
                        href: "" ,
                        },
                        {
                            img_src:
                            "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
                            title: "Fashion" ,
                            href: "" ,
                            },
                            {
                                img_src:
                                "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" ,
                                title: "Fashion" ,
                                href: "" ,
                                },
                                                                                                                    

];

arr.map((element)=>{
let image = document.createElement('img');
image.src = element.img_src;

let title = document.createElement("p");
title.innerHTML = element.title;

let box = document.createElement('div');
box.append(image,title);
document.getElementById("categories").append(box);

})


let a= document.getElementById("categories");
console.log(a);