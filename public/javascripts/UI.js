/**
 * Created by JOHNNY on 14/04/14.
 */
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
    html += "<li><i class='fa fa-picture-o fa-2x'></i><br><a href='#'> Picture</a></li>";
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

}

function showWidgetMenu()
{
    var html="";
    html+="<ul class='navbarSubMenu'>";
    html += "<li><i class='fa fa-twitter fa-2x'></i><br><a href='#'> Twitter feed</a></li>";
    html += "<li><i class='fa fa-vimeo-square fa-2x'></i><br><a href='#'> Vimeo</a></li>";
    html += "<li><i class='fa fa-map-marker fa-2x'></i><br><a href='#'> Google Maps</a></li>";
    html+="<li><i class='fa fa-step-backward fa-2x'></i><br><a href='#' class='backToElement'>Back</a></li>";
    html+="</ul>";
    $(".subMenu").html(html);
}