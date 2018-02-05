CKEDITOR.plugins.add( 'youtubethumb', {
    icons: 'youtubethumb',
    init: function( editor ) {
        editor.addCommand( 'youtubethumbdialog', new CKEDITOR.dialogCommand( 'youtubethumbdialog' ) );
        editor.ui.addButton( 'youtubethumb', {
            label: 'Insert YouTube Thumbnail',
            command: 'youtubethumbdialog',
            toolbar: 'youtubethumb'
        });

        CKEDITOR.dialog.add( 'youtubethumbdialog', this.path + 'dialogs/button.js' );
    }
});