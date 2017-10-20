import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import Dropzone, { DropzoneProps, ImageFile } from 'react-dropzone'
import { Image, ImageProps } from 'semantic-ui-react'

const StyledImage = styled(Image)`
  max-height: 100%;
  max-width: 100%;
` as StyledComponentClass<ImageProps, {}>

interface OwnProps {
  value?: ImageFile
  onSelect?: (image: ImageFile) => void
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
    if (this.props.onSelect) {
      this.props.onSelect(image)
    }
  }

  renderImage = () => {
    const imageSrc = this.props.value ? this.props.value.preview : undefined
    const localImage = this.state.image ? this.state.image.preview : undefined
    const image = imageSrc || localImage
    if (image) {
      return <StyledImage centered src={image} />
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

export { ImageDropzone, ImageFile }