import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import React from 'react'

export default function page() {
  return (
    <Dialog open={false}>
    <DialogHeader>Orders here</DialogHeader>
    <DialogContent>
        <h2>Your orders</h2>
        <p>Here are your recent orders</p>
    </DialogContent>
</Dialog>
  )
}
