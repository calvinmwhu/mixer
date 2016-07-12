$(function(){
  // toggle class when side nav is active
  $('.nav-toggle').click(function(e){
    e.preventDefault();
    $('.nav').toggleClass('is-active');
    $('.main').toggleClass('nav-is-active');
  });

  // add class when alternate inputs are filled
  $('.alt-input').focus(function(){
    $(this).addClass('is-filled');
  });
  $('.alt-input').blur(function(){
    var str = $(this).val();
    str = $.trim(str);
    if( str === '' ) {
      $(this).removeClass('is-filled');
    }
  });

  // toggle password visibility
  $('.password-toggle').click(function(){
    var toggle = $(this);
    var input = toggle.siblings('input');
    var type = toggle.siblings('input').attr('type');
    if (type === 'text') {
      toggle.addClass('is-hidden');
      input.attr('type','password');
    } else {
      toggle.removeClass('is-hidden');
      input.attr('type','text');
    }
  });

  // remove tag on click
  $('.tag-item').click(function(){
    $(this).fadeOut( 200, function () {
      $(this).remove();
    });
  });
});

function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

$$('.pie').forEach(function(pie) {
  var p = parseFloat(pie.textContent);
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  var circle = document.createElementNS(NS, "circle");
  var title = document.createElementNS(NS, "title");

  circle.setAttribute("r", 16);
  circle.setAttribute("cx", 16);
  circle.setAttribute("cy", 16);
  circle.setAttribute("stroke-dasharray", p + " 100");
  circle.setAttribute("class","circle");

  svg.setAttribute("viewBox", "0 0 32 32");
  svg.setAttribute("class", "chart");
  title.textContent = pie.textContent;
  /*	pie.textContent = '';*/
  svg.appendChild(title);
  svg.appendChild(circle);
  pie.appendChild(svg);
});
