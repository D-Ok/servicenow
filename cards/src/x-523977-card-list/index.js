import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-template-card';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div className="card-container">
			<now-template-card-assist className="card" tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
									  actions={[{"id":"share","label":"Copy URL"},
										  {"id":"close","label":"Mark Complete"}]}
									  heading={{"label":"my PDF docs are all locked from editing"}}
									  content={[{"label":"Number","value":{"type":"string","value":"INC0000006"}},
										  {"label":"State","value":{"type":"string","value":"Closed"}},
										  {"label":"Assignment Group","value":{"type":"string","value":"Service Desk"}},
										  {"label":"Assigned To","value":{"type":"string","value":"Luke Wilson"}}]}
									  footerContent={{"label":"Updated","value":"2020-05-01 17:36:44"}}
									  configAria={{}} contentItemMinWidth="300">
			</now-template-card-assist>
		<now-template-card-assist className="card" tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
actions={[{"id":"share","label":"Copy URL"},
         {"id":"close","label":"Mark Complete"}]}
		heading={{"label":"Hangs when trying to print VISIO document"}}
		content={[{"label":"Number","value":{"type":"string","value":"INC0000006"}},
{"label":"State","value":{"type":"string","value":"Closed"}},
{"label":"Assignment Group","value":{"type":"string","value":"Software"}},
{"label":"Assigned To","value":{"type":"string","value":"Howard Johnson"}}]}
footerContent={{"label":"Updated","value":"2020-05-01 16:08:05"}}
configAria={{}} contentItemMinWidth="300">
</now-template-card-assist>
			<now-template-card-assist className="card" tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
									  actions={[{"id":"share","label":"Copy URL"},
										  {"id":"close","label":"Mark Complete"}]}
									  heading={{"label":"Printer in my office is out of toner"}}
									  content={[{"label":"Number","value":{"type":"string","value":"INC0000006"}},
										  {"label":"State","value":{"type":"string","value":"Closed"}},
										  {"label":"Assignment Group","value":{"type":"string","value":"Hardware"}},
										  {"label":"Assigned To","value":{"type":"string","value":"ITIL User"}}]}
									  footerContent={{"label":"Updated","value":"2020-05-01 16:09:39"}}
									  configAria={{}} contentItemMinWidth="300">
			</now-template-card-assist>
			<now-template-card-assist className="card" tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
									  actions={[{"id":"share","label":"Copy URL"},
										  {"id":"close","label":"Mark Complete"}]}
									  heading={{"label":"Can`t read email"}}
									  content={[{"label":"Number","value":{"type":"string","value":"INC0000006"}},
										  {"label":"State","value":{"type":"string","value":"Closed"}},
										  {"label":"Assignment Group","value":{"type":"string","value":"Service Desk"}},
										  {"label":"Assigned To","value":{"type":"string","value":"Charlie Whithers"}}]}
									  footerContent={{"label":"Updated","value":"2020-05-01 16:09:51"}}
									  configAria={{}} contentItemMinWidth="300">
			</now-template-card-assist>
		</div>
	);
};

createCustomElement('x-523977-card-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
