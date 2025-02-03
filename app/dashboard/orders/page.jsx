"use client"
import CreateCategory from '@/components/category/CreateCategory';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { brandAndCategoryService } from '@/services/brandAndCategoryService';
import { orders } from '@/utils/localDb';
import { Edit2Icon, EyeIcon, Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
export default function page() {

  return (
    <div>
      <Dialog open={false}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Order</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <p className="text-xl font-bold">Orders List</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.orders?.map((order, index) => (
            <TableRow key={order.orderId}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>
                {new Date(order.orderDate).toLocaleDateString()}
              </TableCell>
              <TableCell> <Button className="bg-slate-200 text-black border-2 border-gray-700 hover:text-white">{order?.products?.length || 0}</Button> </TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell className="flex gap-3">
                <EyeIcon />
                <Edit2Icon />
                <Trash2Icon className="text-red-800" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
}
