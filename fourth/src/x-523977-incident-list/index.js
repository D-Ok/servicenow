import {createCustomElement, actionTypes} from '@servicenow/ui-core';
const {COMPONENT_BOOTSTRAPPED} = actionTypes;
import {createHttpEffect} from '@servicenow/ui-effect-http';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-template-card';

const view = (state, {updateState}) => {
	const {result = "NULL"} = state;
	return (
		<div className ="card-container">
			<h2>Insidents</h2>
			{result.map((data, index)=>(
				<now-template-card-assist className="card" tagline={{"icon":"tree-view-long-outline","label": data.sys_class_name}}
										  actions={[{"id":"share","label":"Copy URL"},
											  {"id":"close","label":"Mark Complete"}]}
										  heading={{"label": data.short_description}}
										  content={[{"label":"Number","value":{"type":"string","value": data.number}},
											  {"label":"State","value":{"type":"string","value": data.state}},
											  {"label":"Assignment Group","value":{"type":"string","value": data.assignment_group.display_value}},
											  {"label":"Assigned To","value":{"type":"string","value": data.assigned_to.display_value}}]}
										  footerContent={{"label":"Updated","value": data.sys_updated_on}}
										  configAria={{}} contentItemMinWidth="300">
				</now-template-card-assist>
			))}
	    </div>
    );
};

const CARD_FETCHED= 'CARD_FETCHED';
const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
const FETCH_FAILED = 'FETCH_FAILED';

createCustomElement('x-523977-incident-list', {
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const { dispatch } = coeffects;

			dispatch('FETCH_LATEST_INCIDENT');
		},
		'FETCH_LATEST_INCIDENT': createHttpEffect('api/now/table/incident?sysparm_display_value=true', {
			method: 'GET',
			successActionType: FETCH_SUCCEEDED,
         	errorActionType: FETCH_FAILED
		}),
		'FETCH_SUCCEEDED': (coeffects) => {
			const { action, updateState } = coeffects;
			const { result } = action.payload;
			updateState({result});
			console.log(result.length);
		},
		 'FETCH_FAILED': (coeffects) => {
			 const { action, updateState } = coeffects;
			 const { result } = action.payload;
			 alert('Cards fetch failed!');
		 }
	},
	renderer: {type: snabbdom},
	view,
	styles
});



