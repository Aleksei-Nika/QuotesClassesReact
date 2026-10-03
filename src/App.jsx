import React from "react";
import { QuoteViewer } from "./QuoteViewer";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuoteViewer: true
    };
  }

  handleActiveQuoteViewer = () => {
    this.setState({ activeQuoteViewer: !this.state.activeQuoteViewer })
  }

  render(){
    return(
      <main>
        <button onClick={this.handleActiveQuoteViewer}>
          { this.state.activeQuoteViewer ? 'Скрыть цитату' : 'Показать цитату' }
        </button>
        { this.state.activeQuoteViewer ? <QuoteViewer /> : null }
      </main>
    )
  }
}