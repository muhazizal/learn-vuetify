<template>
	<div class="projects">
		<h1 class="title grey--text">Projects</h1>

		<v-container class="my-5">
			<v-expansion-panels>
				<v-expansion-panel v-for="project in myProject" :key="project.person">
					<v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
					<v-expansion-panel-content class="px-3 grey--text">
						<div class="font-weight-bold">{{ project.due }}</div>
						<div>{{ project.content }}</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-container>
	</div>
</template>

<script>
import db from '@/firebase';

export default {
	name: 'Projects',

	data() {
		return {
			projects: [],
		};
	},

	computed: {
		myProject() {
			return this.projects.filter(project => {
				return project.person === 'Muhazizal';
			});
		},
	},

	created() {
		db.collection('projects')
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					this.projects.push({
						...doc.data(),
						id: doc.id,
					});
				});
			});
	},
};
</script>
