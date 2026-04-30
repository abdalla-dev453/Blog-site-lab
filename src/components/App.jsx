import Header from "./header";
import About from "./about";
import ArticleList from "./article-list";
import './app.css';


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
    <>
      <Header name="My Blog" />

      <About
        image="blog.jpeg"
        about="Welcome to my blog where i share ideas and stories"
      />

      <ArticleList posts={posts} />
    </>

  );
}

export default App;
