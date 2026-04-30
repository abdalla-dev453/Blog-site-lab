import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {
    const posts = [
        {
            id: 1,
            title: "First Blog Post",
            date: "April 30, 2026",
            preview: "This is the preview of the first blog post..."
        },
        {
            id: 2,
            title: "Second Blog Post",
            date: "May 1, 2026",
            preview: "This is the preview of the second blog post..."
        }
    ];

    return (
        <div>
            <Header name="My Blog" />

            <About
                image="/blog.jpeg"
                about="Welcome to my blog where I share ideas and stories."
            />

            <ArticleList posts={posts} />
        </div>
    );
}

export default App;