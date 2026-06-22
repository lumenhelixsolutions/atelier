import { Link } from "react-router-dom";
import { useHealth } from "@/lib/api";

export default function HomePage() {
  const { data, error, loading } = useHealth();

  return (
    <section className="panel hero">
      <p className="eyebrow">DropClass-first shell</p>
      <h1>Form agents into talents</h1>
      <p className="lede">
        Discover free courses on Class Central, enroll on Coursera, and supervise
        an agent through formation — skills are tools; talents are how it thinks.
      </p>
      <div className="hero-actions">
        <Link className="btn primary" to="/formation">
          Open Formation
        </Link>
      </div>
      <div className="status-card">
        <span>API</span>
        {loading && <em>checking…</em>}
        {error && <em className="bad">{error}</em>}
        {data && (
          <code>
            {data.status} · dropclass={String(data.dropclass_package)}
          </code>
        )}
      </div>
    </section>
  );
}