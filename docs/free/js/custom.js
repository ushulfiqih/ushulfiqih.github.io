setTimeout(function() {
	$('#mydiv').fadeOut('fast');
}, 8000); // <-- time in milliseconds

setTimeout(function() {
	$('#mytitle').fadeOut('fast');
}, 8000); // <-- time in milliseconds

setTimeout(function() {
	$('#mytitle2').fadeOut('fast');
}, 8000); // <-- time in milliseconds




return {
	on: {
		pageInit: function () {
			var self = this;
			self.sheetSwipeToStep = self.$app.sheet.create({
				el: '.demo-sheet-swipe-to-step',
				swipeToClose: true,
				swipeToStep: true,
				push: true,
				backdrop: true,
			});
		},
	}
}
