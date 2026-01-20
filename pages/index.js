import React, { useState } from "react";

function Home() {
  const [feedback, setFeedback] = useState("");
  const maxChars = 300;

  const handleSubmit = () => {
    if (feedback.trim().length === 0) {
      if (typeof window !== "undefined") {
        alert("Por favor, escreva uma sugestão antes de enviar.");
      }
      return;
    }

    if (typeof window !== "undefined") {
      alert("Obrigado! Sua sugestão foi registrada.");
    }
    setFeedback("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
          alt="Site em construção"
          style={styles.image}
        />

        <h1 style={styles.title}>Página em Construção!</h1>

        <p style={styles.text}>
          Estamos desenvolvendo novos conteúdos e funcionalidades para oferecer
          uma experiência ainda melhor.
        </p>

        <p style={styles.highlight}>
          Previsão de novidades: <strong>23/01/2026</strong>
        </p>

        <p style={styles.text}>
          <strong>
            Este site está sendo criado para aprendizado e prática, com foco em
            dinâmica e diversão. Sua opinião é muito importante para nós!
          </strong>
        </p>

        <div style={styles.feedbackBox}>
          <textarea
            style={styles.textarea}
            placeholder="Digite sua ideia ou opinião para melhorar o site (máx. 300 caracteres)..."
            maxLength={maxChars}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <div style={styles.counter}>
            {feedback.length} / {maxChars} caracteres
          </div>

          <button style={styles.button} onClick={handleSubmit}>
            Enviar Sugestão
          </button>
        </div>

        <p style={styles.footer}>
          Obrigado pela paciência e por contribuir com a evolução do site!
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "16px",
    padding: "40px",
    maxWidth: "650px",
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  image: {
    width: "120px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  highlight: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    color: "#00d4ff",
  },
  feedbackBox: {
    marginTop: "20px",
    textAlign: "left",
  },
  textarea: {
    width: "100%",
    minHeight: "120px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    resize: "none",
    outline: "none",
  },
  counter: {
    textAlign: "right",
    fontSize: "0.85rem",
    marginTop: "5px",
    opacity: 0.8,
  },
  button: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#00d4ff",
    color: "#003344",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footer: {
    marginTop: "25px",
    fontSize: "0.95rem",
    opacity: 0.85,
    textAlign: "center",
  },
};

export default Home;
