CKEDITOR.plugins.add( 'buttonwayne', {
    icons: 'buttonwayne',
    init: function( editor ) {
        editor.addCommand( 'buttondialog', new CKEDITOR.dialogCommand( 'buttondialog' ) );
        editor.ui.addButton( 'Buttonwayne', {
            label: 'Insert Button',
            command: 'buttondialog',
            toolbar: 'buttonwayne'
        });

        CKEDITOR.dialog.add( 'buttondialog', this.path + 'dialogs/button.js' );
    }
});