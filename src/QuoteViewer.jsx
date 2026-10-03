import React from 'react';
import { random_quote } from './quotes';
import style from './QuoteViewer.module.css';

export class QuoteViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {current: random_quote()};
    }

    componentDidMount() {
        console.log('Компонент QuoteViewer смонтирован');
    }

    componentWillUnmount(){
        console.log('Компонент QuoteViewer размонтирован');
    }

    componentDidUpdate(){
        console.log(`цитата обновлена: ${this.state.current.quote}`);
    }

    handleNextQuote = () => {
        this.setState({ current: random_quote() });
    }

    render() {
        return(
            <>
                <div className={style.quoteBlock}>
                    <p className={style.textQuote}>&ldquo;{this.state.current.quote}&rdquo;</p>
                    <p className={style.textAuthor}>{this.state.current.author}</p>
                </div>
                <button onClick={this.handleNextQuote}>Следующая цитата</button>
            </>
        )
    }
}