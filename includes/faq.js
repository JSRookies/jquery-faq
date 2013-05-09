/*  Written by Chris Converse for Lynda.com   */
/*  Refactored by Chris Sita for JS Rookies using methods covered within CodeSchool.com Try jQuery module */



// Wrap within document ready function, covered in section 1.7 (http://try.jquery.com/levels/1/sections/7)
$(/*...*/)./*...*/(function(){ // FIX 

	// Loop through each FAQ item and add the letterHTML to each DOM node. 
	$('.faq').each (function(){
		// Create a DOM node varable named 'letterHTML' with the following HTML as text '<div class="letter_q"></div><div class="letter_a"></div>'. Covered in section 3.3
		/*...*/
		
		// Add the 'letterHTML' varaiable to the DOM on the correct element that was clicked. Covered in section 3.5 
		/*...*/
	});
	
	// Create an Event Handler covered in section 3.8 to act on the '.faq' DOM node. 
	// When constructing the event handler make sure to use event delegation covered in 3.20 to target the '.faq_question' div inside the parent ('.faq') 
	$('.faq') /*...*/ { // FIX 
		
		// Set up a conditional if-else. The if condition is checking to see if the parent() of the object that was clicked has a class named 'open'. Correct method covered in 5.7 that checks for class inside conditional
		if (/*...*/) {
			var thisFaq = $(this).closest('.faq');
			// Use DOM traversal to search for '.faq_answer_container'. Covered in 2.9. Then animate the elements height by 0px. Pick your animation speed, or use default. Covered in 5.8
			/*...*/ 
			// Use DOM traversal to search for '.letter_a', and remove gracefully by using the jQuery '.fadeOut()' method. 
			/*...*/ 
			// Use DOM traversal to search for '.letter_q', and animate gracefully. Hint - move the element to the left by 25px
			/*...*/ 
			// Remove the 'open' class. Covered in 5.6
			/*...*/
		} else{
			// Create new variable named newHeight, and assign it to the div height of the closest .faq_answer div element
			var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
			// Variable for closest .faq DOM node within the clicked element
			var thisFaq = $(this).closest('.faq');
			// Use DOM traversal to search for '.faq_answer_container'. Then animate the elements height by the newHeight variable. Pick your animation speed, or use default.
			/*...*/ 
			// Use DOM traversal to search for '.letter_a', and add gracefully by using the jQuery '.fadeIn()' method. Pass a desired speed into the method. 
			/*...*/ 
			// Use DOM traversal to search for '.letter_q', and animate gracefully. Hint - move the element to the left by 10px
			/*...*/ 
			// Add the 'open' class. Covered in 5.6
			/*...*/
		}
	});
	
	
	// Call the findAnchorLink Defined Below
	findAnchorLink();
    			
});

// Extra functionality to deep link to each FAQ generated on page.  
function findAnchorLink(){
	if (location.href.indexOf('#') != -1) {
		var namedAnchor = window.location.hash;
		var faqToFind = namedAnchor + ' .faq_question';
		$(faqToFind).trigger('click');
	}
}

