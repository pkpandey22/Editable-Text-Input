import {Component} from 'react'

import {
  MainContainer,
  Container,
  Heading,
  InputContainer,
  Input,
  Button,
} from './styledComponents'

class EditableText extends Component {
  state = {
    text: '',
    isEditable: true,
  }

  getText = event => {
    this.setState({text: event.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {isEditable, text} = this.state
    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isEditable ? (
              <Input value={text} type="text" onChange={this.getText} />
            ) : (
              <p>{text}</p>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}>Edit</Button>
            )}
          </InputContainer>
        </Container>
      </MainContainer>
    )
  }
}

export default EditableText
