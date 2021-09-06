import styles from './Input.module.css';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValid: false,
            isTouched: false
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event) {
        console.log(event.target.value);
    }
 
    render() {
        const { props } = this.props;
        const { state } = this.state;

        return (
            <div className={styles.inputField}>
                <label htmlFor={props.id}>{props.placeholder}</label>
                <input
                    type="text"
                    id={props.id}
                    placeholder={props.placeholder}
                    onChange={state.changeHandler}
                    value={state.value}
                />
            </div>
        );

    }

}

export default Input;