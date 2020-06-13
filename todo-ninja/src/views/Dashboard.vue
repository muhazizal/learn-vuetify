<template>
	<div class="dashboard">
		<h1 class="title grey--text">Dashboard</h1>

		<v-container class="my-8">
			<v-layout row class="ma-0 mb-3">
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small depressed class="grey--text" @click="sortBy('title')" v-bind="attrs" v-on="on">
							<v-icon left small>folder</v-icon>
							<span class="caption text-lowercase">by Title</span>
						</v-btn>
					</template>
					<span>Sorting data by title</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small depressed class="grey--text ml-2" @click="sortBy('person')" v-bind="attrs" v-on="on">
							<v-icon left small>person</v-icon>
							<span class="caption text-lowercase">by Person</span>
						</v-btn>
					</template>
					<span>Sorting data by person</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small depressed class="grey--text ml-2" @click="sortBy('status')" v-bind="attrs" v-on="on">
							<v-icon left small>history</v-icon>
							<span class="caption text-lowercase">by Status</span>
						</v-btn>
					</template>
					<span>Sorting data by status</span>
				</v-tooltip>
			</v-layout>

			<v-card tile flat class="grey lighten-4" v-for="project in projects" :key="project.title">
				<v-layout row wrap :class="`ma-0 px-6 py-4 project ${project.status}`">
					<v-flex xs12 md6>
						<div class="caption grey--text">Project Title</div>
						<div>{{ project.title }}</div>
					</v-flex>

					<v-flex xs12 sm4 md2>
						<div class="caption grey--text">Person</div>
						<div>{{ project.person }}</div>
					</v-flex>

					<v-flex xs12 sm4 md2>
						<div class="caption grey--text">Due By</div>
						<div>{{ project.due }}</div>
					</v-flex>

					<v-flex xs12 sm4 md2>
						<div class="text-right">
							<v-chip label :class="`mt-1 white--text caption ${project.status}`">{{ project.status }}</v-chip>
						</div>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import db from '@/firebase';

export default {
	name: 'Dashboard',

	data() {
		return {
			projects: [],
		};
	},

	methods: {
		sortBy(value) {
			this.projects.sort((a, b) => (a[value] < b[value] ? -1 : 1));
		},
	},

	created() {
		db.collection('projects').onSnapshot(snapshot => {
			snapshot.docChanges().forEach(change => {
				if (change.type === 'added') {
					this.projects.push({
						...change.doc.data(),
						id: change.doc.id,
					});
				}
			});
		});
	},
};
</script>

<style scoped>
.project.complete {
	border-left: 4px solid #3cd1c2;
}
.project.ongoing {
	border-left: 4px solid orange;
}
.project.overdue {
	border-left: 4px solid tomato;
}
.theme--light.v-chip:not(.v-chip--active).complete {
	background: #3cd1c2;
}
.theme--light.v-chip:not(.v-chip--active).ongoing {
	background: #ffaa2c;
}
.theme--light.v-chip:not(.v-chip--active).overdue {
	background: #f83e70;
}
</style>
