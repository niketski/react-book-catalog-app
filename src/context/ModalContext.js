import React from "react";

export const ModalContext = React.createContext();

class ModalContextProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            content: null
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(content) {
        this.setState({
            content: content
        });
    }

    hideModal() {
        this.setState({
            content: null
        });
    }


    render () {
        const { content } = this.state;
        const ModalComponent = content ? content : null;

        return (
            <ModalContext.Provider value={{ content, showModal: this.showModal, hideModal: this.hideModal}}>
                {this.props.children}
                { ModalComponent }
            </ModalContext.Provider>
        );

    }

}

export default ModalContextProvider;