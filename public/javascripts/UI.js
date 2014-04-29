/**
 * Created by JOHNNY on 14/04/14.
 */
var DIVELEMENT = "<div class='elementPage'></div>";

function addSettingsPage() {
    var html = "";
    html += "<ul class='navbarSubMenu'>";
    html += "<li><button class='btn btn-primary btn-file'><i class='fa fa-files-o'></i> Manage pages</button></li>";
    html += "<li><button class='btn btn-success btn-file'><i class='fa fa-file-text'></i> Add page</button></li>";
    html += "<li><button class='btn btn-warning btn-file'><i class='fa fa-file-o'></i> Add blank page</button></li>";
    html += "</ul>";
    $(".subMenu").html(html);
}

function addSettingsElement() {
    var html = "";
    html += "<ul class='navbarSubMenu'>";
    html += "<li><i class='fa fa-picture-o fa-2x'></i><br><a href='#' class='addPicture'> Picture</a></li>";
    html += "<li><i class='fa fa-font fa-2x'></i><br><a href='#' class='addText'> Text</a></li>";
    html += "<li><i class='fa fa-video-camera fa-2x'></i><br><a href='#'> Video</a></li>";
    html += "<li><i class='fa fa-th fa-2x'></i><br><a href='#'> Gallery</a></li>";
    html += "<li><i class='fa fa-play fa-2x'></i><br><a href='#'> Slideshow</a></li>";
    html += "<li><i class='fa fa-comment-o fa-2x'></i><br><a href='#'> Contact</a></li>";
    html += "<li><i class='fa fa-code fa-2x'></i><br><a href='#'> HTML</a></li>";
    html += "<li><i class='fa fa-minus fa-2x'></i><br><a href='#'> Line</a></li>";
    html += "<li><i class='fa fa-square-o fa-2x'></i><br><a href='#'> Area</a></li>";
    html += "<li><i class='fa fa-th-list fa-2x'></i><br><a href='#'> Menu</a></li>";
    html += "<li><i class='fa fa-cog fa-2x'></i><br><a href='#' class='showWidgets'> Widgets</a></li>";
    html += "</ul>";
    $(".subMenu").html(html);
}

function addSettings() {
    var html = "";
    html += "<ul class='navbarSubMenu'>";
    html += "<li><button class='pageColor btn btn-primary btn-file' data-config='pageSize'><i class='fa fa-file-o'></i> Page color</button></li>";
    html += "<li><button class='pageBackground btn btn-default btn-file' data-config='setBackground'>Background</button></li>";
    html += "<li><span class='btn btn-primary btn-file pageFavicon' style='margin-left: 60px;'>Favicon<input type='file' name='uploadFav' class='form-control'></span></li>";
    html += "<li><button class='pageSeo btn btn-default btn-file' data-config='pageSEO'>SEO</button></li>";
    html += "<li><button class='pageDomain btn btn-default btn-file' data-config='domain'>Domain</button></li>";
    html += "<li><button class='pageAnalytic btn btn-default btn-file' data-config='pageAnalytics'>Website analytics</button></li>";
    html += "</ul>";
    $(".subMenu").html(html);
}

function showWidgetMenu() {
    var html = "";
    html += "<ul class='navbarSubMenu'>";
    html += "<li><i class='fa fa-twitter fa-2x'></i><br><a href='#'> Twitter feed</a></li>";
    html += "<li><i class='fa fa-vimeo-square fa-2x'></i><br><a href='#'> Vimeo</a></li>";
    html += "<li><i class='fa fa-map-marker fa-2x'></i><br><a href='#'> Google Maps</a></li>";
    html += "<li><i class='fa fa-youtube-play fa-2x'></i><br><a href='#'> Youtube Video</a></li>";
    html += "<li><i class='fa fa-facebook-square fa-2x'></i><br><a href='#'> Facebook comments</a></li>";
    html += "<li><i class='fa fa-thumbs-o-up fa-2x'></i><br><a href='#'> Facebook likes</a></li>";
    html += "<li><i class='fa fa-step-backward fa-2x'></i><br><a href='#' class='backToElement'>Back</a></li>";
    html += "</ul>";
    $(".subMenu").html(html);
}

function addTextToPage() {
    var nbText = $('body').find('.contentTxtPage').length;
    var html = "";
    var htmlText = "<h1 class='titleTextAdded'>Lorem ipsum dolor</h1>";
    htmlText += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales ipsum dui, quis ultricies elit pellentesque et. Nullam et augue ornare, tristique orci feugiat, tristique nulla. Sed nec consectetur magna. Morbi fermentum enim vitae mattis bibendum. Maecenas eu gravida nib</p>"
    $("#mainView").append("<span class='contentTxtPage' id='contentTxt_" + nbText + "'><span class='elementClose'><a href='#' class='removeElement'><img src='../images/cross.png'/></a></span><span class='elementClose'><a href='#' class='linkElement' data-config='img'><i class='fa fa-link'></i></a></span><br><div class='txtElement'>" + htmlText + "</div></span>")
    tinymce.init({
        selector: "div.txtElement",
        inline: true,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
    });
    $(".contentTxtPage").draggable().click(function () {
        $(this).draggable({ disabled: true});
        $(this).children().attr("contenteditable", "true");
        $(".txtElement").css("border", "none");
    }).dblclick(function () {
            $(this).draggable({ disabled: false, cursor: "all-scroll"});
            $(this).children().attr("contenteditable", "false");
            $(".txtElement").css("border", "1px dashed grey");
        });
    formatContent($(".contentTxtPage"), $(".txtElement"), "text");
}

function formatContent(content, element, action) {
    content.css("display", "inline-block");
    content.css("padding", "5px");
    element.css("border", "1px dashed grey");
    if (action == "img") {
        content.draggable({cursor: "all-scroll"});
        element.resizable();
    }
    if (action == "text") {
        element.css("padding", "5px");
        element.css("width", "345px")
    }

}

function addPicture() {
    var nbImg = $('body').find('.contentImgPage').length;
    var html = "";
    $("#mainView").append("<span class='contentImgPage' id='contentImg_" + nbImg + "'><span class='elementClose'><a href='#' class='removeElement'><img src='../images/cross.png'/></a></span><span class='elementClose'><a href='#' class='linkElement' data-config='img'><i class='fa fa-link'></i></a></span><img src='../images/FAKE.png' class='imgElement'></span>");
    formatContent($(".contentImgPage"), $(".imgElement"), "img");
    html += "<ul class='navbarSubMenu'>";
    html += "<li><span class='btn btn-primary btn-file pull-right' data-idImg='" + nbImg + "'>Replace picture<input type='file' name='uploadPicture' class='form-control'></span>";
    html += "<li><span class='cropPict btn btn-primary btn-file' data-idImg='" + nbImg + "'> Crop</span></li>";
    html += "<li><span class='setInfoPict btn btn-primary btn-file' data-config='info-img' data-idImg='" + nbImg + "'> Set info</span></li>";
    html += "<li><i class='fa fa-step-backward fa-2x'></i><br><a href='#' class='backToElement'>Back</a></li>";
    html += "</ul>";
    
    $(".subMenu").html(html);
}

function removeElement(element) {
    var parent = element.parent();
    var grandPa = parent.parent();
    grandPa.remove();
}

function showModalConfig(element) {
    var config = "";
    config = element.data("config");
    var html = "";
    switch (config) {
        case "img":
            $(".modal-title").html("Add a link");
            html += "<form name='formLinkImg' id='formLink'>";
            html += "<label>Choose type of link</label>";
            html += "<select name='linkType' class='form-control linkType'>";
            html += "<option value=''>None</option>";
            html += "<option value='External link'>External link</option>";
            html += "<option value='Internal link'>Internal link</option>";
            html += "<option value='Link to an element'>Link to an element</option>";
            html += "<option value='File input'>File upload</option>";
            html += "</select>";
            html += "</form>";
            html += "<div id='contentInputLink'></div>";
            $(".modal-body").html(html);
            break;
        case "info-img":
            var idImgContainer = element.attr("data-idImg");
            $(".modal-title").html("Choose title and description for this element");
            html += "<form name='formInfoImg' id='formLink' role='form'>";
            html += "<div class='form-group'>";
            html += "<label for='titleimg'>Title</label>";
            html += "<input type='text' name='titleimg' id='titleimg' class='form-control'>";
            html += "</div>";
            html += "<div class='form-group'>";
            html += "<input type='hidden' name='idImg' value='" + idImgContainer + "'>";
            html += "<label for='descriptionImg'>Description</label>";
            html += "<textarea name='descriptionImg' id='descriptionImg' class='form-control'></textarea>";
            html += "</div>";
            html += "</form>";
            $(".modal-body").html(html);
            break;
        case "pageSize":
            $(".modal-title").html("Choose page color");
            $(".modal-body").html("<p id='colorpickerHolder'></p>");
            $('#colorpickerHolder').ColorPicker({
                flat: true,
                onChange: function (hsb, hex, rgb) {
                    $('#mainView').css('backgroundColor', '#' + hex);
                }});
            break;
        case "setBackground":
            $(".modal-title").html("Choose background type");
            html += "<select class='form-control backgroundType' name='backgroundType'>";
            html += "<option value='none'>Choose background type</option>";
            html += "<option value='backgroundColor'>Background color</option>";
            html += "<option value='backgroundImage'>Background image</option>";
            html += "</select>";
            html += "<div id='contentInputLink'></div>";
            $(".modal-body").html(html);
            break;
        case "pageSEO":
            $(".modal-title").html("Search Engine Optimization");
            html += "<form name='formSEO' id='formSEO' role='form'>";
            html += "<label>Title</label>";
            html += "<input type='text' name='seoTitle' class='form-control'>";
            html += "<label>Description</label>";
            html += "<textarea class='form-control' name='seoDescription'></textarea>";
            html += "<label>Keywords (separate by commas)</label>";
            html += "<textarea class='form-control' name='seoKeywords'></textarea>";
            html += "</form>";
            $(".modal-body").html(html);
            break;
        case "pageAnalytics":
            $(".modal-title").html("Analyze your website traffic");
            html += "<form name='formAnalytics' id='formAnalytics' role='form'>";
            html += "<label>Google Analytics tracking ID</label>";
            html += "<input type='text' name='analyticsId' class='form-control'>";
            html += "</form>";
            $(".modal-body").html(html);
            break;
        case "domain":
            $(".modal-title").html("Register your website");
            html += "<form name='formDomain' id='formDomain' role='form'>";
            html += "<label>Save as</label>";
            html += "<input type='text' name='domainName' class='form-control'>";
            html += "</form>";
            break;
    }
    $("#modalParameters").modal();
}

function addBackgroundType(event) {
    var html = "";
    if (event == "backgroundColor") {
        html += "<p>Choose background color</p>"
        html += "<p id='colorpickerHolder'></p>";
        $("#contentInputLink").html(html);
        $('#colorpickerHolder').ColorPicker({
            flat: true,
            onChange: function (hsb, hex, rgb) {
                $('body').css('backgroundColor', '#' + hex);
            }});
    }
    else if (event == "backgroundImage") {
        html += "<form role='form' id='formBackgroundImg'>";
        html += "<br><label>Background image :</label>";
        html += "<span class='btn btn-primary btn-file' style='margin-left: 60px;'>Upload<input type='file' name='uploadBackImg' class='form-control'></span><br>";
        html += "<label for='typeOfBackImg'>Type</label>";
        html += "<select class='form-control' name='typeOfBackImg'>";
        html += "<option value='Normal'>Normal</option>";
        html += "<option value='Stretched'>Stretched</option>";
        html += "</select>";
        html += "<label for='alignBackHorizontally'>Align horizontally</label>";
        html += "<select class='form-control' name='alignBackHorizontally'>";
        html += "<option value='right'>Right</option>";
        html += "<option value='left'>Left</option>";
        html += "<option value='center'>Center</option>";
        html += "</select>";
        html += "<label for='alignBackVertically'>Align vertically</label>";
        html += "<select class='form-control' name='alignBackVertically'>";
        html += "<option value='top'>Top</option>";
        html += "<option value='center'>Center</option>";
        html += "<option value='bottom'>Bottom</option>";
        html += "</select>";
        html += "<label for='backRepeat'>Repeat</label>";
        html += "<select class='form-control' name='backRepeat'>";
        html += "<option value='stretch'>Stretch</option>";
        html += "<option value='both'>Both</option>";
        html += "<option value='horizontally'>Horizontally</option>";
        html += "<option value='vertically'>Vertically</option>";
        html += "<option value='none'>None</option>";
        html += "</select>";
        html += "<label for='backAttachment'>Attachment</label>";
        html += "<select class='form-control' name='backAttachment'>";
        html += "<option value='scroll'>Scroll with page</option>";
        html += "<option value='stretched'>Stretched</option>";
        html += "<option value='fixed'>Fixed</option>";
        html += "</select>";
        html += "</form>";
        $("#contentInputLink").html(html);
    }
}

function addLinkInput(event) {
    var html = "";
    switch (event) {
        case "External link":
            html += "<label>External link</label><input type='text' name='externalLink' class='form-control' value='http://'>";
            html += "<label>Open in</label>";
            html += "<select class='form-control' name='openLinkIn'>";
            html += "<option value='Same window'>Same window</option>";
            html += "<option value='New window'>New window</option>";
            html += "</select>";
            $("#contentInputLink").html(html);
            break;
        case "Internal link":
            break;
        case "Link to an element":
            $("#contentInputLink").html("<label>Anchor</label><input type='text' name='anchorLink' class='form-control'>");
            break;
        case "File input":
            $("#contentInputLink").html("<span style=''>None, please upload :</span><span class='btn btn-primary btn-file pull-right'>File to upload<input type='file' name='uploadLink' class='form-control'></span>");
            break;
    }
}

