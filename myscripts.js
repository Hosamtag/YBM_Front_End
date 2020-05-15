const FloatLabel = (() => {
  
  // add active class and placeholder 
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };
  
  // remove active class and placeholder
  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');    
  };  
  
  // register events
  const bindEvents = (element) => {
    const floatField = element.querySelector('input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);    
  };
  
  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.float-container');
    
    floatContainers.forEach((element) => {
      if (element.querySelector('input').value) {
          element.classList.add('active');
      }      
      
      bindEvents(element);
    });
  };
  
  return {
    init: init
  };
})();

FloatLabel.init();

$("#seeAnotherField").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv').show();
    $('#otherField').attr('required', '');
    $('#otherField').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv').hide();
    $('#otherField').removeAttr('required');
    $('#otherField').removeAttr('data-error');
  }
});
$("#seeAnotherField").trigger("change");

$("#seeAnotherField2").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv2').show();
    $('#otherField2').attr('required', '');
    $('#otherField2').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv2').hide();
    $('#otherField2').removeAttr('required');
    $('#otherField2').removeAttr('data-error');
  }
});
$("#seeAnotherField2").trigger("change");

$("#seeAnotherField3").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv3').show();
    $('#otherField3').attr('required', '');
    $('#otherField3').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv3').hide();
    $('#otherField3').removeAttr('required');
    $('#otherField3').removeAttr('data-error');
  }
});
$("#seeAnotherField3").trigger("change");

$("#seeAnotherField4").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv4').show();
    $('#otherField4').attr('required', '');
    $('#otherField4').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv4').hide();
    $('#otherField4').removeAttr('required');
    $('#otherField4').removeAttr('data-error');
  }
});
$("#seeAnotherField4").trigger("change");

$("#seeAnotherField5").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv5').show();
    $('#otherField5').attr('required', '');
    $('#otherField5').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv5').hide();
    $('#otherField5').removeAttr('required');
    $('#otherField5').removeAttr('data-error');
  }
});
$("#seeAnotherField5").trigger("change");

$("#seeAnotherField6").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv6').show();
    $('#otherField6').attr('required', '');
    $('#otherField6').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv6').hide();
    $('#otherField6').removeAttr('required');
    $('#otherField6').removeAttr('data-error');
  }
});
$("#seeAnotherField6").trigger("change");

$("#seeAnotherField7").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv7').show();
    $('#otherField7').attr('required', '');
    $('#otherField7').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv7').hide();
    $('#otherField7').removeAttr('required');
    $('#otherField7').removeAttr('data-error');
  }
});
$("#seeAnotherField7").trigger("change");

$("#seeAnotherField8").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv8').show();
    $('#otherField8').attr('required', '');
    $('#otherField8').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv8').hide();
    $('#otherField8').removeAttr('required');
    $('#otherField8').removeAttr('data-error');
  }
});
$("#seeAnotherField8").trigger("change");

$("#seeAnotherField9").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv9').show();
    $('#otherField9').attr('required', '');
    $('#otherField9').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv9').hide();
    $('#otherField9').removeAttr('required');
    $('#otherField9').removeAttr('data-error');
  }
});
$("#seeAnotherField9").trigger("change");

$("#seeAnotherField10").change(function() {
  if ($(this).val() == "yes") {
    $('#otherFieldDiv10').show();
    $('#otherField10').attr('required', '');
    $('#otherField10').attr('data-error', 'This field is required.');
  } else {
    $('#otherFieldDiv10').hide();
    $('#otherField10').removeAttr('required');
    $('#otherField10').removeAttr('data-error');
  }
});
$("#seeAnotherField10").trigger("change");

function next(id1, id2){
  document.getElementById(id1).style.display = "none";
  document.getElementById(id2).style.display = "block";
}
function back(id1, id2){
document.getElementById(id1).style.display ="none";
document.getElementById(id2).style.display = "block";
}

$(function() {
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    var windowTop = $(window).scrollTop(); 
    var targetWidth = 978;
    if($(window).width() >= targetWidth){
      $('nav').toggleClass('fixed-top', windowTop > 41);
      if(document.getElementById("Logo2") != null){
        var Logo = document.getElementById("Logo2");
        $('nav').toggleClass('size', windowTop < 90);
        if(windowTop > 90){
          Logo.style.width = '106px';
          Logo.style.height = '67.5px';
        }
        else{
          Logo.style.width = '212px';
          Logo.style.height= '135px'
        }
      }
      else{
        var Logo = document.getElementById("Logo");
        $('nav').toggleClass('borderbottom', windowTop < 90);
        if(windowTop > 90){
          Logo.style.width = '106px';
          Logo.style.height = '67.5px';
        }
        else{
          Logo.style.width = '159px';
          Logo.style.height= '101.25px'
        }
      }
    }
    else{
      $('#compressedheader').toggleClass('fixed-top', windowTop >41);
      if(document.getElementById("Logocomp") != null){
        var Logo = document.getElementById("Logocomp");
        if(windowTop > 90){
          Logo.style.width = '79.5px';
          Logo.style.height = '50.625px';
        }
        else{
          Logo.style.width = '119.25px';
          Logo.style.height= '75.9375px'
        }
      } 
      else{
        var Logo = document.getElementById("Logocompmain");
        $('#toggleheader').toggleClass('opennavmain', windowTop < 41);
        $('#toggleheader').toggleClass('opennav',windowTop > 41);
        if(windowTop > 41){
          Logo.style.width = '79.5px';
          Logo.style.height = '50.625px';
        }
        else{
          Logo.style.width = '119.25px';
          Logo.style.height= '75.9375px';
        }
      }
    } 
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
mapboxgl.accessToken = "pk.eyJ1IjoiaG9zYW10IiwiYSI6ImNrYTV1OWM3ZjAwbmoyeW9jNG1jbWJ5a2sifQ.K5Z-0L2DgW15PoCfUl5I2g";
 
/* Map: This represents the map on the page. */
var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/mapbox/streets-v11",
zoom: 14,
center: [-78.7813,35.7671]
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl(), 'top-left');
 
map.on("load", function () {
/* Image: An image is loaded and added to the map. */
map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
if (error) throw error;
map.addImage("custom-marker", image);
/* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
map.addLayer({
id: "markers",
type: "symbol",
/* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
source: {
type: "geojson",
data: {
type: 'FeatureCollection',
features: [
{
type: 'Feature',
properties: {
  'marker-color': '#FF7B00'
},
geometry: {
type: "Point",
coordinates: [-78.780427, 35.7673]
}
}
]
}
},
layout: {
"icon-image": "custom-marker",
}
});
});
});