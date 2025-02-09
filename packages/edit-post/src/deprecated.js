/**
 * WordPress dependencies
 */
import {
	PluginBlockSettingsMenuItem as EditorPluginBlockSettingsMenuItem,
	PluginDocumentSettingPanel as EditorPluginDocumentSettingPanel,
	PluginMoreMenuItem as EditorPluginMoreMenuItem,
	PluginPrePublishPanel as EditorPluginPrePublishPanel,
	PluginPostPublishPanel as EditorPluginPostPublishPanel,
	PluginPostStatusInfo as EditorPluginPostStatusInfo,
	PluginSidebar as EditorPluginSidebar,
	PluginSidebarMoreMenuItem as EditorPluginSidebarMoreMenuItem,
} from '@wordpress/editor';
import deprecated from '@wordpress/deprecated';

const deprecateSlot = ( name ) => {
	deprecated( `wp.editPost.${ name }`, {
		since: '6.6',
		alternative: `wp.editor.${ name }`,
	} );
};

/* eslint-disable jsdoc/require-param */
/**
 * @see PluginBlockSettingsMenuItem in @wordpress/editor package.
 */
export function PluginBlockSettingsMenuItem( props ) {
	deprecateSlot( 'PluginBlockSettingsMenuItem' );
	return <EditorPluginBlockSettingsMenuItem { ...props } />;
}

/**
 * @see PluginDocumentSettingPanel in @wordpress/editor package.
 */
export function PluginDocumentSettingPanel( props ) {
	deprecateSlot( 'PluginDocumentSettingPanel' );
	return <EditorPluginDocumentSettingPanel { ...props } />;
}

/**
 * @see PluginMoreMenuItem in @wordpress/editor package.
 */
export function PluginMoreMenuItem( props ) {
	deprecateSlot( 'PluginMoreMenuItem' );
	return <EditorPluginMoreMenuItem { ...props } />;
}

/**
 * @see PluginPrePublishPanel in @wordpress/editor package.
 */
export function PluginPrePublishPanel( props ) {
	deprecateSlot( 'PluginPrePublishPanel' );
	return <EditorPluginPrePublishPanel { ...props } />;
}

/**
 * @see PluginPostPublishPanel in @wordpress/editor package.
 */
export function PluginPostPublishPanel( props ) {
	deprecateSlot( 'PluginPostPublishPanel' );
	return <EditorPluginPostPublishPanel { ...props } />;
}

/**
 * @see PluginPostStatusInfo in @wordpress/editor package.
 */
export function PluginPostStatusInfo( props ) {
	deprecateSlot( 'PluginPostStatusInfo' );
	return <EditorPluginPostStatusInfo { ...props } />;
}

/**
 * @see PluginSidebar in @wordpress/editor package.
 */
export function PluginSidebar( props ) {
	deprecateSlot( 'PluginSidebar' );
	return <EditorPluginSidebar { ...props } />;
}

/**
 * @see PluginSidebarMoreMenuItem in @wordpress/editor package.
 */
export function PluginSidebarMoreMenuItem( props ) {
	deprecateSlot( 'PluginSidebarMoreMenuItem' );
	return <EditorPluginSidebarMoreMenuItem { ...props } />;
}
/* eslint-enable jsdoc/require-param */
