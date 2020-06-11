import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdi',
	},
	theme: {
		themes: {
			light: {
				primary: '#9652ff',
				success: '#3cd1c2',
				info: '#ffaa2c',
				error: '#f83e70',
			},
		},
	},
});
