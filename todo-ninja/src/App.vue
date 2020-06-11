<template>
	<v-app>
		<NavbarApp></NavbarApp>

		<v-content class="ma-5">
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
import NavbarApp from './components/Navbar.vue';

export default {
	name: 'App',
	components: {
		NavbarApp,
	},
	data() {
		return {};
	},
};
</script>
