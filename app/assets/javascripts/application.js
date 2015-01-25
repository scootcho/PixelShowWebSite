// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require fb_sdk
//= require d3.v3
//= require jquery_ujs
//= require turbolinks
//= require handlebars.runtime
//= require_tree ./handlebars_templates
//= require_tree .
//= require spectrum
//= require canvas2image
//= require base64
//= require base64binary
//= require bootstrap
//= require isotope.min
//= require infinite-scroll


$(document).on('page:change',function(){
  $("[link-to]").on("click",function() {window.location=""+$(this).attr("link-to")+"";});
});

