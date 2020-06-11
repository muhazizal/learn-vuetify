<template>
	<nav>
		<v-app-bar flat dense app>
			<v-app-bar-nav-icon @click="drawer = !drawer" class="grey-text"></v-app-bar-nav-icon>

			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Todo</span>
				<span>Ninja</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn depressed class="grey--text">
				<span>Sign Out</span>
				<v-icon right>exit_to_app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer app v-model="drawer" class="primary">
			<v-list-item-group>
				<v-list-item v-for="item in items" :key="item.text" router :to="item.route">
					<v-list-item-action>
						<v-icon class="white--text">{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			items: [
				{ icon: 'dashboard', text: 'Dashboard', route: '/' },
				{ icon: 'folder', text: 'My Projects', route: '/projects' },
				{ icon: 'person', text: 'Team', route: '/team' },
			],
		};
	},
};
</script>
