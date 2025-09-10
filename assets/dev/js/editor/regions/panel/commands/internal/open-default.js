export class OpenDefault extends $e.modules.CommandInternalBase {
	apply( args = {} ) {
		const currentDocument = elementor.documents.getCurrent();

		if ( ! currentDocument ) {
			return Promise.resolve();
		}

		$e.route( currentDocument?.config.panel.default_route, args );

		return Promise.resolve();
	}
}

export default OpenDefault;
