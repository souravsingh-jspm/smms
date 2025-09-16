function ShimmerBlock({ className }: { className?: string }) {
    return (
        <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
            <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        </div>
    );
}

export function DotsLoader() {
    return (
        <div className="flex items-center justify-center space-x-2">
            <span className="h-3 w-3 animate-bounce rounded-full bg-gray-400"></span>
            <span className="h-3 w-3 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.2s]"></span>
            <span className="h-3 w-3 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.4s]"></span>
        </div>
    );
}

export function SpinnerLoader() {
    return (
        <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
        </div>
    );
}

export default function ShimmerUI() {
    return (
        <div className="grid grid-cols-1 p-4 sm:grid-cols-2">
            {Array.from({ length: 2 }).map((_, idx) => (
                <div key={idx} className="p-4">
                    {/* Thumbnail */}
                    <ShimmerBlock className="mb-4 h-48 w-full rounded-lg" />

                    <div className="flex space-x-3">
                        {/* Avatar */}
                        <ShimmerBlock className="h-10 w-10 rounded-full" />

                        {/* Title + Subtitle */}
                        <div className="flex-1 space-y-2">
                            <ShimmerBlock className="h-4 w-3/4 rounded" />
                            <ShimmerBlock className="h-4 w-1/2 rounded" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <DotsLoader />
                    </div>
                </div>
            ))}
        </div>
    );
}
