import * as React from 'react'
import Dropzone, { DropzoneProps, ImageFile } from 'react-dropzone'
import { Image } from 'semantic-ui-react'

interface OwnProps {
  placeholder?: React.ReactNode
}

interface State {
  image?: ImageFile
}

class ImageDropzone extends React.Component<OwnProps & DropzoneProps, State> {
  state: State = {
    image: undefined
  }

  renderImage = () => {
    if (this.state.image) {
      return <Image centered src={this.state.image.preview} />
    }
    return this.props.placeholder
  }

  render() {
    return (
      <Dropzone
        multiple={false}
        onDrop={([image]) => { this.setState({ image }) }}
        {...this.props}
      >
        {this.renderImage()}
      </Dropzone>
    )
  }
}

export { ImageDropzone }