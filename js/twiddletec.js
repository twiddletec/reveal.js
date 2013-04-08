
function initiframes() {

    // make all .fit images&iframes have a predictable *small* height so that the section sizes to its min-height and no taller
    var elementsToFit = document.getElementsByClassName('fit');
    for (var i = 0; i < elementsToFit.length; ++i) {
	elementsToFit[i].style.height = "50px";
    }
    
    // make all external links open in new tab
    var anchors = document.getElementsByTagName("a");
    for (i=0; i<anchors.length; i++) {
	var anchor = anchors[i];
	if (/CTCHTML/.test(anchor.getAttribute("href"))) {
            anchor.target = "_blank";
	}
    }
    Reveal.addEventListener( 'slidechanged', fitImage );
    Reveal.addEventListener( 'ready', fitImage );
}

function fitImage(event) {
    // can't do this with just CSS alone, see http://stackoverflow.com/questions/57091/how-to-position-a-div-to-fill-all-available-space-between-a-header-div-and-a-foo
    // Even using tables doesn't help
    var section = event.currentSlide || event;
    //var footer = section.getElementsByTagName('footer')[0];
    var big = section.getElementsByClassName('fit')[0];
    if (big) {
          big.style.height =
            section.offsetHeight
            - big.offsetTop
            // - (footer && footer.offsetHeight || 24) // TODO: why does exactly 24 fix the bug with #/2/2?
            - 16 // TODO - fit the press slides and have a real margin here
            - marginBottom
            + 'px';
    }
    console.log('Slide ' + event.indexh + ': section.offsetHeight: ' + section.offsetHeight + ', big.offsetTop: ' + (big? big.offsetTop : 'no big image');
		//+ ', footer: ' + (footer? footer.offsetHeight : 'no footer'));
}
