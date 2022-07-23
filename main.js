
var product = [
    {
        id: 1,
        name: 'Pancake',
        price: '250',
        img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80'
    },
    {
        id: 2,
        name: 'Salad',
        price: '250',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        id: 3,
        name: 'strawberry shortcake',
        price: '250',
        img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    {
        id: 4,
        name: 'Pizza',
        price: '250',
        img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80'
    },
    {
        id: 5,
        name: 'Toast',
        price: '250',
        img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
    },
]

var html = ''

$(document).ready(function () {
    for (i = 0; i < product.length; i++) {
        html +=
            `
       <div class="col-4 col-xs-4 col-sm-3 m-0 p-0" id="product_list" onclick="select_product(${product[i].id},'${product[i].img}','${product[i].name}','${product[i].price}')" >
         <a href="#"class="card p-1 m-1 text-start text-sm-center cart_item">
           <img src="${product[i].img}" class="m-0 w-100  w-sm-0" alt="" />
         </a>
       </div>`
    }
    $("#product_cart").focus();
    $("#product").html(html)
    cart();
})




let list = [] //list มาไง


function select_product(mid, img, pname, pprice) {
    var pass = true
    for (i = 0; i < list.length; i++) {
        if (list[i].id == mid) {

            list[i].count++;
            pass = false;
        }
    }
    if (pass) {
        list.push({
            id: mid,
            name: pname,
            price: pprice,
            img: img,
            count: 1
        })
    }
    cart();
}


function cart() {
    var product_list = ''
    if (list.length > 0) {
        for (i = 0; i < list.length; i++) {
            if (list[i].count > 0) {
                product_list += `<div class="row my-2 m-0 p-1 border" id="delete_pro${list[i].id}"> 
        <div class="">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div>
            <img
              src="${list[i].img}"
              class="img-fluid rounded-3"
              alt="Shopping item"
              style="width: 65px"
            />
          </div>
          <div class="ms-3">
            <h6>${list[i].name}</h6>
            <p class="small mb-0"></p>
          </div>
        </div>
        <div class="d-flex flex-row align-items-center">
          <div style="width: 90px">
            <small class="fw-normal mb-0">จำนวน<span id="countitems${i}">${list[i].count}</span> </small>
          </div>
          <div style="width: 80px">
            <h5 class="mb-0">${list[i].price} บาท</h5>
          </div>
          <a href="#!" style="color: #cecece"
            ><i class="fas fa-trash-alt"onclick="delete_product(${i},${list[i].id})"  ></i
          ></a>
        </div>
      </div>
    </div>
  </div>
`
            }
            $("#product_cart").html(product_list)
        }
    } else {
        $("#product_cart").html(`<p class="d-none d-sm-block">ไม่มีสินค้า</p>`)
    }
}

function delete_product(i, id) {

    if (list[i].count > 0) {
        list[i].count--;
        $("#countitems" + i).text(list[i].count)
    }
    if (list[i].count <= 0) {
        $("#delete_pro" + id).remove();
    }
}






$(document).foundation();
var stickyElem = new Foundation.Sticky($(".top-bar"), {
    marginTop: 0
});

$(".top-bar").on("sticky.zf.stuckto:top", function () {
    $(".sticky-container").fadeIn();
});
$(".top-bar").on("sticky.zf.unstuckfrom:top", function () {
    $(".sticky-container").fadeOut();
});



$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$(document).ready(function () {

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});

$(document).ready(function () {
    $(".carousel").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
    });
});

$(document).ready(function () {
    $("#product_all").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });
});
$(document).ready(function () {
    $("#product_all2").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
    });
});

window.onload = function () {
    slideOne();
    slideTwo();
};





