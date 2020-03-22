export default function(resources) {
	return {
		data() {

			// Initialize data properties
			let initData = {
				remoteDataLoading: 0
			};

			initData.remoteErrors = {};

			// Initialize data properties
			for (const key in resources) {
				initData[key] = null;
				initData.remoteErrors[key] = null;
			}

			return initData;
		},
		methods: {
			async fetchResource(key, url) {

				this.$data.remoteDataLoading++;
				// Reset error
				this.$data.remoteErrors[key] =  null;

				try {
					this.$data[key] = await this.$fetch(url);
				}
				catch (e) {
					console.error(e);
					// Put error
					this.$data.remoteErros[key] = e;
				}

				this.$data.remoteDataLoading--;
			}
		},
		created() {
			for (const key in resources) {
				let url = resources[key];
				this.fetchResource(key, url);
			}
		},
		computed: {
			remoteDataBusy() {
				return this.$data.remoteDataLoading !== 0;
			},
			hasRemoteErrors() {
				return Object.keys(this.$data.remoteErrors)
					.some(key => this.$data.remoteErrors[key]);
			}
		}		
	}
}


