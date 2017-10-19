import * as React from 'react'
import Dropzone, { DropzoneProps, ImageFile } from 'react-dropzone'
import { Image } from 'semantic-ui-react'

interface OwnProps {
  onChange?: (image: ImageFile) => void
  placeholder?: React.ReactNode
}
type Props = OwnProps & DropzoneProps

interface State {
  image?: ImageFile
}

class ImageDropzone extends React.Component<Props, State> {
  state: State = {
    image: undefined
  }

  handleChange = ([image]: ImageFile[]) => {
    this.setState({ image })
    if (this.props.onChange) {
      this.props.onChange(image)
    }
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
        onDrop={this.handleChange}
        {...this.props}
      >
        {this.renderImage()}
      </Dropzone>
    )
  }
}

export { ImageDropzone }