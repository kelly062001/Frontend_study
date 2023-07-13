import logo from './logo.svg';
import './App.css';

function Header(props){
  return <header>{props.title}</header>
}

function Nav(props){
  const lis =[];
  for (let i=0 ; i<props.topics.length;i++)
  {let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+ t.id}>{t.title}</a> {t.body}</li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}


function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}


function App() {
  const topics = [
    {id : 1, title : 'html', body : 'html is html ' },
    {id : 2, title : 'css', body : 'css is css ' },
    {id : 3, title : 'js', body : 'js is js ' }

  ]
  return (
    <div className="App">
      <Header title='WEB'></Header>
      <Nav topics={topics}></Nav>
      <Article title='welcome welcome' body='welcome web'></Article>
    </div>
  );
}

export default App;
