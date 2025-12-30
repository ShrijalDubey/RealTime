import React, { useEffect, useState } from "react";
import styles from "../styles/Cards.module.css";
import { ImNewTab } from "react-icons/im";
import { FaChevronDown } from "react-icons/fa";

export default function Cards() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    fetchNews();
  }, [page]);

  async function fetchNews() {
    if (!API_KEY) {
      console.error("API key missing");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=india&language=en&pageSize=9&page=${page}&apiKey=${API_KEY}`
      );

      const data = await res.json();

      if (data.status === "ok") {
        setArticles(prev => [...prev, ...data.articles]);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Failed to fetch news", err);
    }
    setLoading(false);
  }

  return (
    <div className={styles.maincont}>
      {articles.map((article, i) => (
        <div className={styles.card} key={i}>
          <div className={styles.imageWrapper}>
            <img
              src={article.urlToImage || "https://via.placeholder.com/400"}
              alt={article.title || "news"}
              className={styles.cardImage}
            />
            <div className={styles.imageOverlay} />
          </div>

          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>
              {article.title}
            </h3>

            <p className={styles.cardDescription}>
              {article.description || "No description available."}
            </p>

            <div className={styles.cardFooter}>
              <span className={styles.source}>
                {article.source?.name || "Unknown"}
              </span>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readMore}
              >
                Read more <ImNewTab />
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.loadMoreContainer}>
        <button
          className={styles.loadMoreBtn}
          onClick={() => setPage(page + 1)}
          disabled={loading}
        >
          <FaChevronDown />
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}
