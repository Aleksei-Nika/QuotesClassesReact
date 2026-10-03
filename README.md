# Приложение на React «Цитаты» 📜🖋
Учебный проект - реализация отображения цитат на React с применением классового подхода.

**Требования к проекту:**
- Создать класс-компонент `QuoteViewer` для отображения цитаты;
- Выводить одну случайную цитату из заранее заданного массива;
- Иметь кнопку для переключения на следующую случайную цитату;
- Добавить кнопку, убирающую компонент `QuoteViewer` из DOM;
- Выводить сообщения в консоль при монтировании, размонтировании компонента и при смене цитаты (обновлении компанента).

## Реализация
- Цитаты вынесены в [отдельный JS-файл](https://github.com/Aleksei-Nika/QuotesClassesReact/blob/main/src/quotes.js) в виде массива объектов со свойствами author (автор) и quote (текст цитаты). В этом же файле есть экспортируемая функция `random_quote`, позволяющая взять случайный объект из массива цитат;

- Одна случайная цитата, в виде объекта, сохраняется в класс `QuoteViewer` в состояние `state` компонента;

- Вывод сообщений в консоль при монтировании, размонтировании и обновлении компонента осуществляется   через методы `componentDidMount`, `componentWillUnmount`, `componentDidUpdate` соответственно;

- Размонтирование и повторное монтирование осуществляется при нажатии на кнопку. Сама кнопка находится в компоненте `App.jsx`;

- Реализованы CSS-модули, с применением адаптивной вёрстки под разные размеры экрана, для удобства чтения текста на разных устройствах.

### Структура компонентов проекта
```text
main.jsx
└── App.jsx
    └── QuoteViewer.jsx
```

### Код основного компонента `QuoteViewer`:
```jsx
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
```