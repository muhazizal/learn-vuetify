<template>
	<div class="dashboard">
		<h1 class="title grey--text">Dashboard</h1>

		<v-container class="my-5">
			<v-layout row class="ma-0 mb-3">
				<v-btn small depressed class="grey--text" @click="sortBy('title')">
					<v-icon left small>folder</v-icon>
					<span class="caption text-lowercase">Sort by Title</span>
				</v-btn>
				<v-btn small depressed class="grey--text ml-2" @click="sortBy('person')">
					<v-icon left small>person</v-icon>
					<span class="caption text-lowercase">Sort by Person</span>
				</v-btn>
				<v-btn small depressed class="grey--text ml-2" @click="sortBy('status')">
					<v-icon left small>history</v-icon>
					<span class="caption text-lowercase">Sort by Status</span>
				</v-btn>
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
export default {
	name: 'Dashboard',
	data() {
		return {
			sortData: ['Title', 'Person', 'Due', 'Status'],
			projects: [
				{
					title: 'Design a new website',
					person: 'The Net Ninja',
					due: '1st Jan 2019',
					status: 'ongoing',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
				},
				{
					title: 'Code up the homepage',
					person: 'Chun Li',
					due: '10th Jan 2019',
					status: 'complete',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
				},
				{
					title: 'Design video thumbnails',
					person: 'Ryu',
					due: '20th Dec 2018',
					status: 'complete',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
				},
				{
					title: 'Create a community forum',
					person: 'Gouken',
					due: '20th Oct 2018',
					status: 'overdue',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
				},
			],
		};
	},

	methods: {
		sortBy(value) {
			this.projects.sort((a, b) => (a[value] < b[value] ? -1 : 1));
		},
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
