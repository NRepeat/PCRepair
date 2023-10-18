import axios from "axios";

const httpClient = axios.create({
	baseURL: "http://localhost:5002",
});


const PCrepairApi = {
	getService: async (payload) => {
		try {
			const serviceData = await httpClient.get(`/service/${payload}`)
			return serviceData
		} catch (error) {
			console.error(error)
		}

	},
	getAllServices: async (payload) => {
		try {
			const serviceData = await httpClient.get(`/service/all`)
			const { data } = serviceData
			return data
		} catch (error) {
			console.error(error)
		}

	},
	postMessage: async (payload) => {
		try {

			const res = await httpClient.post(`/email/send`, payload)
			return res
		} catch (error) {
			console.error(error)
		}
	}

}
export { PCrepairApi }