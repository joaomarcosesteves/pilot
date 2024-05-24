
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex w-full h-full p-4 sm:p-8 pt-6">
            <Skeleton className="w-full h-full" />
        </div>
    )
}