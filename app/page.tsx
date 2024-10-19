// app/home/page.tsx (or wherever your HomePage component is located)
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Notes App</h1>
                <p className="text-lg text-gray-600">Your personal space for notes</p>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Welcome to Your Notes</h2>
                <p className="text-gray-700 mb-4">
                    Here, you can organize your thoughts, tasks, and ideas. Use this app to keep track of important information and revisit it whenever you need.
                </p>

                <div className="flex justify-center mb-4">
                    <Link href="/notes">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                            Create New Note
                        </button>
                    </Link>
                </div>

                <h2 className="text-xl font-semibold mb-2">Features:</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>Organize notes by categories</li>
                    <li>Easy access to all your notes</li>
                    <li>Search for notes quickly</li>
                    <li>Mobile-friendly design</li>
                </ul>

                <p className="text-center text-gray-500">Start your journey of note-taking today!</p>
            </section>
        </div>
    );
}
