import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>Hello world!</div>
	);
};

createCustomElement('x-523977-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});
