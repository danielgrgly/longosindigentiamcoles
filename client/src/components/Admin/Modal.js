import React from 'react';
import {view} from 'react-stax'
import styled from 'styled-components';
import Modal from 'react-responsive-modal'
import modalStore from './../../stores/modalStore'

const Wrapper = styled.div`
    .overlay{
        background-color: pink;
    }
    .modal{
        color: pink !important;

    }

`;

const store = modalStore;
class ResModal extends React.Component{

    onOpenModal = () => {
        setTimeout(function(){ store.shown = true}, 20000)      
      };
    


    render() {
        return (
            <Wrapper>
                 <Modal
              open={store.shown}
              showCloseIcon={false}
              closeOnOverlayClick={false}
              center
              styles={{
                overlay: {
                    backgroundColor: 'transparent'
                },
                modal: {
                    backgroundColor: '#2f3542',
                    color: 'white',
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    maxWidth: '300px',
                    fontSize: '.7rem',
                    padding: '0 1rem'
                }
              }}
            >
              <p>{store.head}</p>
              <h2>{store.body}</h2>
            </Modal>
            </Wrapper>
           
        );
    }
}



const trigger = function (error) {
    if (error.response) {
      if(error.response.data.email){
        modalStore.show(error.response.data.email, 'Something Is Not Correct')
      }else if(error.response.data.password){
        modalStore.show(error.response.data.password, 'Something Is Not Correct')
      }
    }
  }

export default view(ResModal)
export {trigger};