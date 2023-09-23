import Heading from './components/Heading'
import Counter from './components/Counter'
import Lists from './components/Lists'

export default function App() {
  return (
    <div>
      <Heading title="Hello World" />
      <Counter />
      <Lists
        items={['1', '2', '3']}
        render={function (item) {
          return <span>{item}</span>
        }}
      />
      <Lists
        items={[<h1>Lol</h1>, <h2>Lal</h2>]}
        render={function (item) {
          return <span>{item}</span>
        }}
      />
    </div>
  )
}
