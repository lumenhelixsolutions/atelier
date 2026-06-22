export default function FormationDiscover() {
  return (
    <section className="panel">
      <h3>Discover courses</h3>
      <p>
        Search Class Central for free Coursera courses. MVP: manual subject query
        → ranked candidates → human picks one to enroll.
      </p>
      <form className="discover-form" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Subject e.g. cartography, epidemiology" disabled />
        <button type="submit" disabled>
          Search (MVP)
        </button>
      </form>
    </section>
  );
}