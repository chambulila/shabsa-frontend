import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Table, TableRow, TableBody, TableCell } from "@/components/ui/table";

export default function CategoryListSkeleton() {
  return (
    <div className="p-4">      
      <Skeleton className="h-10 w-1/3 mb-4" />
      <Button disabled className="ml-auto mb-4">
        <Skeleton className="h-8 w-24" />
      </Button>
      
      <Table>
        <TableBody>
          {[...Array(8)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-12 w-12 rounded-md" />
              </TableCell>
              <TableCell><Skeleton className="h-6 w-24" /></TableCell>
              <TableCell><Skeleton className="h-6 w-32" /></TableCell>
              <TableCell><Skeleton className="h-6 w-12" /></TableCell>
              <TableCell><Skeleton className="h-6 w-12" /></TableCell>
              <TableCell><Skeleton className="h-6 w-24" /></TableCell>
              <TableCell className="flex space-x-2">
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-8 w-8 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
