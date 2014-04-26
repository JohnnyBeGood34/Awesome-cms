/**
 * Created by JOHNNY on 14/04/14.
 */
var DIVELEMENT = "<div class='elementPage'></div>";

function addSettingsPage()
{
    var html = "";
    html+="<ul class='navbarSubMenu'>";
    html+="<li><button class='btn btn-primary'><i class='fa fa-files-o'></i> Manage pages</button></li>";
    html+="<li><button class='btn btn-success'><i class='fa fa-file-text'></i> Add page</button></li>";
    html+="<li><button class='btn btn-warning'><i class='fa fa-file-o'></i> Add blank page</button></li>";
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
    html+="<li><button class='pageColor btn btn-primary'><i class='fa fa-file-o'></i> Page color</button></li>";
    html+="<li><button class='pageBackground btn btn-default'>Background</button></li>";
    html+="<li><button class='pageFavicon btn btn-default'>Favicon</button></li>";
    html+="<li><button class='pageSeo btn btn-default'>SEO</button></li>";
    html+="<li><button class='pageDomain btn btn-default'>Domain</button></li>";
    html+="<li><button class='pageAnalytic btn btn-default'>Website analytics</button></li>";
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
    if(nbImg == 0)
    {

    }
    var html="";
    $("#mainView").append("<span class='contentImgPage'><span class='elementClose'><a href='#' class='removeElement'><img src='../images/cross.png'/></a></span><span class='elementClose'><a href='#' class='linkElement' data-config='img'><i class='fa fa-link'></i></a></span><img src='../images/FAKE.png' class='imgElement'></span>");
    $(".imgElement").resizable();
    $(".contentImgPage").css("display","inline-block");
    //$(".contentImgPage").css("border","1px solid black");
    $(".contentImgPage").css("padding","5px");
    $(".imgElement").css("border","1px dashed grey");
    $(".contentImgPage").draggable({cursor: "all-scroll"});
    html+="<ul class='navbarSubMenu'>";
    html+="<li><button class='replacePict btn btn-primary'> Replace pict</button></li>";
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
    var config = element.data("config");
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
            html += "<div id='contentInputLink'></div>";
            html += "</form>";
            $(".modal-body").html(html);
            break;
    }
    $("#modalParameters").modal();
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
            $("#contentInputLink").html("<span style='margin-top:10px;display:inline-block'>None, please upload :</span><span class='btn btn-primary btn-file pull-right'>File to upload<input type='file' name='uploadLink' class='form-control'></span>");
            break;
    }
}