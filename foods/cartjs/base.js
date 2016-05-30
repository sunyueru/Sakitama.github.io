function renderList(arr, parent) {
    var li,
        count = 0,
        total = 0;
    if (arr.length == 0) {
        li = document.createElement("li");
        li.className = "ccbg2";
        li.innerHTML = '<div class="orderdish"><span class="name">菜篮子空空哒~~~</span></div>';
        parent.appendChild(li);
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        li = document.createElement("li");
        li.className = "ccbg2";
        li.innerHTML = '<div class="orderdish"><span class="name">' + arr[i].name + '</span><span class="price"> ' + arr[i].number + '份</span><span class="price"> 每份' + arr[i].price + '元</span></div>';
        parent.appendChild(li);
        count += arr[i].number;
        total += arr[i].number * arr[i].price;
    }
    li = document.createElement("li");
    li.className = "ccbg2";
    li.innerHTML = '<div class="orderdish"><span class="price">共计' + count + '份</span><span class="price"> ￥' + total + '元</span></div>';
    parent.appendChild(li);
}
function addEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
    } else {
        element["on" + type] = handler;
    }
}
addEvent(window, "load", function (e) {
    if (window.opener) {
        alert(window.opener.cart);
    } else {
        alert("no");
    }
});
