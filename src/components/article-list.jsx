import Article from "./article";


export default function ArticleList ({ posts }) {
    return (
        <>
        <main>
            {posts.map((post) => (
                <Article
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    />
            ))}
        </main>
        </>
    )
}
/*export default function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/articles")
            .then((res) => res.json())
            .then((data) => {
                setArticles(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading articles...</div>;

    return (
        <div className="article-list">
            {articles.map((article) => (
                <ArticlePreview key={article.id} article={article} />
            ))}
        </div>
    );
}*/
