const { default: api } = require("@/utils/axiosInstance");

class BrandAndCategoryService {
    async getBrands() {
        const response = await api.get('/brands');
        return response;
    }
    async getCategories() {
        const response = await api.get('/categories');
        return response;
    }
    async createBrand(data) {
        const response = await api.post('/brands', data);
        return response;
    }
    async createCategory(data) {
        const response = await api.post('/categories', data);
        return response;
    }
    async updateBrand(brandId, data) {
        const response = await api.put(`/brands/${brandId}`, data);
        return response;
    }
    async updateCategory(categoryId, data) {
        const response = await api.put(`/categories/${categoryId}`, data);
        return response;
    }
    async deleteBrand(brandId) {
        const response = await api.delete(`/brands/${brandId}`);
        return response;
    }
    async deleteCategory(categoryId) {
        const response = await api.delete(`/categories/${categoryId}`);
        return response;
    }
}
export const brandAndCategoryService = new BrandAndCategoryService;