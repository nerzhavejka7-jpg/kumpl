( function( api ) {

	// Extends our custom "product-review" section.
	api.sectionConstructor['product-review'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );