export class KitRemoveEditorActiveCSSPanelOpen extends $e.modules.hookUI.After {
	getCommand() {
		return 'panel/open';
	}

	getId() {
		return 'kit-remove-editor-active-css--/panel/open';
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

export default KitRemoveEditorActiveCSSPanelOpen;
