import './App.css';
import Customer from './components/Customer'
import { Component } from 'react';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name' : '남도현',
    'birthday': '961006',
    'gender':'남자',
    'job':'대학생'
  },
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday': '951006',
  'gender':'남자',
  'job':'프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '무야호',
  'birthday': '941009',
  'gender':'남자',
  'job':'예능인'
}
]

class App extends Component {
  render() {
    return (
      <div>
      {
        customers.map(c => {
          return (
            <Customer
             key={c.id}
             id={c.id}
             image={c.image}
             name={c.name}
             birthday={c.name}
             gender={c.gender}
             job={c.job} 
             
            />
          )
        })
      }
     </div>
    

   );
  }
 }
export default App;
