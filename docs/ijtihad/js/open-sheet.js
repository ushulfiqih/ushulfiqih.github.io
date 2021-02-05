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
