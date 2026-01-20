function Home() {
    return (
        <div style={styles.page}>
            <div style={styles.card}>
                
                <img
                    src="https://cdn-icons-mp4.flaticon.com/512/19004/19004075.mp4"
                    alt="Site em construção"
                    style={styles.image}
                />

                <h1 style={styles.title}>
                    🚀 Site em Criação
                </h1>

                <p style={styles.text}>
                    Estamos desenvolvendo novos conteúdos e funcionalidades para oferecer
                    uma experiência ainda melhor.
                </p>

                <p style={styles.highlight}>
                    📅 Previsão de novidades: <strong>20/01/2026</strong>
                </p>

                <p style={styles.text}>
                    <strong>Este site está sendo criado para aprendizado e prática,
                    com foco em dinâmica e diversão.</strong>
                </p>

                <p style={styles.footer}>
                    Obrigado pela paciência e por nos acompanhar!
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
        padding: "20px"
    },
    card: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "16px",
        padding: "40px",
        maxWidth: "600px",
        textAlign: "center",
        color: "#ffffff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
    },
    image: {
        width: "120px",
        marginBottom: "20px"
    },
    title: {
        fontSize: "2.2rem",
        marginBottom: "15px"
    },
    text: {
        fontSize: "1.1rem",
        lineHeight: "1.6",
        marginBottom: "15px"
    },
    highlight: {
        fontSize: "1.1rem",
        marginBottom: "15px",
        color: "#00d4ff"
    },
    footer: {
        marginTop: "25px",
        fontSize: "0.95rem",
        opacity: 0.85
    }
};

export default Home;

