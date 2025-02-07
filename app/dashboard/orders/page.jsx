"use client"
import ProductListSkeleton from '@/components/products/ProductsListSkeletonLoading';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { productService } from '@/services/productService';
import { Edit2Icon, EyeIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
export default function page() {
  const [orders, serOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);

  const fetchOders = async () => {
    try {
      const response = await productService.getOrders();
      if (response.status === 200) {
        serOrders(response.data);
      }
    } catch (error) {
      setError('An error occurred while fetching data')
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOders();
  }, []);

  const handleShowProducts = (order) => {
    setSelectedOrder(order);
    setOpenDetail(true);
  }

  const handleCloseDetail = () => {
    setSelectedOrder(null);
    setOpenDetail(false);
  }

  if (loading) {
    return <ProductListSkeleton />;
  }

  return (
    <div>
      <Dialog open={false}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Order</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={openDetail} onOpenChange={handleCloseDetail}>
        <DialogContent className="w-[80%] max-w-none">
          <DialogHeader>
            <DialogTitle>{`${selectedOrder?.customer_name} Order Details`}</DialogTitle>
          </DialogHeader>

          {selectedOrder?.items?.map((product, index) => <div key={index} className="border max-w-[50%] rounded-lg shadow-sm ">
            <div className=" cursor-pointer text-center">
              <Image
                src={product?.images[0] ?? '/logo.jpeg'}
                alt={product.product_name}
                width={400}
                height={300}
                className="object-cover text-center flex items-center rounded-t-lg"
              />

            <div className="p-4">
              <h3 className="text-lg font-semibold cursor-pointer  break-words line-clamp-2">
                {product.product_name}
              </h3>
              <p className="text-sm text-gray-500">{`Tsh. ${product.price}`}</p>
            </div>
            </div>

          </div>)}
        </DialogContent>
      </Dialog>
      <p className="text-xl font-bold">Orders List</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Customer Phone</TableHead>
            <TableHead>Customer Email</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!loading && orders?.orders?.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order?.customer_name}</TableCell>
              <TableCell>{order?.customer_phone}</TableCell>
              <TableCell>{order?.customer_email}</TableCell>
              <TableCell>
                {new Date(order?.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell> <Button onClick={() => handleShowProducts(order)} className="bg-slate-200 text-black border-2 border-gray-700 hover:text-white">{order?.items?.length || 0}</Button> </TableCell>
              <TableCell>{order?.status === 0 ? 'Pending' : 'Served'}</TableCell>
              <TableCell>{order?.total_price.toFixed(2)}</TableCell>
              <TableCell className="flex gap-3">
                <Trash2Icon className="text-red-800" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
}
