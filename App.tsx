import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person'
import { Personlist } from './components/Personlist';
import { Status } from './components/Status';
function App() {
  const personName={
    first:"AJay",
    last:"jay"
  }
  const nameList=[
    {
      first:'jay',
      last:'suresh',
    },
    {
      first:'suinl',
      last:'jay',
    },
    {
      first:'jayajay',
      last:'sunil',
    },
  ]
  return (
    <div className="App">
      <Status status='loading'/>
     <Greet name='Ajay' message={20} islogged={true}/>
    <Person name={personName}/>
    <Personlist arrnames={nameList}/>
    <Oscar>
    <Heading>PLaceholder the text</Heading>
    </Oscar>
    <Button handleClick={(event)=>{
      console.log('Button CLick',event)
    }}/>
    <Input value='' handleChange={(event)=>console.log(event)}/>
    <Container styles={{border:'1px solid black',padding:'1rem'}}/>
    </div>
  );
}

export default App;
