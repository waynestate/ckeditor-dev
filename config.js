/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.skin = 'moono';
	config.image2_altRequired = true;
	config.pasteFromWordRemoveFontStyles = true;

	// Remove allowed margins when pasting from Word
	this.on('afterPasteFromWord', function(evt){
		var filter = evt.editor.filter.clone(),
			fragment = CKEDITOR.htmlParser.fragment.fromHtml( evt.data.dataValue ),
			writer = new CKEDITOR.htmlParser.basicWriter();

		// Disallow certain styles.
		filter.disallow( 'p{margin-*}' );

		// Process, and overwrite evt.data.dataValue.
		filter.applyTo( fragment );
		fragment.writeHtml( writer );
		evt.data.dataValue = writer.getHtml();
	});

	config.toolbar_page = [
		['Source','-','Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
		['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
		['Image','Table','HorizontalRule','SpecialChar','PageBreak'],
		'/',
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Link','Unlink','Anchor','Youtube'],
		'/',
		['Format','FontSize'],
		['Maximize', 'ShowBlocks','-','About']
	];
	config.toolbar_email = [
		['Source','-','Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
		['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
		['Image','Table','HorizontalRule','SpecialChar','PageBreak'],
		'/',
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Link','Unlink','Anchor','ButtonWayne','YoutubeThumb'],
		'/',
		['Format','FontSize'],
		['Maximize', 'ShowBlocks','-','About']
	];

	// %REMOVE_START%
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'buttonwayne,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'copyformatting,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
		'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'save,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tableselection,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'uploadimage,' +
		'youtubethumb,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
