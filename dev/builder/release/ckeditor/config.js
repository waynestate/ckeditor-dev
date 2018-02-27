/**
 * Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/terms-of-use/#open-source-licences
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

	this.on('instanceReady', function (evt){
		evt.editor.filter.addTransformations([
			[
				{
					element: 'a',
					left: function(el) {
						var is_external = (el.attributes.hasOwnProperty('href') && el.attributes.href.substr(0, 4) === 'http' && el.attributes.target === '_blank');

						return is_external && !el.attributes.rel;
					},
					right: function(el){
						el.attributes.rel = 'noopener';
					}
				}
			]
		]);
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

};

