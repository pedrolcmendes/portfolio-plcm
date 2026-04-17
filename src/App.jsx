import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />

      {/* Placeholder enquanto as seções não existem */}
      <main style={{ minHeight: "200vh", padding: "120px 56px 80px" }}>
        <h1
          style={{
            fontFamily: "var(--font-hero)",
            fontSize: "120px",
            color: "var(--white)",
            lineHeight: 0.9,
          }}
        >
          Pedro
          <br />
          <span style={{ color: "var(--primary)" }}>Mendes</span>
        </h1>
        <p
          style={{
            color: "var(--muted)",
            marginTop: "24px",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
          }}
        >
          Fase 2 concluída — navbar + tema + cursor ✓
        </p>
      </main>
    </ThemeProvider>
  );
}

export default App;
