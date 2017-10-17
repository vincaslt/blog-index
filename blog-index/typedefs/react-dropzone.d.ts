declare module 'react-dropzone' {
  import { CSSProperties, Component, DragEvent, InputHTMLAttributes } from "react";

  export interface ImageFile extends File {
    preview?: string;
  }

  export type DropFileEventHandler = (acceptedOrRejected: ImageFile[], event: DragEvent<HTMLDivElement>) => void;
  export type DropFilesEventHandler = (accepted: ImageFile[], rejected: ImageFile[], event: DragEvent<HTMLDivElement>) => void;

  type PickedAttributes = "accept" | "className" | "multiple" | "name" | "onClick" | "onDragStart" | "onDragEnter" | "onDragOver" | "onDragLeave" | "style";

  export interface DropzoneProps extends Pick<InputHTMLAttributes<HTMLDivElement>, PickedAttributes> {
    disableClick?: boolean;
    disabled?: boolean;
    disablePreview?: boolean;
    preventDropOnDocument?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    maxSize?: number;
    minSize?: number;
    activeClassName?: string;
    acceptClassName?: string;
    rejectClassName?: string;
    disabledClassName?: string;
    activeStyle?: CSSProperties;
    acceptStyle?: CSSProperties;
    rejectStyle?: CSSProperties;
    disabledStyle?: CSSProperties;
    onDrop?: DropFilesEventHandler;
    onDropAccepted?: DropFileEventHandler;
    onDropRejected?: DropFileEventHandler;
    onFileDialogCancel?: () => void;
  }

  class Dropzone extends Component<DropzoneProps> {
    open(): void;
  }

  export default Dropzone;
}