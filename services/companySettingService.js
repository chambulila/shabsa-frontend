const { default: api } = require("@/utils/axiosInstance");

class CompanySettingService {
    async getAboutUs() {
        const response = await api.get('/about-us');
        return response;
    }

    async storeAboutUs(data) {
        const response = await api.post('/about-us', data);
        return response;
    }

    async storeLandingPageData (data) {
        const response = await api.post('/landing', data);
        return response;
    }

}
export const companySettingService = new CompanySettingService;