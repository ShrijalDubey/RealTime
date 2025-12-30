import React, { useEffect, useState } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/Herosection.module.css";

export default function Herosection() {
  const [article, setArticle] = useState(null);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    fetchTopNews();
  }, []);

  async function fetchTopNews() {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=india&language=en&sortBy=publishedAt&pageSize=1&apiKey=${API_KEY}`
      );

      const data = await res.json();

      if (data.status === "ok" && data.articles.length > 0) {
        setArticle(data.articles[0]);
      }
    } catch (err) {
      console.error("Failed to fetch hero news", err);
    }
  }

  if (!article) return null;

  return (
    <div className={styles.maincont}>
      <div
        className={styles.heroimg}
        style={{
          backgroundImage: `url(${article.urlToImage || ""})`,
        }}
      >
        <div className={styles.textdiv}>
          <div className={styles.featured}>
            <span className={styles.features}>
              <FaRankingStar /> Featured
            </span>
            <span className={styles.features}>
              {article.source?.name || "News"}
            </span>
          </div>

          <div className={styles.herotitle}>
            {article.title}
          </div>

          <div className={styles.herotext}>
            {article.description}
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.herobtn}
          >
            Read More <FaArrowRight className={styles.arrow} />
          </a>
        </div>
      </div>
    </div>
  );
}
