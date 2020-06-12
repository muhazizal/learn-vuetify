<template>
	<v-dialog max-width="500px" transition="dialog-transition">
		<template v-slot:activator="{ on, attrs }">
			<v-btn depressed class="success mb-4" v-bind="attrs" v-on="on">Add new project</v-btn>
		</template>
		<v-card>
			<v-card-title>Add new project</v-card-title>
			<v-card-text>
				<v-form class="mx-3">
					<v-text-field name="title" label="Title" id="title" v-model="title" prepend-icon="folder"></v-text-field>
					<v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

					<!-- Date Picker -->
					<v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								:value="date"
								label="Due date"
								prepend-icon="event"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker v-model="date" scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="modal = false">Cancel</v-btn>
							<v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
						</v-date-picker>
					</v-dialog>

					<v-flex row justify-center>
						<v-btn depressed class="success" @click="addNewProject">
							<span class="mr-3">Add Project</span>
							<v-icon right>cloud_upload</v-icon>
						</v-btn>
					</v-flex>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			content: '',
			date: new Date().toISOString().substr(0, 10),
			modal: false,
		};
	},

	methods: {
		addNewProject() {
			console.log(`${this.title} ${this.content}`);
		},
	},
};
</script>
