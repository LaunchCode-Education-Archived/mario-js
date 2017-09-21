
/* Add Event Listener to the button */
 const button = document.querySelector("button");
 const input = document.querySelector("input");
 button.addEventListener("click", function () {
 	if(input.value)
 		printPyramid(input.value);
 }, false);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
	console.log(height);
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!

}
