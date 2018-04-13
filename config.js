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

	// ACF rules not allowed by any plugins
	config.extraAllowedContent = '*(*)[data-*];' + // allow all classes and any data attribute on all elements
	'iframe{*}[width,height,src,frameborder,allowfullscreen];' + // Don't require the attributes that the YouTube Plugin required
	'img{margin*,padding*};' + // Allow margins and padding on <img> to be modifiable
	'blockquote cite;' // Allow <cite> to be within the <blockquote>
	;

	// Remove allowed margins when pasting from Word
	this.on('afterPasteFromWord', function(evt){
		var filter = evt.editor.filter.clone(),
			fragment = CKEDITOR.htmlParser.fragment.fromHtml( evt.data.dataValue ),
			writer = new CKEDITOR.htmlParser.basicWriter();

		// Disallow certain styles.
		filter.disallow( 'p{margin-*};*(Mso*)' );

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
			],
            [
                {
                    element: 'img',
					left: function(el) {
                    	return Object.keys(el.styles).length === 0;
					},
                    right: function(el){
                        el.styles.margin = '10px';
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

	// %REMOVE_START%
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'blockquote,' +
		'buttonwayne,' +
		'clipboard,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'find,' +
		'flash,' +
		'font,' +
		'format,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'image2,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'scayt,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'sourcearea,' +
		'specialchar,' +
		'tab,' +
		'table,' +
		'tableselection,' +
		'tabletools,' +
		'toolbar,' +
		'undo,' +
		'youtube,' +
		'youtubethumb,' +
		'wsc,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
