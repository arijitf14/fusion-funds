export type CustomSpanProps = {
    children: React.ReactNode
    position?: string
    sidePanelHeading?: string
    className?: string
    size?: string
    actionButton?: boolean
    actionButtonText?: string
    cancelButton?: boolean
    cancelButtonText?: string
    saveButtonRef?: React.RefObject<HTMLButtonElement>
    cancelButtonRef?: React.RefObject<HTMLButtonElement>
    contentfullHeight?: boolean
  }
  
  // Adjust it to include 'sidePanelVisibility' if needed
  export type CustomSpanPropsWithVisibility = CustomSpanProps & {
    setSidePanelVisibility: React.Dispatch<React.SetStateAction<boolean>>
    setSidePanelAction?: React.Dispatch<React.SetStateAction<boolean>>
  }