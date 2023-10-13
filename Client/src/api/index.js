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
			console.log("🚀 ~ file: index.js:22 ~ getAllServices: ~ data :", data )
			return data
		} catch (error) {
			console.error(error)
		}

	}
}
export { PCrepairApi }