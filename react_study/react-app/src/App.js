import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Header(props) {
  console.log('props', props, props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('READ');
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javas', body: 'javas is ...' }
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="welcome" body="HELLO!, WEB"></Article>;
  } else if (mode === 'READ') {
    content = <Article title="Read" body="hello, read"></Article>;
  }

  return (
    <div className="App">
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode('READ');
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;

