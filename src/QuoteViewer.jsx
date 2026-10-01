import React from 'react';
import { random_qoute } from './quotes';

export class QuoteViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {curent: random_qoute()};
    }

    componentDidMount() {
        console.log('Компонент QuoteViewer смонтирован');
    }

    componentWillUnmount(){
        console.log('Компонент QuoteViewer размонтирован');
    }

    componentDidUpdate(){
        console.log(`цитата обновлена: ${this.state.curent}`);
    }

    handleNextQuote = () => {
        this.setState({ curent: random_qoute() });
    }

    render() {
        return(
            <div>
                <div>
                    <p>{this.state.curent.quote}</p>
                    <p>{this.state.curent.author}</p>
                </div>
                <button onClick={this.handleNextQuote}>Следующая цитата</button>
            </div>
        )
    }
}