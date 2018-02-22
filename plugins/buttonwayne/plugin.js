CKEDITOR.plugins.add( 'buttonwayne', {
    icons: 'buttonwayne',
    init: function( editor ) {
        editor.addCommand( 'buttondialog', new CKEDITOR.dialogCommand( 'buttondialog' ) );
        editor.ui.addButton( 'ButtonWayne', {
            label: 'Insert Button',
            command: 'buttondialog',
            toolbar: 'links,90'
        });

        CKEDITOR.dialog.add( 'buttondialog', this.path + 'dialogs/button.js' );
    }
});
