const { default: api } = require("@/utils/axiosInstance");

class ClientService {
    async submitContactForm (data) {
        const response = await api.post('/feedback', data);
        return response;
    }

    async feedback () {
        const response = await api.get('/feedback');
        return response;
    }

    async deleteFeedback (id) {
        const response = await api.delete(`/feedback/${id}`);
        return response;
    }

    async submitOrder (data) {
        const response = await api.post('/orders', data);
        return response;
    }
    
}
export const clientService = new ClientService;