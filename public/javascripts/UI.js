/**
 * Created by JOHNNY on 14/04/14.
 */
var DIVELEMENT = "<div class='elementPage'></div>";

function addSettingsPage()
{
    var html = "";
    html+="<ul class='navbarSubMenu'>";
    html+="<li><button class='btn btn-primary btn-file'><i class='fa fa-files-o'></i> Manage pages</button></li>";
    html+="<li><button class='btn btn-success btn-file'><i class='fa fa-file-text'></i> Add page</button></li>";
    html+="<li><button class='btn btn-warning btn-file'><i class='fa fa-file-o'></i> Add blank page</button></li>";
    html+="</ul>";
    $(".subMenu").html(html);
}

function addSettingsElement()
{
    var html="";
    html += "<ul class='navbarSubMenu'>";
    html += "<li><i class='fa fa-picture-o fa-2x'></i><br><a href='#' class='addPicture'> Picture</a></li>";
    html += "<li><i class='fa fa-font fa-2x'></i><br><a href='#'> Text</a></li>";
    html += "<li><i class='fa fa-video-camera fa-2x'></i><br><a href='#'> Video</a></li>";
    html += "<li><i class='fa fa-th fa-2x'></i><br><a href='#'> Gallery</a></li>";
    html += "<li><i class='fa fa-play fa-2x'></i><br><a href='#'> Slideshow</a></li>";
    html += "<li><i class='fa fa-comment-o fa-2x'></i><br><a href='#'> Contact</a></li>";
    html += "<li><i class='fa fa-code fa-2x'></i><br><a href='#'> HTML</a></li>";
    html += "<li><i class='fa fa-minus fa-2x'></i><br><a href='#'> Line</a></li>";
    html += "<li><i class='fa fa-square-o fa-2x'></i><br><a href='#'> Area</a></li>";
    html += "<li><i class='fa fa-th-list fa-2x'></i><br><a href='#'> Menu</a></li>";
    html += "<li><i class='fa fa-cog fa-2x'></i><br><a href='#' class='showWidgets'> Widgets</a></li>";
    html+="</ul>";
    $(".subMenu").html(html);
}

function addSettings()
{
    var html="";
    html+="<ul class='navbarSubMenu'>";
    html+="<li><button class='pageColor btn btn-primary btn-file' data-config='pageSize'><i class='fa fa-file-o'></i> Page color</button></li>";
    html+="<li><button class='pageBackground btn btn-default btn-file' data-config='setBackground'>Background</button></li>";
    html+="<li><button class='pageFavicon btn btn-default btn-file'>Favicon</button></li>";
    html+="<li><button class='pageSeo btn btn-default btn-file'>SEO</button></li>";
    html+="<li><button class='pageDomain btn btn-default btn-file'>Domain</button></li>";
    html+="<li><button class='pageAnalytic btn btn-default btn-file'>Website analytics</button></li>";
    html+="</ul>";
    $(".subMenu").html(html);
}

function showWidgetMenu()
{
    var html="";
    html+="<ul class='navbarSubMenu'>";
    html += "<li><i class='fa fa-twitter fa-2x'></i><br><a href='#'> Twitter feed</a></li>";
    html += "<li><i class='fa fa-vimeo-square fa-2x'></i><br><a href='#'> Vimeo</a></li>";
    html += "<li><i class='fa fa-map-marker fa-2x'></i><br><a href='#'> Google Maps</a></li>";
    html += "<li><i class='fa fa-youtube-play fa-2x'></i><br><a href='#'> Youtube Video</a></li>";
    html += "<li><i class='fa fa-facebook-square fa-2x'></i><br><a href='#'> Facebook comments</a></li>";
    html += "<li><i class='fa fa-thumbs-o-up fa-2x'></i><br><a href='#'> Facebook likes</a></li>";
    html+="<li><i class='fa fa-step-backward fa-2x'></i><br><a href='#' class='backToElement'>Back</a></li>";
    html+="</ul>";
    $(".subMenu").html(html);
}
function addPicture()
{
    var nbImg = $('body').find('.contentImgPage').length;
    var html="";
    $("#mainView").append("<span class='contentImgPage' id='contentImg_"+nbImg+"'><span class='elementClose'><a href='#' class='removeElement'><img src='../images/cross.png'/></a></span><span class='elementClose'><a href='#' class='linkElement' data-config='img'><i class='fa fa-link'></i></a></span><img src='../images/FAKE.png' class='imgElement'></span>");
    $(".imgElement").resizable();
    $(".contentImgPage").css("display","inline-block");
    //$(".contentImgPage").css("border","1px solid black");
    $(".contentImgPage").css("padding","5px");
    $(".imgElement").css("border","1px dashed grey");
    $(".contentImgPage").draggable({cursor: "all-scroll"});
    html+="<ul class='navbarSubMenu'>";
    html+="<li><span class='btn btn-primary btn-file pull-right' data-idImg='"+nbImg+"'>Replace picture<input type='file' name='uploadPicture' class='form-control'></span>";
    html+="<li><span class='cropPict btn btn-primary btn-file' data-idImg='"+nbImg+"'> Crop</span></li>";
    html+="<li><span class='setInfoPict btn btn-primary btn-file' data-config='info-img' data-idImg='"+nbImg+"'> Set info</span></li>";
    html+="<li><i class='fa fa-step-backward fa-2x'></i><br><a href='#' class='backToElement'>Back</a></li>";
    html+="</ul>";
    $(".subMenu").html(html);
}

function removeElement(element)
{
    var parent = element.parent();
    var grandPa = parent.parent();
    grandPa.remove();
}

function showModalConfig(element)
{
    var config = "";
    config = element.data("config");
    var html="";
    switch(config){
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
            html += "<input type='hidden' name='idImg' value='"+idImgContainer+"'>";
            html += "<label for='descriptionImg'>Description</label>";
            html += "<textarea name='descriptionImg' id='descriptionImg' class='form-control'></textarea>";
            html += "</div>";
            html+= "</form>";
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
            html += "<option value='backgroundCImage'>Background image</option>";
            html += "</select>";
            $(".modal-body").html(html);

            $(".backgroundType").change(function(){
                var event = $(this).val();
                addBackgroundType(event);
            });

            break;
    }
    $("#modalParameters").modal();
}

function addBackgroundType(event)
{
    var html ="";
    if(event == "backgroundColor")
    {
        html += "<p>Choose background color</p>"
        html += "<p id='colorpickerHolder'></p>";
        $("#contentInputLink").html(html);
        $('#colorpickerHolder').ColorPicker({
            flat: true,
            onChange: function (hsb, hex, rgb) {
                $('body').css('backgroundColor', '#' + hex);
            }});
    }
}

function addLinkInput(event)
{
    var html="";
    switch(event)
    {
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
