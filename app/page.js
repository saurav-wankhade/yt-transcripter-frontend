"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/transcribe_and_summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🎬 YouTube Transcriber & Summarizer
      </h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Enter YouTube video URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{
            padding: "0.5rem",
            width: "70%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginRight: "0.5rem",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            border: "none",
            background: "#0070f3",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Transcribe
        </button>
      </form>

      {loading && <p>⏳ Processing video... please wait.</p>}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      {result && (
        <div>
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>📝 Transcription</h2>
            <p style={{ whiteSpace: "pre-wrap", background: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
              {result.transcription}
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>📌 Summary</h2>
            <p style={{ whiteSpace: "pre-wrap", background: "#eef6ff", padding: "1rem", borderRadius: "8px" }}>
              {result.summary}
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
