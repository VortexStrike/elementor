export class KitRemoveEditorActiveCSSDocumentsOpen extends $e.modules.hookUI.After {
	getCommand() {
		return 'editor/documents/open';
	}

	getId() {
		return 'kit-remove-editor-active-css--editor/documents/open';
	}

	getConditions() {
		const currentDocument = elementor.documents.getCurrent();
		return 'kit' === currentDocument?.config?.type;
	}

	apply() {
		// TODO: Remove - Temporary fix to avoid conflict with `elementor.exitPreviewMode()`.
		setTimeout( () => {
			elementorFrontend.elements.$body.removeClass( 'elementor-editor-active' );
		} );
	}
}

export default KitRemoveEditorActiveCSSDocumentsOpen;
