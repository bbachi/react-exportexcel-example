import React from 'react';
import './App.css';
import { Customers } from './Customers'
import { Header } from './Header'
import { ExportReactCSV } from './ExportReactCSV'

class App extends React.Component {

  
  customers = () => {
    let custs = []
    for (let i = 0; i <= 25; i++) {
      custs.push({firstName: `first${i}`, lastName: `last${i}`,
      email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`});
    }
    return custs;
  }

  state = {
    customers: this.customers(),
    fileName: 'Customers'
  }
  
  render() {

    return (
      <div className="App">
        <Header />
        <div className="row">
            <div className="col-md-8">
                <h2>Customers</h2>
            </div>
            <div className="col-md-4 center">
                <ExportReactCSV csvData={this.state.customers} fileName={this.state.fileName} />
            </div>
        </div>
        <Customers customers={this.customers()}/>
      </div>
    );
  }
}

export default App;
