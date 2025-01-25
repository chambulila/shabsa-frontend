import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import React from 'react'

function Orders() {
  return (
    <div>Orders page
      <Dialog open={true}>
        <DialogHeader>Orders</DialogHeader>
        <DialogContent>
          <h2>Your orders</h2>
          <p>Here are your recent orders</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Orders