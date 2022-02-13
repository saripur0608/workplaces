// Components
import BasicForm from "./Form/BasicForm.js";
// Styles
import styles from "./FormApp.module.css";

function App() {
  return (
    <div className={styles.app}>
      <BasicForm />
    </div>
  );
}

export default App;