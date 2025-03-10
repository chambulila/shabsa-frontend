import api from "@/utils/axiosInstance";

class ProductService {
    async getProducts(filters) {
    const response = await api.get(`/user-products?${filters}`);
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

    async getOrders () {
        const response = await api.get('/orders');
        return response;
    }
}
export const productService = new ProductService;