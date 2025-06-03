interface BlogFilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    totalPosts: number;
}

export function BlogFilter({ searchTerm, onSearchChange, totalPosts }: BlogFilterProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="relative w-full sm:w-64">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Chercher un article"
                    className="w-full px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                />
                <svg
                    className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            {searchTerm && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {totalPosts} article{totalPosts !== 1 ? 's' : ''} found
                </p>
            )}
        </div>
    );
}