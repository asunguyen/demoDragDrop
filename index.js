var downDragStatus = false;
var type = null;
var eleSelected = {};
var dragEle = function() {
    $("#left li .item").unbind("mousedown").mousedown(function(el) {
        downDragStatus = true;
        type = $(el.target).attr("data");
        var htmltam= htmltmp(el);
        console.log(htmltam);
        $("body").append(htmltam);
    }) 
    $("body").unbind("mousemove").mousemove(function(el) {
        if ( downDragStatus == true)
        $(".element-tmp-drag").css({"top": el.clientY + "px", "left": el.clientX + "px"});
    }) 
};
var htmltmp = function(el) {
    return `<button class="element-tmp-drag" style='top: ${el.clientY}px; left: ${el.clientX}px;'>button tạm</button>`;
}

var dropEle = function() {
    $("body").unbind("mouseup").mouseup(function(el) {
        var idTarget = $(el.target).attr("id");
        if (downDragStatus) {
            var top = el.clientY - $("#content").offset().top + "px";
            var left = el.clientX - $("#content").offset().left + "px";
            render(type, top, left);
        }
        downDragStatus = false;
        $(".element-tmp-drag").remove();
    });
}

var render = function(typeEle, top, left) {
    var html = '';
    switch(typeEle) {
        case "input": 
        html += renderInput(top, left);
        break;
        case "image":
            html += renderImage(top, left);
            break;
        case "button":
            html += renderButton(top, left);
            break;
    }
    $("#content").append(html);

}

var renderButton = function(top, left) {
    var data = {
        id: "block-" + new Date().getTime(),
        class: "block-element-drag",
        with: "100px",
        height: "30px",
        type: "button",
        text: "click here"
    }
    var html = `<button class='${data.class}' id='${data.id}' style='top: ${top}; left: ${left}; width: ${data.with}; heigth: ${data.height}'>${data.text}</button>`;
    return html;
}
var renderImage = function(top, left) {
    var data = {
        id: "block-" + new Date().getTime(),
        class: "block-element-drag",
        with: "100px",
        height: "30px",
        type: "img",
        src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
    }
    var html = `<img src="${data.src}" class='${data.class}' id='${data.id}' style='top: ${top}; left: ${left}; width: ${data.with}; heigth: ${data.height}'></img>`;
    return html;
}
var renderInput = function(top, left) {
    var data = {
        id: "block-" + new Date().getTime(),
        class: "block-element-drag",
        with: "100px",
        height: "30px",
        type: "input",
        placeholder: "nhập đi"
    }
    var html = `<input type="text" class='${data.class}' id='${data.id}' placeholder='${data.placeholder}' style='top: ${top}; left: ${left}; width: ${data.with}; heigth: ${data.height}'>`;
    return html;
}

var selectElement = function() {
    $(".block-element-drag").unbind("mousedown").mousedown(function(ele) {
        dragElement(ele)
    })
    
}
var dragElement = function(ele) {

}






























$(document).ready(function() {
    dragEle();
    dropEle();
})