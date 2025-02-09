import { Skeleton } from "@/components/ui/skeleton";

const CarouselSkeleton = () => {
  return (
    <div className="relative h-[600px] flex items-center">
      {/* Background Skeleton */}
      <div className="absolute inset-0 z-0">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-12 w-5/6 mb-8" />
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  );
};

export default CarouselSkeleton;
