import { omen, Store } from '@omen/core';
import styles from './App.scss'

const App = (props, state, { entries }) => (
  <div className={styles.host}>
    <h1>{props.title}</h1>
    <p>
      {
        entries.map(
          (value) => (
            <span
              className={styles.entry}
              style={
                value.transform(v => v && { backgroundColor: v.color })
              }
            >
              {value.child('title')}
            </span>
          )
        )
      }
    </p>
  </div>
);

// RenderFunction.data attributes create bindings to the store
App.data = {
  entries: 'app',
};

export default App;