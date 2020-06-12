<template>
	<v-dialog max-width="500px" transition="dialog-transition" v-model="dialog">
		<template v-slot:activator="{ on, attrs }">
			<v-btn depressed class="success mb-4" v-bind="attrs" v-on="on">Add new project</v-btn>
		</template>
		<v-card>
			<v-card-title>Add new project</v-card-title>
			<v-card-text>
				<!-- Form -->
				<v-form class="mx-3" ref="form">
					<v-text-field
						name="title"
						label="Title"
						id="title"
						v-model="title"
						prepend-icon="folder"
						:rules="textRules"
					></v-text-field>
					<v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="textRules"></v-textarea>

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
								:rules="dateRules"
							></v-text-field>
						</template>
						<v-date-picker v-model="date" scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="modal = false">Cancel</v-btn>
							<v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
						</v-date-picker>
					</v-dialog>

					<!-- Submit -->
					<v-flex row justify-center class="mt-3">
						<v-btn depressed class="success" @click="submit" :loading="loading">
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
import db from '@/firebase';

export default {
	data() {
		return {
			title: '',
			content: '',
			date: null,
			modal: false,
			textRules: [v => !!v || 'Field is required', v => (v && v.length >= 3) || 'Minimum length is 3 characters'],
			dateRules: [v => !!v || 'Date is required'],
			dialog: false,
			loading: false,
		};
	},

	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				this.loading = true;
				this.dialog = true;
				const project = {
					title: this.title,
					content: this.content,
					date: this.date,
					person: 'Muhazizal',
					status: 'ongoing',
				};
				db.collection('projects')
					.add(project)
					.then(() => {
						this.dialog = false;
						this.loading = false;
					})
					.catch(() => console.log('failed'));
			}
		},
	},
};
</script>
