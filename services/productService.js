import api from "@/utils/axiosInstance";

class ProductService {
    async getProducts() {
        const response = await api.get('/products');
        return response;
    }
    async getProductById(productId) {
        const response = await api.get(`/products/${productId}`);
        return response;
    }
    async createProduct(data) {
        const response = await api.post('/products', data);
        return response;
    }
    async updateProduct(productId, data) {
        const response = await api.put(`/products/${productId}`, data);
        return response;
    }
    async deleteProduct(productId) {
        const response = await api.delete(`/products/${productId}`);
        return response;
    }
    async getBrandAndCategory() {
        const response = await api.get(`/products/create`);
        return response;
    }
}
export const productService = new ProductService;