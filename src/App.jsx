import Section from "./Components/Section";

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 1fr)",
          gap: "30px",
          gridTemplateAreas: `
        "profile profile project project"
        "profile profile project project"
        "profile profile tech email"
        "social social tech blog"
      `,
          height: '80vh',
          width: '80vw',
          maxWidth: '1200px',
          maxHeight: '1000px'
        }}
      >
        <Section header="Profile" style={{ gridArea: "profile" }}>
          <p>This is the profile section.</p>
        </Section>
        <Section header="Project" style={{ gridArea: "project" }}>
          <p>This is the project section.</p>
        </Section>
        <Section header="Tech" style={{ gridArea: "tech" }}>
          <p>This is the tech section.</p>
        </Section>
        <Section header="Email" style={{ gridArea: "email" }}>
          <p>This is the email section.</p>
        </Section>
        <Section header="Social" style={{ gridArea: "social" }}>
          <p>This is the social section.</p>
        </Section>
        <Section header="Blog" style={{ gridArea: "blog" }}>
          <p>This is the blog section.</p>
        </Section>
      </div>
      <footer style={{
        width: '100%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f1f1f1',
        position: 'relative',
        bottom: 0
      }}>
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
