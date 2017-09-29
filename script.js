var nfAjaxDebugging = Marionette.Object.extend({
    initialize: function() {

        this.listenTo( Backbone.Radio.channel( 'forms' ), 'submit:response', this.submitResponse );
    },

    submitResponse: function( response, textStatus, jqXHR, formID ){

        // If the response contains 'data', then all is good; move along.
        if( 'undefined' !== typeof response.data ) return;

        // Request the formModel by ID from models/formModel.js
        var formModel = nfRadio.channel( 'form-' + formID ).request( 'get:form' );

        // Copied from controllers/submit.js
        var fields = {};
        _.each( formModel.get( 'fields' ).models, function( field ) {
            var fieldDataDefaults = { value:field.get( 'value' ), id:field.get( 'id' ) };
            // Add field data at the field ID for efficient access.
            fields[ field.get( 'id' ) ] = nfRadio.channel( field.get( 'type' ) ).request( 'get:submitData', fieldDataDefaults, field ) || fieldDataDefaults;
        } );

        console.log( fields );
    }
});

jQuery( document ).ready( function( $ ) {
    new nfAjaxDebugging();
});
