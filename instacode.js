
var arr=[
{name:"@sangeeta_2322", pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8OhHfF4L86iX2BKwBY_i7121s36JhLqZOA&usqp=CAU",status:"stranger",},
{name:"@sangeet_2322", pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8OhHfF4L86iX2BKwBY_i7121s36JhLqZOA&usqp=CAU",status:"stranger",},
{name:"@sangeeta_232", pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8OhHfF4L86iX2BKwBY_i7121s36JhLqZOA&usqp=CAU",status:"stranger",}
];


function print (){



    clutter="";

arr.forEach(function(elem){
clutter +=` <div class="box">
<div class="pic">
    <img src="${elem.pic}" alt="">
</div>
<h1>${elem.name}</h1>
<p>Lorem ipsum dolor sit amet consectetur . Accusamus sequi voluptatem nisi omnis quam modi.</p>
<h2 class="${elem.status.split("").join("")}"> ${elem.status} </h2>
<button id="${index}"> ${elem.status === "stranger" ? "add friend" : "remove"} </button>
</div>`

})

document.querySelector("#main").innerHTML=clutter;
}
print();

document.querySelector("#main")
.addEventListener("click",function(dets){
    arr[dets.target.id].status="Request sent";
    
    setTimeout(function(){
        arr[dets.target.id].status="remove";
        print();
    },2000)
    print();
})
